// Challenge Time

//  1: Create a folder named it demo
//  2: Create a file in it named bio.txt and demo into it.
//  3: Add more data into the file at the end of the existing data.
//  4: Read the data without getting the buffer data at first.
//  file encoding
//  5: Rename the file name to mybio.txt
//  6: now delete both the file and the folder

const fs = require('fs');

//1. Create a folder named it demo
// fs.mkdirSync('demo');

//2.Create a file in it named bio.txt and data into it.
// fs.writeFileSync('./demo/bio.txt', 'Hello Friends');

//3.Add more data into the file at the end of the existing data.
// fs.appendFileSync('./demo/bio.txt', ' Files Data Append');

//4: Read the data without getting the buffer data at first.
//  file encoding
// let Data = fs.readFileSync('./demo/bio.txt', 'utf-8');
// console.log(Data);

//5.Rename the file name to mybio.txt
// fs.renameSync('./demo/bio.txt', './demo/mybio.txt');

//6. now delete both the file and the folder
// fs.unlinkSync('./demo/mybio.txt');
// fs.rmdirSync('demo');
