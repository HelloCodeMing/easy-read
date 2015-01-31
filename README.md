# user-friendly readability
Forked from [Arrix](https://github.com/arrix/node-readability).

[Readability.js by Arc90](http://lab.arc90.com/experiments/readability/) ported to node.js.


## Why not node-readability
- No url support
- Performance is fairly awesome.
- Better support for multiple languages.

## Requirements
* [jsdom](https://github.com/tmpvar/jsdom)
* [htmlparser](https://github.com/tautologistics/node-htmlparser)
* [needle](https://github.com/tomas/needle)

## Example

    var read = require('easy-read');
    
    read.parse(html, url, function(result) {
        console.log(result.title, result.content);
    });

## Limitation
* no fetching next pages
* no support for frames
