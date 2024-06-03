const words = [
    { word: "Ruchika", color: "#DC143C" },
    { word: "an Artist", color: "blue" }
];

let wordIndex = 0;
let index = 0;
let direction = 1;

const textContainer = document.getElementById('text-container');

function animateText() {
    const wordData = words[wordIndex];
    const word = wordData.word;
    const color = wordData.color;
    
    textContainer.innerHTML = `<span style="color: ${color}">${word.substring(0, index)}</span>`;

    if (direction === 1) {
        index++;
        if (index > word.length) {
            direction = -1;
            index = word.length - 1;
            setTimeout(animateText, 1000); // Delay before reversing
        } else {
            setTimeout(animateText, 100); 
        }
    } else {
        index--;
        if (index < 0) {
            direction = 1;
            index = 0;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(animateText, 1000); // Delay before starting the next word
        } else {
            setTimeout(animateText, 100); 
        }
    }
}

animateText();