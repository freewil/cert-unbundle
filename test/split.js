var test = require('tape');
var unbundle = require('../');

var certs = [
    '-----BEGIN CERTIFICATE-----\nABCDEFG\n-----END CERTIFICATE-----',
    '\n-----BEGIN CERTIFICATE-----\nQRS\n-----END CERTIFICATE-----\n',
    '\r\nbeep\r\n-----BEGIN CERTIFICATE-----\nXYZ\n-----END CERTIFICATE----- '
];
var expected = certs.map(function (s) {
    return '-----BEGIN ' + s.split(/-----BEGIN /)[1].replace(/^\s+|\s+$/, '');
});
var bundle = expected.join('\n');

test('split', function (t) {
    t.plan(1);
    t.deepEqual(unbundle(bundle), expected);
});
