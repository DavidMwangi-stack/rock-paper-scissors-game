// Click Counter
let clickCount = 0;
const clickBtn = document.getElementById('clickBtn');
clickBtn.addEventListener('click', () => {
    clickCount++;
    clickBtn.textContent = `Click Me (${clickCount})`;
    clickBtn.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});

// Hover Box Color
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = '#0ff';
});
hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = '#f0f';
});

// Key Press Detection
document.addEventListener('keydown', (e) => {
    document.getElementById('lastKey').textContent = e.key;
});

// Secret Message Reveal
const secretMessage = document.getElementById('secretMessage');
document.getElementById('revealTrigger').addEventListener('dblclick', () => {
    secretMessage.style.display = 'block';
});

// Image Gallery Interaction
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', (e) => {
        const parent = e.target.parentElement;
        const existing = parent.querySelector('img[style]');
        if (existing) existing.remove();

        const mainImg = document.createElement('img');
        mainImg.src = e.target.src;
        mainImg.style.width = '100%';
        parent.prepend(mainImg);
    });
});

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;
        document.querySelectorAll('.tab-btn, .tab-content').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Form Validation
const form = document.getElementById('demoForm');
const inputs = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    password: document.getElementById('password')
};

Object.entries(inputs).forEach(([key, input]) => {
    input.addEventListener('input', () => validateField(input));
});

function validateField(field) {
    const errorElement = field.nextElementSibling;

    if (field.validity.valid) {
        field.classList.add('valid');
        field.classList.remove('invalid');
        errorElement.style.display = 'none';
    } else {
        field.classList.add('invalid');
        field.classList.remove('valid');
        errorElement.style.display = 'block';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    Object.values(inputs).forEach(validateField);

    if (form.checkValidity()) {
        alert('Form submitted successfully!');
        form.reset();
        Object.values(inputs).forEach(input => input.classList.remove('valid', 'invalid'));
    }
});
