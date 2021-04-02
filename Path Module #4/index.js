const path = require('path');

console.log(path.dirname('C:UsersThe-BeastDesktopNode Js By Thapa TechnicalPath Module #4>/index.js'));
console.log(path.extname('C:UsersThe-BeastDesktopNode Js By Thapa TechnicalPath Module #4>/index.js'));
console.log(path.basename('C:UsersThe-BeastDesktopNode Js By Thapa TechnicalPath Module #4>/index.js'));
const mypath = path.parse('C:UsersThe-BeastDesktopNode Js By Thapa TechnicalPath Module #4>/index.js');
console.log(mypath.root);
console.log(mypath.name);
