let fs = require('fs');
let path = require('path');
let { stdout, stdin, exit } = require('process');
let writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Введите текст:');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    end();
  }
  writeStream.write(data);
});
process.on('SIGINT', end);

function end() {
  stdout.write('GoodBye!');
  exit();
}