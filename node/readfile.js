var fs = require('fs');
fs.readFile(__dirname +'/main.js', 'utf-8', function(err, data) {
    if(err) {
        console.error(err);
    }
    else {
        console.log(data);
    }
});
console.log('end');