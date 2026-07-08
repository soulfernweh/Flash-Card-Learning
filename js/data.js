/**
 * Shichida Kids - Content Data
 * All images use emoji for zero-dependency, GitHub-hosted static site.
 */

const FLASH_CARDS = {
    "1-3": [
        // Animals
        { emoji: "🐶", word: "Dog" },
        { emoji: "🐱", word: "Cat" },
        { emoji: "🐘", word: "Elephant" },
        { emoji: "🦁", word: "Lion" },
        { emoji: "🐟", word: "Fish" },
        { emoji: "🐦", word: "Bird" },
        { emoji: "🐸", word: "Frog" },
        { emoji: "🐢", word: "Turtle" },
        { emoji: "🐇", word: "Rabbit" },
        { emoji: "🐻", word: "Bear" },
        // Fruits
        { emoji: "🍎", word: "Apple" },
        { emoji: "🍌", word: "Banana" },
        { emoji: "🍊", word: "Orange" },
        { emoji: "🍇", word: "Grapes" },
        { emoji: "🍓", word: "Strawberry" },
        // Objects
        { emoji: "⭐", word: "Star" },
        { emoji: "🌙", word: "Moon" },
        { emoji: "☀️", word: "Sun" },
        { emoji: "🌈", word: "Rainbow" },
        { emoji: "🌸", word: "Flower" },
    ],
    "3-6": [
        // Animals extended
        { emoji: "🦋", word: "Butterfly" },
        { emoji: "🦅", word: "Eagle" },
        { emoji: "🐬", word: "Dolphin" },
        { emoji: "🦈", word: "Shark" },
        { emoji: "🐙", word: "Octopus" },
        { emoji: "🦜", word: "Parrot" },
        { emoji: "🦊", word: "Fox" },
        { emoji: "🐺", word: "Wolf" },
        { emoji: "🦒", word: "Giraffe" },
        { emoji: "🦓", word: "Zebra" },
        // Vehicles
        { emoji: "🚗", word: "Car" },
        { emoji: "✈️", word: "Airplane" },
        { emoji: "🚀", word: "Rocket" },
        { emoji: "🚢", word: "Ship" },
        { emoji: "🚂", word: "Train" },
        // Nature
        { emoji: "🌋", word: "Volcano" },
        { emoji: "🏔️", word: "Mountain" },
        { emoji: "🌊", word: "Wave" },
        { emoji: "⚡", word: "Lightning" },
        { emoji: "🌍", word: "Earth" },
    ],
    "6+": [
        // Science
        { emoji: "🔬", word: "Microscope" },
        { emoji: "🧬", word: "DNA" },
        { emoji: "⚗️", word: "Chemistry" },
        { emoji: "🔭", word: "Telescope" },
        { emoji: "🧲", word: "Magnet" },
        // Space
        { emoji: "🪐", word: "Saturn" },
        { emoji: "☄️", word: "Comet" },
        { emoji: "🌌", word: "Galaxy" },
        { emoji: "👨‍🚀", word: "Astronaut" },
        { emoji: "🛸", word: "UFO" },
        // Countries/Landmarks
        { emoji: "🗼", word: "Tower" },
        { emoji: "🗽", word: "Liberty" },
        { emoji: "🏛️", word: "Temple" },
        { emoji: "🎭", word: "Theater" },
        { emoji: "🏟️", word: "Stadium" },
        // Musical Instruments
        { emoji: "🎹", word: "Piano" },
        { emoji: "🎸", word: "Guitar" },
        { emoji: "🎺", word: "Trumpet" },
        { emoji: "🥁", word: "Drums" },
        { emoji: "🎻", word: "Violin" },
    ]
};

