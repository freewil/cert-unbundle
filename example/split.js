var fs = require('fs')
var unbundle = require('cert-unbundle');

var certs = unbundle(fs.readFileSync('bundle.ca', 'utf8'));
console.log(certs);
