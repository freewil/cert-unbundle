# cert-unbundle

turn a certificate bundle into an array of certificates you can pass to
[tls](http://nodejs.org/docs/latest/api/tls.html) as the `opts.ca`

# example

## split

``` js
var fs = require('fs')
var certs = unbundle(fs.readFileSync('bundle.ca', 'utf8'));
console.log(certs);
```

## server

``` js
var fs = require('fs')
var certs = unbundle(fs.readFileSync('bundle.ca', 'utf8'));

var https = require('https');
var opts = { ca: certs };
var server = https.createServer(opts, function () {
    res.end('beep boop\n');
});
server.listen(443);
```

# methods

``` js
var unbundle = require('cert-unbundle')
```

## var certs = unbundle(certContents)

Return an array of certificate strings `certs` from a buffer or string of the
bundled `certContents`.

# install

With [npm](https://npmjs.org) do:

```
npm install cert-unbundle
```

# license

MIT
