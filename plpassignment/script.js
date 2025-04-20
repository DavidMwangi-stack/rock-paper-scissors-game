// Change text content dynamically
function changeText() {
    const textElement = document.getElementById('changeableText');
    const texts = [
        'Text changed!',
        'Updated content!',
        'New text!'
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    textElement.textContent = texts[randomIndex];
}

// Modify CSS styles programmatically
function toggleStyles() {
    const styleTarget = document.getElementById('styleTarget');
    styleTarget.style.backgroundColor = styleTarget.style.backgroundColor === 'lightblue' 
        ? 'lightgreen' 
        : 'lightblue';
}

// Add/remove elements dynamically
let elementCounter = 1;

function addElement() {
    const container = document.getElementById('elementContainer');
    const newElement = document.createElement('div');
    newElement.className = 'dynamic-element';
    newElement.textContent = `Dynamic Element ${elementCounter++}`;
    container.appendChild(newElement);
}

function removeElement() {
    const container = document.getElementById('elementContainer');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
        elementCounter = Math.max(1, elementCounter - 1);
    }
}

// Add hover effect using JavaScript
document.getElementById('styleTarget').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s';
});

document.getElementById('styleTarget').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});