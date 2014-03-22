var fs = require('fs')
var certs = unbundle(fs.readFileSync('bundle.ca', 'utf8'));

var https = require('https');
var opts = { ca: certs };
var server = https.createServer(opts, function () {
    res.end('beep boop\n');
});
server.listen(443);
