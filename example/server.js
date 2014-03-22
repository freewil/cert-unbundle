var fs = require('fs')
var unbundle = require('cert-unbundle');
var https = require('https');

var certs = unbundle(fs.readFileSync('bundle.ca', 'utf8'));

var opts = { ca: certs };
var server = https.createServer(opts, function () {
    res.end('beep boop\n');
});
server.listen(443);
