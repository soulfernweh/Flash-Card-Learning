/**
 * Shichida Kids - Content Data
 * All images use emoji for zero-dependency, GitHub-hosted static site.
 * Age groups: 1-3 (Toddler), 3-5 (Preschool), 5-7 (Early Reader), 7-10 (Advanced)
 */

const FLASH_CARDS = {
    "1-3": [
        // Animals - simple, familiar
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
        { emoji: "🐷", word: "Pig" },
        { emoji: "🐴", word: "Horse" },
        { emoji: "🐑", word: "Sheep" },
        { emoji: "🐔", word: "Chicken" },
        { emoji: "🦆", word: "Duck" },
        // Fruits
        { emoji: "🍎", word: "Apple" },
        { emoji: "🍌", word: "Banana" },
        { emoji: "🍊", word: "Orange" },
        { emoji: "🍇", word: "Grapes" },
        { emoji: "🍓", word: "Strawberry" },
        { emoji: "🍉", word: "Watermelon" },
        { emoji: "🍒", word: "Cherry" },
        { emoji: "🍑", word: "Peach" },
        // Body parts
        { emoji: "👀", word: "Eyes" },
        { emoji: "👃", word: "Nose" },
        { emoji: "👄", word: "Mouth" },
        { emoji: "👂", word: "Ear" },
        { emoji: "🖐️", word: "Hand" },
        { emoji: "🦶", word: "Foot" },
        // Objects
        { emoji: "⭐", word: "Star" },
        { emoji: "🌙", word: "Moon" },
        { emoji: "☀️", word: "Sun" },
        { emoji: "🌈", word: "Rainbow" },
        { emoji: "🌸", word: "Flower" },
        { emoji: "🏠", word: "House" },
        { emoji: "🚗", word: "Car" },
        { emoji: "⚽", word: "Ball" },
        { emoji: "📖", word: "Book" },
        { emoji: "🧸", word: "Teddy Bear" },
    ],
    "3-5": [
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
        { emoji: "🐊", word: "Crocodile" },
        { emoji: "🦩", word: "Flamingo" },
        { emoji: "🦔", word: "Hedgehog" },
        { emoji: "🐧", word: "Penguin" },
        { emoji: "🦀", word: "Crab" },
        // Vehicles
        { emoji: "🚗", word: "Car" },
        { emoji: "✈️", word: "Airplane" },
        { emoji: "🚀", word: "Rocket" },
        { emoji: "🚢", word: "Ship" },
        { emoji: "🚂", word: "Train" },
        { emoji: "🚁", word: "Helicopter" },
        { emoji: "🚲", word: "Bicycle" },
        { emoji: "🚌", word: "Bus" },
        { emoji: "🚒", word: "Fire Truck" },
        { emoji: "🚑", word: "Ambulance" },
        // Nature
        { emoji: "🌋", word: "Volcano" },
        { emoji: "🏔️", word: "Mountain" },
        { emoji: "🌊", word: "Wave" },
        { emoji: "⚡", word: "Lightning" },
        { emoji: "🌍", word: "Earth" },
        { emoji: "🌲", word: "Tree" },
        { emoji: "🍄", word: "Mushroom" },
        { emoji: "🌻", word: "Sunflower" },
        { emoji: "🌵", word: "Cactus" },
        { emoji: "❄️", word: "Snowflake" },
        // Food
        { emoji: "🍕", word: "Pizza" },
        { emoji: "🍔", word: "Hamburger" },
        { emoji: "🧁", word: "Cupcake" },
        { emoji: "🍦", word: "Ice Cream" },
        { emoji: "🥕", word: "Carrot" },
        { emoji: "🥦", word: "Broccoli" },
    ],
    "5-7": [
        // Science & Nature
        { emoji: "🔬", word: "Microscope" },
        { emoji: "🧬", word: "DNA" },
        { emoji: "⚗️", word: "Chemistry" },
        { emoji: "🔭", word: "Telescope" },
        { emoji: "🧲", word: "Magnet" },
        { emoji: "🌡️", word: "Thermometer" },
        { emoji: "💎", word: "Diamond" },
        { emoji: "🪨", word: "Rock" },
        { emoji: "🦠", word: "Bacteria" },
        { emoji: "🧪", word: "Test Tube" },
        // Space
        { emoji: "🪐", word: "Saturn" },
        { emoji: "☄️", word: "Comet" },
        { emoji: "🌌", word: "Galaxy" },
        { emoji: "👨‍🚀", word: "Astronaut" },
        { emoji: "🛸", word: "UFO" },
        { emoji: "🌑", word: "New Moon" },
        { emoji: "🌕", word: "Full Moon" },
        { emoji: "☀️", word: "Sun" },
        { emoji: "⭐", word: "Star" },
        { emoji: "🌠", word: "Shooting Star" },
        // Countries/Landmarks
        { emoji: "🗼", word: "Eiffel Tower" },
        { emoji: "🗽", word: "Statue of Liberty" },
        { emoji: "🏛️", word: "Parthenon" },
        { emoji: "🎭", word: "Theater" },
        { emoji: "🏟️", word: "Stadium" },
        { emoji: "🕌", word: "Mosque" },
        { emoji: "⛩️", word: "Shrine" },
        { emoji: "🏰", word: "Castle" },
        // Musical Instruments
        { emoji: "🎹", word: "Piano" },
        { emoji: "🎸", word: "Guitar" },
        { emoji: "🎺", word: "Trumpet" },
        { emoji: "🥁", word: "Drums" },
        { emoji: "🎻", word: "Violin" },
        { emoji: "🪗", word: "Accordion" },
        { emoji: "🎷", word: "Saxophone" },
        { emoji: "🪘", word: "Djembe" },
        // Occupations
        { emoji: "👨‍⚕️", word: "Doctor" },
        { emoji: "👩‍🏫", word: "Teacher" },
        { emoji: "👨‍🍳", word: "Chef" },
        { emoji: "👩‍🚒", word: "Firefighter" },
        { emoji: "👨‍✈️", word: "Pilot" },
        { emoji: "👩‍🔬", word: "Scientist" },
        { emoji: "👨‍🌾", word: "Farmer" },
        { emoji: "👩‍🎨", word: "Artist" },
    ],
    "7-10": [
        // Human Body & Biology
        { emoji: "🫀", word: "Heart" },
        { emoji: "🧠", word: "Brain" },
        { emoji: "🫁", word: "Lungs" },
        { emoji: "🦴", word: "Bone" },
        { emoji: "🦷", word: "Tooth" },
        { emoji: "🩸", word: "Blood" },
        { emoji: "🧬", word: "Chromosome" },
        { emoji: "🦠", word: "Virus" },
        // Physics & Energy
        { emoji: "⚡", word: "Electricity" },
        { emoji: "🧲", word: "Magnetism" },
        { emoji: "🔋", word: "Battery" },
        { emoji: "💡", word: "Light Bulb" },
        { emoji: "🌡️", word: "Temperature" },
        { emoji: "☢️", word: "Radiation" },
        { emoji: "⚛️", word: "Atom" },
        { emoji: "🔥", word: "Combustion" },
        // Solar System
        { emoji: "☀️", word: "Sun (Star)" },
        { emoji: "🪨", word: "Mercury" },
        { emoji: "🌍", word: "Venus" },
        { emoji: "🌎", word: "Earth" },
        { emoji: "🔴", word: "Mars" },
        { emoji: "🟠", word: "Jupiter" },
        { emoji: "🪐", word: "Saturn" },
        { emoji: "🔵", word: "Uranus" },
        { emoji: "🫧", word: "Neptune" },
        { emoji: "⚫", word: "Black Hole" },
        // Geography
        { emoji: "🏔️", word: "Himalayas" },
        { emoji: "🌋", word: "Mt. Vesuvius" },
        { emoji: "🏜️", word: "Sahara Desert" },
        { emoji: "🌊", word: "Pacific Ocean" },
        { emoji: "🧊", word: "Arctic" },
        { emoji: "🌴", word: "Amazon Rainforest" },
        { emoji: "🏝️", word: "Island" },
        { emoji: "🗻", word: "Mt. Fuji" },
        // History & Civilizations
        { emoji: "🏛️", word: "Ancient Greece" },
        { emoji: "🐪", word: "Ancient Egypt" },
        { emoji: "🏯", word: "Feudal Japan" },
        { emoji: "🗡️", word: "Medieval Europe" },
        { emoji: "🕋", word: "Islamic Golden Age" },
        { emoji: "🧭", word: "Age of Exploration" },
        // Math Concepts
        { emoji: "➕", word: "Addition" },
        { emoji: "➖", word: "Subtraction" },
        { emoji: "✖️", word: "Multiplication" },
        { emoji: "➗", word: "Division" },
        { emoji: "📐", word: "Triangle" },
        { emoji: "⬜", word: "Square" },
        { emoji: "⭕", word: "Circle" },
        { emoji: "📏", word: "Measurement" },
        // World Languages (hello in different languages)
        { emoji: "🇬🇧", word: "Hello (English)" },
        { emoji: "🇪🇸", word: "Hola (Spanish)" },
        { emoji: "🇫🇷", word: "Bonjour (French)" },
        { emoji: "🇯🇵", word: "Konnichiwa (Japanese)" },
        { emoji: "🇨🇳", word: "Nǐ hǎo (Chinese)" },
        { emoji: "🇩🇪", word: "Hallo (German)" },
        { emoji: "🇮🇹", word: "Ciao (Italian)" },
        { emoji: "🇰🇷", word: "Annyeong (Korean)" },
        { emoji: "🇮🇳", word: "Namaste (Hindi)" },
        { emoji: "🇸🇦", word: "Marhaba (Arabic)" },
    ]
};

