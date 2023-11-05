const { spawn } = require('child_process');
const { promises } = require('fs');
const { join } = require('path');

// ---

const WIDTH = Number(process.env.WIDTH) || 100;
const HEIGHT = Number(process.env.HEIGHT) || 100;
const NAME = process.env.FINAL_NAME || 'result';
const PATH_TO_SOURCES = join(process.cwd(), 'sources');

run();
async function run() {
    const files = await promises.readdir(PATH_TO_SOURCES);
    const filteredFiles = files.filter((name) => (
        name !== 'README.md'
    ));

    const file = join(PATH_TO_SOURCES, filteredFiles[0]);
    
    if (!file) {
        console.error('В папке sources нет подходящего .mp4 файла');
        process.exit();
    }

    const response = spawn('ffmpeg', [
        '-i', file,
        '-c:v', 'libx265',
        '-s', `${WIDTH}x${HEIGHT}`,
        join(PATH_TO_SOURCES, `${NAME}.mp4`),
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
}
