var fs = require('fs')
var certs = unbundle(fs.readFileSync('bundle.ca', 'utf8'));
console.log(certs);
