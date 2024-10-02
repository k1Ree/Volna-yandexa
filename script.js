const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let waves = [
    {
        y: canvas.height / 3,
        length: 0.01,
        amplitude: 50,
        frequency: 0.01,
        direction: 1,
        color: '#00b4d8'
    },
    {
        y: canvas.height / 2,
        length: 0.02,
        amplitude: 75,
        frequency: 0.02,
        direction: -1,
        color: '#90e0ef'
    },
    {
        y: (2 * canvas.height) / 3,
        length: 0.015,
        amplitude: 100,
        frequency: 0.015,
        direction: 1,
        color: '#caf0f8'
    }
];

let increment = 0.05;

function drawWave(wave) {
    ctx.beginPath();
    ctx.moveTo(0, wave.y);

    for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(
            i,
            wave.y + Math.sin(i * wave.length + increment * wave.direction) * wave.amplitude
        );
    }

    ctx.strokeStyle = wave.color;
    ctx.lineWidth = 2;
    ctx.stroke();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    waves.forEach(wave => {
        drawWave(wave);
    });

    increment += 0.05;
    requestAnimationFrame(animate);
}

animate();

// Обработчик изменения размеров окна
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Обновляем позиции по высоте для каждой волны
    waves[0].y = canvas.height / 3;
    waves[1].y = canvas.height / 2;
    waves[2].y = (2 * canvas.height) / 3;
});