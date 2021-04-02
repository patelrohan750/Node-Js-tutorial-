const fs = require('fs');

const bioData = {
	name: 'test',
	age: 26,
	learn: 'Node Js'
};

//convert object to json data using stringify method
const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

fs.writeFile('json1.json', jsonData, (err) => {
	console.log('done');
});

//convert JSON data into object using parse method
fs.readFile('json1.json', 'utf-8', (err, data) => {
	const orgData = JSON.parse(data);
	console.log(data);
	console.log(orgData);
});
