module.exports = function (src) {
    if (typeof src !== 'string') src = String(src);
    var res = [];
    var parts = src.split(/(-----END CERTIFICATE-----(?:\n|$))/);
    for (var i = 0; i < parts.length-1; i+= 2) {
        var pre = parts[i];
        var post = parts[i+1];
        pre = pre.split(/(-----BEGIN ([^\n]+)?CERTIFICATE-----)/)
            .slice(1).join('')
        ;
        res.push(pre + post.replace(/\s+$/, ''));
    }
    return res
};
