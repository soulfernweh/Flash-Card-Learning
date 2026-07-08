/**
 * Shichida Kids - Main Application
 */

(function () {
    "use strict";

    // === State ===
    let currentAge = null;
    let currentScreen = "home";
    let difficulty = null;

    // Flash Cards state
    let flashInterval = null;
    let flashIndex = 0;
    let flashCards = [];
    let flashRunning = false;

    // Memory Grid state
    let gridItems = [];
    let gridAnswers = [];
    let gridPhase = "idle"; // idle, showing, answering

    // Linking Memory state
    let linkStory = null;
    let linkIndex = 0;
    let linkPhase = "idle";
    let linkAnswerOrder = [];

    // Mandala state
    let mandalaPattern = [];
    let mandalaUserPattern = [];
    let mandalaPhase = "idle";
    let selectedColor = null;

    // ESP state
    let espCorrect = 0;
    let espTotal = 0;
    let espAnswer = null;

    // Math Dots state
    let dotsAnswer = 0;

    // === DOM Helpers ===
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    function showScreen(name) {
        $$(".screen").forEach((s) => s.classList.remove("active"));
        $(`#screen-${name}`).classList.add("active");
        currentScreen = name;
    }

    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function showResult(elementId, message, type) {
        const el = $(`#${elementId}`);
        el.textContent = message;
        el.className = `result-display ${type}`;
        el.classList.remove("hidden");
    }

    function hideResult(elementId) {
        const el = $(`#${elementId}`);
        el.classList.add("hidden");
    }

    // === Navigation ===
    function selectAge(age) {
        currentAge = age;
        difficulty = DIFFICULTY[age];
        $$(".age-btn").forEach((btn) => btn.classList.remove("selected"));
        document.querySelector(`[data-age="${age}"]`).classList.add("selected");
        $("#activities-menu").classList.remove("hidden");
    }

    function navigateToActivity(activity) {
        showScreen(activity);
        resetActivity(activity);
    }

    function goHome() {
        stopFlashCards();
        showScreen("home");
    }

    function resetActivity(activity) {
        switch (activity) {
            case "flashcards":
                resetFlashCards();
                break;
            case "memory-grid":
                resetMemoryGrid();
                break;
            case "linking-memory":
                resetLinkingMemory();
                break;
            case "mandala":
                resetMandala();
                break;
            case "esp-game":
                resetESP();
                break;
            case "math-dots":
                resetMathDots();
                break;
            case "identify-quiz":
                resetQuiz();
                break;
        }
    }

    // === Flash Cards ===
    function resetFlashCards() {
        stopFlashCards();
        flashIndex = 0;
        const allCards = FLASH_CARDS[currentAge] || FLASH_CARDS["1-3"];
        flashCards = shuffle(allCards).slice(0, difficulty.flashCardCount);
        showFlashCard(0);
        $("#flash-start").classList.remove("hidden");
        $("#flash-pause").classList.add("hidden");
        updateFlashCounter();
    }

    function showFlashCard(index) {
        if (index >= flashCards.length) {
            stopFlashCards();
            $("#flash-word").textContent = "✅ Done!";
            $("#flash-image").textContent = "🎉";
            return;
        }
        const card = flashCards[index];
        $("#flash-image").textContent = card.emoji;
        $("#flash-word").textContent = card.word;
        $("#flash-card").style.animation = "none";
        // Trigger reflow
        void $("#flash-card").offsetWidth;
        $("#flash-card").style.animation = "cardFlip 0.3s ease";
        updateFlashCounter();
    }

    function updateFlashCounter() {
        $("#flash-counter").textContent = `${Math.min(flashIndex + 1, flashCards.length)}/${flashCards.length}`;
    }

    function startFlashCards() {
        if (flashRunning) return;
        flashRunning = true;
        $("#flash-start").classList.add("hidden");
        $("#flash-pause").classList.remove("hidden");
        const speed = parseInt($("#flash-speed").value);
        flashInterval = setInterval(() => {
            flashIndex++;
            showFlashCard(flashIndex);
            if (flashIndex >= flashCards.length) {
                stopFlashCards();
            }
        }, speed);
    }

    function stopFlashCards() {
        flashRunning = false;
        if (flashInterval) {
            clearInterval(flashInterval);
            flashInterval = null;
        }
        $("#flash-start").classList.remove("hidden");
        $("#flash-pause").classList.add("hidden");
    }

    // === Memory Grid ===
    function resetMemoryGrid() {
        gridPhase = "idle";
        gridAnswers = [];
        hideResult("grid-result");
        $("#grid-status").textContent = "Press Start to begin!";
        $("#grid-start").classList.remove("hidden");
        renderEmptyGrid();
    }

    function renderEmptyGrid() {
        const size = difficulty.gridSize;
        const area = $("#memory-grid-area");
        area.style.gridTemplateColumns = `repeat(${size}, 70px)`;
        area.innerHTML = "";
        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement("div");
            cell.className = "grid-cell";
            cell.textContent = "?";
            area.appendChild(cell);
        }
    }

    function startMemoryGrid() {
        gridPhase = "showing";
        hideResult("grid-result");
        $("#grid-start").classList.add("hidden");
        $("#grid-status").textContent = "Memorize!";

        const size = difficulty.gridSize;
        const pool = MEMORY_GRID_ITEMS[currentAge] || MEMORY_GRID_ITEMS["1-3"];
        gridItems = shuffle(pool).slice(0, size * size);

        const area = $("#memory-grid-area");
        area.style.gridTemplateColumns = `repeat(${size}, 70px)`;
        area.innerHTML = "";

        gridItems.forEach((item) => {
            const cell = document.createElement("div");
            cell.className = "grid-cell";
            cell.textContent = item;
            area.appendChild(cell);
        });

        // After show time, hide and let user recall
        setTimeout(() => {
            if (gridPhase !== "showing") return;
            gridPhase = "answering";
            $("#grid-status").textContent = "Now select in order!";
            const shuffledItems = shuffle([...gridItems]);
            const cells = area.querySelectorAll(".grid-cell");
            cells.forEach((cell) => {
                cell.textContent = "";
                cell.className = "grid-cell hidden-cell";
            });

            // Show answer options below
            gridAnswers = [];
            renderGridAnswerOptions(shuffledItems);
        }, difficulty.gridShowTime);
    }

    function renderGridAnswerOptions(items) {
        // We show the items again and user must place them in correct positions
        const area = $("#memory-grid-area");
        const cells = area.querySelectorAll(".grid-cell");

        // Make cells clickable for placing
        let placingIndex = 0;
        let selectedItem = null;

        // Create a selection bar
        const selBar = document.createElement("div");
        selBar.className = "link-answer-area";
        selBar.style.marginTop = "12px";

        items.forEach((item, idx) => {
            const btn = document.createElement("button");
            btn.className = "link-answer-btn";
            btn.textContent = item;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("placed")) return;
                selectedItem = { emoji: item, btn: btn };
                selBar.querySelectorAll(".link-answer-btn").forEach(b => b.style.outline = "none");
                btn.style.outline = "3px solid #6c5ce7";
            });
            selBar.appendChild(btn);
        });

        area.parentElement.insertBefore(selBar, area.nextSibling);

        cells.forEach((cell, idx) => {
            cell.addEventListener("click", function handler() {
                if (!selectedItem) return;
                cell.textContent = selectedItem.emoji;
                cell.className = "grid-cell";
                selectedItem.btn.classList.add("placed");
                selectedItem.btn.style.outline = "none";
                gridAnswers[idx] = selectedItem.emoji;
                selectedItem = null;

                // Check if all placed
                const filledCount = gridAnswers.filter(a => a).length;
                if (filledCount === gridItems.length) {
                    checkGridAnswers(selBar);
                }
            });
        });
    }

    function checkGridAnswers(selBar) {
        let correct = 0;
        const cells = $("#memory-grid-area").querySelectorAll(".grid-cell");
        gridItems.forEach((item, idx) => {
            if (gridAnswers[idx] === item) {
                cells[idx].classList.add("correct");
                correct++;
            } else {
                cells[idx].classList.add("wrong");
            }
        });

        const total = gridItems.length;
        const pct = Math.round((correct / total) * 100);
        if (pct === 100) {
            showResult("grid-result", `🎉 Perfect! ${correct}/${total}`, "success");
        } else if (pct >= 50) {
            showResult("grid-result", `👍 Good! ${correct}/${total} correct`, "info");
        } else {
            showResult("grid-result", `Keep trying! ${correct}/${total} correct`, "fail");
        }

        if (selBar) selBar.remove();
        $("#grid-start").classList.remove("hidden");
        $("#grid-start").textContent = "Play Again";
        gridPhase = "idle";
    }

    // === Linking Memory ===
    function resetLinkingMemory() {
        linkPhase = "idle";
        linkIndex = 0;
        linkAnswerOrder = [];
        hideResult("link-result");
        $("#link-display").innerHTML = "<p style='color:#636e72;'>Press Start to see a story sequence!</p>";
        $("#link-start").classList.remove("hidden");
        $("#link-answer-area").classList.add("hidden");
        $("#link-answer-area").innerHTML = "";
        $("#link-status").textContent = "Ready";
    }

    function startLinkingMemory() {
        linkPhase = "showing";
        hideResult("link-result");
        $("#link-start").classList.add("hidden");
        $("#link-answer-area").classList.add("hidden");

        const stories = LINKING_STORIES[currentAge] || LINKING_STORIES["1-3"];
        linkStory = stories[Math.floor(Math.random() * stories.length)];
        linkIndex = 0;

        showNextLinkItem();
    }

    function showNextLinkItem() {
        if (linkIndex >= linkStory.items.length) {
            // Done showing, now ask to recall
            linkPhase = "answering";
            $("#link-status").textContent = "Recall the order!";
            $("#link-display").innerHTML = "<p style='font-size:1.2rem; color:#636e72;'>Put them back in order!</p>";
            showLinkAnswerOptions();
            return;
        }

        const item = linkStory.items[linkIndex];
        $("#link-status").textContent = `${linkIndex + 1}/${linkStory.items.length}`;
        $("#link-display").innerHTML = `
            <div class="link-item">${item}</div>
            <div class="link-item-word">${linkIndex + 1}</div>
        `;

        linkIndex++;
        setTimeout(showNextLinkItem, 2000);
    }

    function showLinkAnswerOptions() {
        const answerArea = $("#link-answer-area");
        answerArea.classList.remove("hidden");
        answerArea.innerHTML = "";
        linkAnswerOrder = [];

        const shuffled = shuffle([...linkStory.items]);
        shuffled.forEach((item) => {
            const btn = document.createElement("button");
            btn.className = "link-answer-btn";
            btn.textContent = item;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("placed")) return;
                btn.classList.add("placed");
                linkAnswerOrder.push(item);

                // Show progress
                $("#link-display").innerHTML = `<div style="font-size:2rem;">${linkAnswerOrder.join(" → ")}</div>`;

                if (linkAnswerOrder.length === linkStory.items.length) {
                    checkLinkAnswers();
                }
            });
            answerArea.appendChild(btn);
        });
    }

    function checkLinkAnswers() {
        let correct = 0;
        linkStory.items.forEach((item, idx) => {
            if (linkAnswerOrder[idx] === item) correct++;
        });

        const total = linkStory.items.length;
        if (correct === total) {
            showResult("link-result", "🎉 Perfect sequence!", "success");
        } else {
            showResult("link-result", `${correct}/${total} correct. Order was: ${linkStory.items.join(" → ")}`, "info");
        }

        $("#link-start").classList.remove("hidden");
        $("#link-start").textContent = "Play Again";
        linkPhase = "idle";
    }

    // === Mandala ===
    function resetMandala() {
        mandalaPhase = "idle";
        mandalaPattern = [];
        mandalaUserPattern = [];
        selectedColor = null;
        hideResult("mandala-result");
        $("#mandala-status").textContent = "Press Start!";
        $("#mandala-start").classList.remove("hidden");
        $("#mandala-palette").classList.add("hidden");
        renderEmptyMandala();
    }

    function renderEmptyMandala() {
        const size = difficulty.mandalaSize;
        const area = $("#mandala-area");
        area.style.gridTemplateColumns = `repeat(${size}, 50px)`;
        area.innerHTML = "";
        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement("div");
            cell.className = "mandala-cell";
            cell.style.background = "#f0f0f0";
            area.appendChild(cell);
        }
    }

    function startMandala() {
        mandalaPhase = "showing";
        hideResult("mandala-result");
        $("#mandala-start").classList.add("hidden");
        $("#mandala-palette").classList.add("hidden");
        $("#mandala-status").textContent = "Memorize the pattern!";

        const size = difficulty.mandalaSize;
        const colorCount = difficulty.mandalaColors;
        const colors = MANDALA_COLORS.slice(0, colorCount);

        // Generate random pattern
        mandalaPattern = [];
        for (let i = 0; i < size * size; i++) {
            mandalaPattern.push(colors[Math.floor(Math.random() * colors.length)]);
        }

        // Show pattern
        const area = $("#mandala-area");
        area.style.gridTemplateColumns = `repeat(${size}, 50px)`;
        area.innerHTML = "";
        mandalaPattern.forEach((color) => {
            const cell = document.createElement("div");
            cell.className = "mandala-cell";
            cell.style.background = color;
            area.appendChild(cell);
        });

        // After time, hide and let user paint
        setTimeout(() => {
            if (mandalaPhase !== "showing") return;
            mandalaPhase = "painting";
            $("#mandala-status").textContent = "Reproduce the pattern!";
            mandalaUserPattern = new Array(size * size).fill(null);

            // Clear grid
            const cells = area.querySelectorAll(".mandala-cell");
            cells.forEach((cell, idx) => {
                cell.style.background = "#f0f0f0";
                cell.addEventListener("click", () => {
                    if (!selectedColor || mandalaPhase !== "painting") return;
                    cell.style.background = selectedColor;
                    mandalaUserPattern[idx] = selectedColor;

                    // Check if all filled
                    if (mandalaUserPattern.every((c) => c !== null)) {
                        checkMandala();
                    }
                });
            });

            // Show palette
            showMandalaPalette(colors);
        }, difficulty.mandalaShowTime);
    }

    function showMandalaPalette(colors) {
        const palette = $("#mandala-palette");
        palette.classList.remove("hidden");
        palette.innerHTML = "";
        colors.forEach((color) => {
            const swatch = document.createElement("div");
            swatch.className = "palette-color";
            swatch.style.background = color;
            swatch.addEventListener("click", () => {
                palette.querySelectorAll(".palette-color").forEach((s) => s.classList.remove("selected"));
                swatch.classList.add("selected");
                selectedColor = color;
            });
            palette.appendChild(swatch);
        });
    }

    function checkMandala() {
        let correct = 0;
        mandalaPattern.forEach((color, idx) => {
            if (mandalaUserPattern[idx] === color) correct++;
        });

        const total = mandalaPattern.length;
        const pct = Math.round((correct / total) * 100);
        if (pct === 100) {
            showResult("mandala-result", `🎉 Perfect! All ${total} correct!`, "success");
        } else if (pct >= 60) {
            showResult("mandala-result", `👍 Good! ${correct}/${total} (${pct}%)`, "info");
        } else {
            showResult("mandala-result", `${correct}/${total} (${pct}%) - Keep practicing!`, "fail");
        }

        $("#mandala-start").classList.remove("hidden");
        $("#mandala-start").textContent = "Play Again";
        mandalaPhase = "idle";
    }

    // === ESP Game ===
    function resetESP() {
        espCorrect = 0;
        espTotal = 0;
        espAnswer = null;
        hideResult("esp-result");
        updateESPScore();
        $("#esp-hidden").textContent = "❓";
        $("#esp-choices").innerHTML = "";
        $("#esp-start").classList.remove("hidden");
        $("#esp-status").textContent = "Guess the hidden card!";
    }

    function startESPRound() {
        hideResult("esp-result");
        $("#esp-start").classList.add("hidden");
        $("#esp-status").textContent = "Focus and choose!";

        const choiceCount = difficulty.espChoices;
        // Alternate between colors and shapes
        const useColors = Math.random() > 0.5;
        const pool = useColors ? ESP_COLORS.map(c => c.emoji) : ESP_SHAPES;
        const choices = shuffle(pool).slice(0, choiceCount);
        espAnswer = choices[Math.floor(Math.random() * choices.length)];

        $("#esp-hidden").textContent = "🤔";

        const choicesEl = $("#esp-choices");
        choicesEl.innerHTML = "";
        choices.forEach((item) => {
            const btn = document.createElement("div");
            btn.className = "esp-choice";
            btn.textContent = item;
            btn.addEventListener("click", () => handleESPGuess(item, btn));
            choicesEl.appendChild(btn);
        });
    }

    function handleESPGuess(guess, btn) {
        espTotal++;
        const choiceBtns = $$("#esp-choices .esp-choice");
        choiceBtns.forEach((b) => {
            b.style.pointerEvents = "none";
            if (b.textContent === espAnswer) {
                b.classList.add("correct-choice");
            }
        });

        if (guess === espAnswer) {
            espCorrect++;
            btn.classList.add("correct-choice");
            $("#esp-hidden").textContent = espAnswer;
            showResult("esp-result", "🎉 Correct!", "success");
        } else {
            btn.classList.add("wrong-choice");
            $("#esp-hidden").textContent = espAnswer;
            showResult("esp-result", `Not this time! It was ${espAnswer}`, "fail");
        }

        updateESPScore();
        $("#esp-start").classList.remove("hidden");
        $("#esp-start").textContent = "Next Round";
    }

    function updateESPScore() {
        $("#esp-score").textContent = `Score: ${espCorrect}/${espTotal}`;
    }

    // === Math Dots ===
    function resetMathDots() {
        dotsAnswer = 0;
        hideResult("dots-result");
        $("#dots-display").innerHTML = "";
        $("#dots-choices").classList.add("hidden");
        $("#dots-choices").innerHTML = "";
        $("#dots-start").classList.remove("hidden");
        $("#dots-status").textContent = "How many dots?";
    }

    function startMathDots() {
        hideResult("dots-result");
        $("#dots-start").classList.add("hidden");
        $("#dots-status").textContent = "Count the dots!";

        const maxDots = difficulty.dotsMax;
        dotsAnswer = Math.floor(Math.random() * maxDots) + 1;

        // Generate random positions for dots
        const display = $("#dots-display");
        display.innerHTML = "";
        const positions = [];

        for (let i = 0; i < dotsAnswer; i++) {
            let x, y, overlap;
            let attempts = 0;
            do {
                x = Math.random() * 230 + 15;
                y = Math.random() * 230 + 15;
                overlap = positions.some(
                    (p) => Math.abs(p.x - x) < 28 && Math.abs(p.y - y) < 28
                );
                attempts++;
            } while (overlap && attempts < 50);

            positions.push({ x, y });
            const dot = document.createElement("div");
            dot.className = "dot";
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            display.appendChild(dot);
        }

        // Show dots briefly, then ask
        setTimeout(() => {
            display.innerHTML = "<div style='display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem;'>🤔</div>";
            showDotsChoices();
        }, difficulty.dotsShowTime);
    }

    function showDotsChoices() {
        const choicesEl = $("#dots-choices");
        choicesEl.classList.remove("hidden");
        choicesEl.innerHTML = "";
        $("#dots-status").textContent = "How many were there?";

        // Generate choices including correct answer
        const choices = new Set([dotsAnswer]);
        while (choices.size < 4) {
            const offset = Math.floor(Math.random() * 5) - 2;
            const val = dotsAnswer + offset;
            if (val > 0 && val !== dotsAnswer) choices.add(val);
            // Fallback
            if (choices.size < 4) choices.add(dotsAnswer + choices.size);
        }

        const shuffledChoices = shuffle([...choices]);
        shuffledChoices.forEach((num) => {
            const btn = document.createElement("button");
            btn.className = "dot-choice";
            btn.textContent = num;
            btn.addEventListener("click", () => handleDotsGuess(num, btn));
            choicesEl.appendChild(btn);
        });
    }

    function handleDotsGuess(guess, btn) {
        const choiceBtns = $$("#dots-choices .dot-choice");
        choiceBtns.forEach((b) => {
            b.style.pointerEvents = "none";
            if (parseInt(b.textContent) === dotsAnswer) {
                b.classList.add("correct-choice");
            }
        });

        if (guess === dotsAnswer) {
            btn.classList.add("correct-choice");
            showResult("dots-result", `🎉 Correct! It was ${dotsAnswer}!`, "success");
        } else {
            btn.classList.add("wrong-choice");
            showResult("dots-result", `The answer was ${dotsAnswer}`, "fail");
        }

        // Show dots again
        $("#dots-display").innerHTML = "";
        // Re-render dots as feedback would be nice but keep simple
        $("#dots-start").classList.remove("hidden");
        $("#dots-start").textContent = "Next Round";
    }

    // === Identify Quiz ===
    let quizCategory = null;
    let quizItems = [];
    let quizRound = 0;
    let quizScore = 0;
    let quizTotalRounds = 10;
    let quizCurrentAnswer = null;

    function resetQuiz() {
        quizCategory = null;
        quizRound = 0;
        quizScore = 0;
        quizCurrentAnswer = null;
        $("#quiz-category-select").classList.remove("hidden");
        $("#quiz-play-area").classList.add("hidden");
        $("#quiz-complete").classList.add("hidden");
        $("#quiz-status").textContent = "Pick a category";
    }

    function startQuizCategory(category) {
        quizCategory = category;
        const diff = QUIZ_DIFFICULTY[currentAge] || QUIZ_DIFFICULTY["3-6"];
        quizTotalRounds = diff.rounds;
        quizRound = 0;
        quizScore = 0;

        const data = QUIZ_DATA[category];
        quizItems = shuffle([...data.items]);
        
        $("#quiz-category-select").classList.add("hidden");
        $("#quiz-play-area").classList.remove("hidden");
        $("#quiz-complete").classList.add("hidden");
        $("#quiz-status").textContent = data.label;

        nextQuizRound();
    }

    function nextQuizRound() {
        if (quizRound >= quizTotalRounds) {
            showQuizComplete();
            return;
        }

        hideResult("quiz-result");
        $("#quiz-next").classList.add("hidden");

        const diff = QUIZ_DIFFICULTY[currentAge] || QUIZ_DIFFICULTY["3-6"];
        const numChoices = diff.choices;

        // Pick the correct answer
        const correctItem = quizItems[quizRound % quizItems.length];
        quizCurrentAnswer = correctItem;

        // Pick distractors from the same category
        const allItems = QUIZ_DATA[quizCategory].items;
        const distractors = shuffle(allItems.filter(i => i.id !== correctItem.id)).slice(0, numChoices - 1);
        const choices = shuffle([correctItem, ...distractors]);

        // Update image
        $("#quiz-image").src = correctItem.image;
        $("#quiz-image").alt = "Identify this " + quizCategory.slice(0, -1);

        // Update choices
        const choicesEl = $("#quiz-choices");
        choicesEl.innerHTML = "";
        choices.forEach(item => {
            const btn = document.createElement("button");
            btn.className = "quiz-choice-btn";
            btn.textContent = item.name;
            btn.addEventListener("click", () => handleQuizAnswer(item, btn));
            choicesEl.appendChild(btn);
        });

        // Update progress
        $("#quiz-round").textContent = `Round: ${quizRound + 1}/${quizTotalRounds}`;
        $("#quiz-score").textContent = `Score: ${quizScore}/${quizRound}`;
    }

    function handleQuizAnswer(item, btn) {
        const allBtns = $$("#quiz-choices .quiz-choice-btn");
        allBtns.forEach(b => {
            b.style.pointerEvents = "none";
            if (b.textContent === quizCurrentAnswer.name) {
                b.classList.add("correct-answer");
            }
        });

        if (item.id === quizCurrentAnswer.id) {
            quizScore++;
            btn.classList.add("correct-answer");
            showResult("quiz-result", "✅ Correct!", "success");
        } else {
            btn.classList.add("wrong-answer");
            showResult("quiz-result", `❌ It's ${quizCurrentAnswer.name}`, "fail");
        }

        quizRound++;
        $("#quiz-score").textContent = `Score: ${quizScore}/${quizRound}`;

        if (quizRound >= quizTotalRounds) {
            setTimeout(showQuizComplete, 1200);
        } else {
            $("#quiz-next").classList.remove("hidden");
        }
    }

    function showQuizComplete() {
        $("#quiz-play-area").classList.add("hidden");
        $("#quiz-complete").classList.remove("hidden");

        const pct = Math.round((quizScore / quizTotalRounds) * 100);
        let emoji = "🎉";
        let text = "Amazing!";
        if (pct < 50) { emoji = "💪"; text = "Keep practicing!"; }
        else if (pct < 80) { emoji = "👍"; text = "Good job!"; }
        else if (pct < 100) { emoji = "🌟"; text = "Great work!"; }

        $("#quiz-final-emoji").textContent = emoji;
        $("#quiz-final-text").textContent = text;
        $("#quiz-final-score-text").textContent = `You got ${quizScore}/${quizTotalRounds} correct! (${pct}%)`;
    }

    // === Event Listeners ===
    function init() {
        // Age selection
        $$(".age-btn").forEach((btn) => {
            btn.addEventListener("click", () => selectAge(btn.dataset.age));
        });

        // Activity selection
        $$(".activity-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                if (!currentAge) {
                    alert("Please select an age group first!");
                    return;
                }
                navigateToActivity(btn.dataset.activity);
            });
        });

        // Back buttons
        $$(".back-btn").forEach((btn) => {
            btn.addEventListener("click", goHome);
        });

        // Flash Cards
        $("#flash-start").addEventListener("click", startFlashCards);
        $("#flash-pause").addEventListener("click", stopFlashCards);
        $("#flash-speed").addEventListener("input", (e) => {
            const val = (parseInt(e.target.value) / 1000).toFixed(1);
            $("#flash-speed-label").textContent = `${val}s`;
            if (flashRunning) {
                stopFlashCards();
                startFlashCards();
            }
        });

        // Memory Grid
        $("#grid-start").addEventListener("click", startMemoryGrid);

        // Linking Memory
        $("#link-start").addEventListener("click", startLinkingMemory);

        // Mandala
        $("#mandala-start").addEventListener("click", startMandala);

        // ESP
        $("#esp-start").addEventListener("click", startESPRound);

        // Math Dots
        $("#dots-start").addEventListener("click", startMathDots);

        // Identify Quiz
        $$(".quiz-cat-btn").forEach(btn => {
            btn.addEventListener("click", () => startQuizCategory(btn.dataset.category));
        });
        $("#quiz-next").addEventListener("click", nextQuizRound);
        $("#quiz-replay").addEventListener("click", () => {
            startQuizCategory(quizCategory);
        });
        $("#quiz-change-cat").addEventListener("click", resetQuiz);
    }

    // Start app
    init();
})();
