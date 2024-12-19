const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF',
    '#FFD700', '#FF69B4', '#00FFFF', '#7FFFD4', '#800080',
    '#FF4500', '#008080', '#00CED1', '#FF6347', '#DC143C'
];

function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}