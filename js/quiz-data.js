/**
 * Shichida Kids - Quiz Identification Data
 * Categories: Flags, Animals, Vehicles
 */

const QUIZ_DATA = {
    flags: {
        label: "🏳️ Flags",
        items: [
            { id: "us", name: "United States", image: "assets/flags/us.svg" },
            { id: "jp", name: "Japan", image: "assets/flags/jp.svg" },
            { id: "fr", name: "France", image: "assets/flags/fr.svg" },
            { id: "de", name: "Germany", image: "assets/flags/de.svg" },
            { id: "in", name: "India", image: "assets/flags/in.svg" },
            { id: "gb", name: "United Kingdom", image: "assets/flags/gb.svg" },
            { id: "br", name: "Brazil", image: "assets/flags/br.svg" },
            { id: "cn", name: "China", image: "assets/flags/cn.svg" },
            { id: "au", name: "Australia", image: "assets/flags/au.svg" },
            { id: "ca", name: "Canada", image: "assets/flags/ca.svg" },
            { id: "it", name: "Italy", image: "assets/flags/it.svg" },
            { id: "es", name: "Spain", image: "assets/flags/es.svg" },
            { id: "mx", name: "Mexico", image: "assets/flags/mx.svg" },
            { id: "kr", name: "South Korea", image: "assets/flags/kr.svg" },
            { id: "ru", name: "Russia", image: "assets/flags/ru.svg" },
            { id: "za", name: "South Africa", image: "assets/flags/za.svg" },
            { id: "se", name: "Sweden", image: "assets/flags/se.svg" },
            { id: "ng", name: "Nigeria", image: "assets/flags/ng.svg" },
            { id: "eg", name: "Egypt", image: "assets/flags/eg.svg" },
            { id: "ar", name: "Argentina", image: "assets/flags/ar.svg" },
            { id: "tr", name: "Turkey", image: "assets/flags/tr.svg" },
            { id: "th", name: "Thailand", image: "assets/flags/th.svg" },
            { id: "gr", name: "Greece", image: "assets/flags/gr.svg" },
            { id: "nl", name: "Netherlands", image: "assets/flags/nl.svg" },
            { id: "sa", name: "Saudi Arabia", image: "assets/flags/sa.svg" },
            { id: "ke", name: "Kenya", image: "assets/flags/ke.svg" },
            { id: "nz", name: "New Zealand", image: "assets/flags/nz.svg" },
        ]
    },
    animals: {
        label: "🐾 Animals",
        items: [
            { id: "lion", name: "Lion", image: "assets/animals/lion.svg" },
            { id: "elephant", name: "Elephant", image: "assets/animals/elephant.svg" },
            { id: "giraffe", name: "Giraffe", image: "assets/animals/giraffe.svg" },
            { id: "penguin", name: "Penguin", image: "assets/animals/penguin.svg" },
            { id: "dolphin", name: "Dolphin", image: "assets/animals/dolphin.svg" },
            { id: "panda", name: "Panda", image: "assets/animals/panda.svg" },
            { id: "tiger", name: "Tiger", image: "assets/animals/tiger.svg" },
            { id: "owl", name: "Owl", image: "assets/animals/owl.svg" },
            { id: "whale", name: "Whale", image: "assets/animals/whale.svg" },
            { id: "kangaroo", name: "Kangaroo", image: "assets/animals/kangaroo.svg" },
            { id: "parrot", name: "Parrot", image: "assets/animals/parrot.svg" },
            { id: "crocodile", name: "Crocodile", image: "assets/animals/crocodile.svg" },
        ]
    },
    vehicles: {
        label: "🚗 Vehicles",
        items: [
            { id: "car", name: "Car", image: "assets/vehicles/car.svg" },
            { id: "airplane", name: "Airplane", image: "assets/vehicles/airplane.svg" },
            { id: "train", name: "Train", image: "assets/vehicles/train.svg" },
            { id: "ship", name: "Ship", image: "assets/vehicles/ship.svg" },
            { id: "helicopter", name: "Helicopter", image: "assets/vehicles/helicopter.svg" },
            { id: "bus", name: "Bus", image: "assets/vehicles/bus.svg" },
            { id: "bicycle", name: "Bicycle", image: "assets/vehicles/bicycle.svg" },
            { id: "rocket", name: "Rocket", image: "assets/vehicles/rocket.svg" },
            { id: "firetruck", name: "Fire Truck", image: "assets/vehicles/firetruck.svg" },
            { id: "submarine", name: "Submarine", image: "assets/vehicles/submarine.svg" },
            { id: "motorcycle", name: "Motorcycle", image: "assets/vehicles/motorcycle.svg" },
        ]
    }
};

// Difficulty for quiz per age group
const QUIZ_DIFFICULTY = {
    "1-3": { choices: 2, rounds: 5 },
    "3-5": { choices: 3, rounds: 8 },
    "5-7": { choices: 4, rounds: 10 },
    "7-10": { choices: 4, rounds: 12 },
};
