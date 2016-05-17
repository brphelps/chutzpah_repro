var fs = require('fs');
var path = require('path');

var contents = fs.readFileSync(path.join(__dirname, 'wwwroot/js/sample.spec.js'));
for (var i = 0; i < 200; i++) {
	fs.writeFileSync(path.join(__dirname, 'wwwroot/js/sample-'+i+'.spec.js'), contents);
}