const MEMORY_GRID_ITEMS = {
    "1-3": ["🐶", "🐱", "🍎", "🌸", "⭐", "🐟", "🍌", "🐇", "☀️"],
    "3-6": ["🦋", "🚀", "🌊", "🦊", "⚡", "🐬", "🎈", "🌺", "🦅", "🍕", "🎵", "🌙"],
    "6+": ["🔬", "🪐", "🎹", "🦈", "🌋", "🧲", "🎭", "☄️", "🗽", "🧬", "🎸", "🌌", "🏛️", "⚗️", "🔭", "🛸"]
};

const LINKING_STORIES = {
    "1-3": [
        { items: ["🐶", "🍎", "⭐", "🌙"], story: "The dog ate an apple under a star and the moon." },
        { items: ["🐱", "🐟", "🌈", "🌸"], story: "The cat caught a fish near a rainbow and a flower." },
        { items: ["🐘", "☀️", "🍌", "🐦"], story: "The elephant stood in the sun eating a banana with a bird." },
    ],
    "3-6": [
        { items: ["🦋", "🌋", "🚀", "🐬", "⚡"], story: "A butterfly flew over a volcano, rode a rocket, met a dolphin in lightning." },
        { items: ["🦊", "🏔️", "✈️", "🌊", "🦅"], story: "A fox climbed a mountain, took a plane, surfed a wave, and met an eagle." },
        { items: ["🐺", "🚂", "🌍", "🦒", "🦓"], story: "A wolf rode a train around the Earth to see giraffes and zebras." },
    ],
    "6+": [
        { items: ["🔬", "🧬", "🪐", "👨‍🚀", "☄️", "🌌", "🛸"], story: "A microscope revealed DNA patterns on Saturn where an astronaut dodged a comet in a galaxy near a UFO." },
        { items: ["🎹", "🗼", "🏟️", "🎭", "🧲", "⚗️", "🔭"], story: "A pianist at a tower played in a stadium theater using a magnet from a chemistry lab seen through a telescope." },
        { items: ["🎸", "🗽", "🏛️", "🥁", "🎺", "🎻", "🦈"], story: "A guitarist at Liberty visited a temple with drums, trumpet, violin, and a shark." },
    ]
};

const ESP_COLORS = [
    { name: "Red", color: "#e74c3c", emoji: "🔴" },
    { name: "Blue", color: "#3498db", emoji: "🔵" },
    { name: "Green", color: "#27ae60", emoji: "🟢" },
    { name: "Yellow", color: "#f1c40f", emoji: "🟡" },
    { name: "Purple", color: "#9b59b6", emoji: "🟣" },
];

const ESP_SHAPES = ["⭐", "❤️", "🔷", "🔶", "⬛"];

const MANDALA_COLORS = [
    "#e74c3c",
    "#3498db",
    "#27ae60",
    "#f1c40f",
    "#9b59b6",
    "#e67e22",
    "#1abc9c",
    "#fd79a8",
];

// Difficulty settings per age group
const DIFFICULTY = {
    "1-3": {
        flashCardCount: 5,
        gridSize: 2, // 2x2
        gridShowTime: 4000,
        linkingItemCount: 4,
        mandalaSize: 3, // 3x3
        mandalaShowTime: 5000,
        mandalaColors: 4,
        dotsMax: 5,
        dotsShowTime: 3000,
        espChoices: 3,
    },
    "3-6": {
        flashCardCount: 10,
        gridSize: 3, // 3x3
        gridShowTime: 3000,
        linkingItemCount: 5,
        mandalaSize: 4, // 4x4
        mandalaShowTime: 4000,
        mandalaColors: 5,
        dotsMax: 10,
        dotsShowTime: 2000,
        espChoices: 4,
    },
    "6+": {
        flashCardCount: 15,
        gridSize: 4, // 4x4
        gridShowTime: 2500,
        linkingItemCount: 7,
        mandalaSize: 5, // 5x5
        mandalaShowTime: 3000,
        mandalaColors: 6,
        dotsMax: 20,
        dotsShowTime: 1500,
        espChoices: 5,
    }
};
