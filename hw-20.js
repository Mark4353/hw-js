

const galleryImages = document.querySelectorAll('.image');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.querySelector('.full-image');
const closeButton = document.querySelector('.close-button');

let currentIndex = -1;


galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        showFullImage(image.src);
    });
});

function showFullImage(src) {
    fullImage.src = src;
    fullImageContainer.style.display = 'flex';
}


closeButton.addEventListener('click', () => {
    fullImageContainer.style.display = 'none';
});


document.addEventListener('keydown', (event) => {
    if (fullImageContainer.style.display === 'flex') {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            showFullImage(galleryImages[currentIndex].src);
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            showFullImage(galleryImages[currentIndex].src);
        } else if (event.key === 'Escape') {
            fullImageContainer.style.display = 'none';
        }
    }
});


const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const renderBtn = controls.querySelector('button[data-action="render"]');
const destroyBtn = controls.querySelector('button[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');


function createBoxes(amount) {
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomRgbColor();
        boxes.push(box);
        size += 10;
    }

    boxesContainer.append(...boxes);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


renderBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount > 0) {
        createBoxes(amount);
    }
});
destroyBtn.addEventListener('click', destroyBoxes);
