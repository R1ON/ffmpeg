// const { spawn } = require('child_process');


// console.log(__dirname)
// const path = __dirname + '/../pretty_numbers.mp4';

// const response = spawn('ffmpeg', [
//     '-i', path,
//     '-c:v', 'libx265',
//     '-s', '500x500',
//     path + '/test.mp4',
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