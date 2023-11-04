const { spawn } = require('child_process');
require('dotenv').config();

// ---

const WIDTH = Number(process.env.WIDTH) || 100;
const HEIGHT = Number(process.env.HEIGHT) || 100;
const NAME = process.env.FINAL_NAME || 'result';
const PATH_TO_SOURCE = process.env.PATH_TO_SOURCE;


if (!PATH_TO_SOURCE) {
    console.error('Укажите путь до файла');
    process.exit();
}

const response = spawn('ffmpeg', [
    '-i', PATH_TO_SOURCE,
    '-c:v', 'libx265',
    '-s', `${WIDTH}x${HEIGHT}`,
    `${NAME}.mp4`,
]);

response.stdout.on('data', (data) => {
    console.log('Новые данные:', data.toString());
});

response.stderr.on('data', (error) => {
    console.log('Ошибка:', error.toString());
});

response.on('close', () => {
    console.log('Готово');
});
