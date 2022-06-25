var fs = require('fs')
var data = fs.readFileSync(__dirname+'/main.js',
'utf-8')
console.log(data);
console.log('end');