const MEMORY_GRID_ITEMS = {
    "1-3": ["🐶", "🐱", "🍎", "🌸", "⭐", "🐟", "🍌", "🐇", "☀️"],
    "3-5": ["🦋", "🚀", "🌊", "🦊", "⚡", "🐬", "🎈", "🌺", "🦅", "🍕", "🎵", "🌙"],
    "5-7": ["🔬", "🪐", "🎹", "🦈", "🌋", "🧲", "🎭", "☄️", "🗽", "🧬", "🎸", "🌌", "🏛️", "⚗️", "🔭", "🛸"],
    "7-10": ["⚛️", "🫀", "🧠", "🏔️", "🌍", "🔋", "💎", "🧭", "📐", "🏯", "🌋", "🧊", "🗡️", "☢️", "🪐", "🫁", "🦴", "🌴", "🏜️", "🧬"]
};

const LINKING_STORIES = {
    "1-3": [
        { items: ["🐶", "🍎", "⭐", "🌙"], story: "The dog ate an apple under a star and the moon." },
        { items: ["🐱", "🐟", "🌈", "🌸"], story: "The cat caught a fish near a rainbow and a flower." },
        { items: ["🐘", "☀️", "🍌", "🐦"], story: "The elephant stood in the sun eating a banana with a bird." },
        { items: ["🐷", "🏠", "⚽", "🐸"], story: "The pig played ball at home with a frog." },
    ],
    "3-5": [
        { items: ["🦋", "🌋", "🚀", "🐬", "⚡"], story: "A butterfly flew over a volcano, rode a rocket, met a dolphin in lightning." },
        { items: ["🦊", "🏔️", "✈️", "🌊", "🦅"], story: "A fox climbed a mountain, took a plane, surfed a wave, and met an eagle." },
        { items: ["🐺", "🚂", "🌍", "🦒", "🦓"], story: "A wolf rode a train around the Earth to see giraffes and zebras." },
        { items: ["🚁", "🌲", "🦔", "🍄", "❄️"], story: "A helicopter landed in a forest where a hedgehog found a mushroom in the snow." },
    ],
    "5-7": [
        { items: ["🔬", "🧬", "🪐", "👨‍🚀", "☄️", "🌌", "🛸"], story: "A microscope revealed DNA patterns on Saturn where an astronaut dodged a comet in a galaxy near a UFO." },
        { items: ["🎹", "🗼", "🏟️", "🎭", "🧲", "⚗️", "🔭"], story: "A pianist at a tower played in a stadium theater using a magnet from a chemistry lab seen through a telescope." },
        { items: ["🎸", "🗽", "🏛️", "🥁", "🎺", "🎻", "🦈"], story: "A guitarist at Liberty visited a temple with drums, trumpet, violin, and a shark." },
        { items: ["👨‍⚕️", "🏰", "🎷", "👩‍🔬", "⛩️", "🪗", "👨‍🌾"], story: "A doctor at a castle played saxophone with a scientist near a shrine while an accordion-playing farmer danced." },
    ],
    "7-10": [
        { items: ["⚛️", "🧠", "🫀", "🦴", "🔋", "💡", "🌡️", "🔥"], story: "An atom entered the brain and heart through a bone, powered by a battery, lit a bulb, raised the temperature, and sparked fire." },
        { items: ["🏔️", "🏜️", "🌊", "🧊", "🌴", "🌋", "🏝️", "🗻"], story: "From the Himalayas to the desert, across the ocean to the Arctic, through the rainforest past a volcano to an island near Mt. Fuji." },
        { items: ["🏛️", "🐪", "🏯", "🗡️", "🧭", "➕", "📐", "⭕"], story: "Ancient Greece met Egypt, then Japan's samurai with European knights used a compass, did addition with a triangle inside a circle." },
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
    "3-5": {
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
    "5-7": {
        flashCardCount: 15,
        gridSize: 4, // 4x4
        gridShowTime: 2500,
        linkingItemCount: 7,
        mandalaSize: 5, // 5x5
        mandalaShowTime: 3000,
        mandalaColors: 6,
        dotsMax: 15,
        dotsShowTime: 1800,
        espChoices: 5,
    },
    "7-10": {
        flashCardCount: 20,
        gridSize: 4, // 4x4 but more items
        gridShowTime: 2000,
        linkingItemCount: 8,
        mandalaSize: 5, // 5x5
        mandalaShowTime: 2500,
        mandalaColors: 8,
        dotsMax: 25,
        dotsShowTime: 1200,
        espChoices: 5,
    }
};
