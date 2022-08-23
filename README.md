Simple, synchronous deflate for node.js buffers.



# USAGE

Install with `npm install zlib-node`.

    var Buffer = require('buffer').Buffer;
    var zlib = require('zlib-node');
    
    var input = new Buffer('lorem ipsum dolor sit amet');
    var output = zlib.deflate(input);

Note that `zlib-node` is only intended for small (< 128 KB) data that you already have buffered. It is not meant for input/output streams.

# BUILDING

Make sure you have `zlib` installed. Mac OS X ships with it by default.

To obtain and build the bindings:

    git clone git://github.com/kkaeffer/zlib-node.git
    cd zlib-node
    ./configure
    make

You can also use [`npm`](https://github.com/isaacs/npm) to download and install them:

    npm install zlib-node



# TESTS

[expresso](https://github.com/visionmedia/expresso) is required to run unit tests.

    npm install expresso
    make test



# CONTRIBUTORS

* [Konstantin Käffer](https://github.com/kkaefer)



# LICENSE

`zlib-node` is [BSD licensed](https://github.com/kkaefer/zlib-node/raw/master/LICENSE).
