let fs = require('fs');
let path = require('path');

let aboutFile = function (file) {
  let data = [];
  if (file.isFile()) {
    fs.stat(path.resolve(__dirname, 'secret-folder', file.name), function (err, stats) {
      if (err) {
        return console.log(err);
      }
      data.push(file.name.split('.').slice(0, -1).join('.'));
      data.push(path.extname(file.name).slice(1));
      data.push((Math.round(stats.size / 1024)) + 'Kb');
      console.log(data.join(' - '));
    });
  }
};

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, function (err, files) {
  if (err) {
    return console.log(err);
  }
  files.forEach(item => {
    aboutFile(item);
  });
});