var bindings = require('./zlib_bindings');
var deflateRaw = require('./deflateRaw');

module.exports = function deflate(cxt) {
    return deflateRaw(cxt, bindings);
}


