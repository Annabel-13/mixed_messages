const fortunes = [
    "An unexpected event will soon bring you great fortune.",
    "You will discover a hidden talent that will lead to success.",
    "Good news will come to you from far away.",
    "Your kindness will be repaid with unexpected joy.",
    "New opportunities will present themselves if you stay open-minded.",
    "A new friendship will bring lasting happiness.",
    "You will achieve your goals if you stay focused and determined.",
    "A small act of kindness will lead to a big reward.",
    "Your hard work will soon pay off in ways you never imagined.",
    "Adventure is on the horizon; be ready to seize it."
];

function getFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    document.getElementById('fortuneText').innerText = fortunes[randomIndex];
}
