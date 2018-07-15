const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (filename) => {
  fs.writeFile(filename, '', 'utf8', (err) => {
    if(err) throw err;
    console.log(`File ${filename} was created.`);
  });
};

module.exports.mkdir = (path) => {
  fs.mkdir(path, (err) => {
    if(err) throw err;
    console.log(`Directory ${path} was created.`);
  });
};

