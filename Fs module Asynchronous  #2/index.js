const fs = require('fs');

//write the data
// fs.writeFile('read.txt', 'today is awesome day :)', (err) => {
// 	console.log('files is created');
// 	console.log(err);
// });

// we pass them a function as an argument – a callback –
// that gets called when that task completes.
// The callback has an argument that tells you whether
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile
// has completed (even if it’s nothing), and start
//  checking for errors.

//append the data
// fs.appendFile('read.txt', 'this updating data', (err) => {
// 	console.log('task completed');
// });

//read the data
// fs.readFile('read.txt', 'UTF-8', (err, data) => {
// 	console.log(data);
// });
// console.log('nodejs is awesome');
