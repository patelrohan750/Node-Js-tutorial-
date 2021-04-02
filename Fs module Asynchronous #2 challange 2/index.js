// Challenge Time

//  1: Create a folder named it demo
//  2: Create a file in it named bio.txt and demo into it.
//  3: Add more data into the file at the end of the existing data.
//  4: Read the data without getting the buffer data at first.
//  file encoding
//  5: Rename the file name to mybio.txt
//  6: now delete both the file and the folder

const fs = require('fs');

//1.Create a folder named it demo
// fs.mkdir('demo', (err) => {
// 	console.log('folder created');
// });

//2.Create a file in it named bio.txt and demo into it.
// fs.writeFile('./demo/bio.txt', 'Hello Frinends This node Js tutorial', (err) => {
// 	console.log('files created');
// });

//3.Add more data into the file at the end of the existing data.
// fs.appendFile('./demo/bio.txt', ' updating data', (err) => {
// 	console.log('files data appended');
// });

//4: Read the data without getting the buffer data at first.
//  file encoding
// fs.readFile('./demo/bio.txt', 'utf-8', (err, data) => {
// 	console.log(data);
// });

//5.Rename the file name to mybio.txt
// fs.rename('./demo/bio.txt', './demo/myBio.txt', (err) => {
// 	console.log('rename done');
// });

//6.  now delete both the file and the folder
// fs.unlink('./demo/myBio.txt', (err) => {
// 	console.log('file deleted');
// });

// fs.rmdir('./demo', (err) => {
// 	console.log('folder deleted');
// });
