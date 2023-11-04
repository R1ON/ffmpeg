const { spawn } = require('child_process');
const inquirer = require('inquirer');

// ---

(async () => {

    const { result } = await inquirer.prompt([{
        type: 'number',
        name: 'result',
        message: 'Ширина',
    }]);

    console.log('feqfqe', result)

})();

// TODO: не работает интерактивный режим
// Нужно как-то докеру подсказать, чтобы смог достать значение, которое в терминал вводят


// const path = 'your_video.mp4';

// const response = spawn('ffmpeg', [
//     '-i', path,
//     '-c:v', 'libx265',
//     '-s', '500x500',
//     'final.mp4',
// ]);

// response.stdout.on('data', (data) => {
//     console.log('Новые данные:', data.toString());
// });

// response.stderr.on('data', (error) => {
//     console.log('Ошибка:', error.toString());
// });

// response.on('close', () => {
//     console.log('Готово');
// });
