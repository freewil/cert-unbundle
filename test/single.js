var test = require('tape');
var unbundle = require('../');

var expected = [
    '-----BEGIN CERTIFICATE-----\nABCDEFG\n-----END CERTIFICATE-----'
];
var bundle = expected.join('\n');

test('single cert', function (t) {
    t.plan(1);
    t.deepEqual(unbundle(bundle), expected);
});
