var read = require('./lib/readability');
var needle = require('needle');


/**
 * @desc: the first param could be html source code or URL.
 * @callback: will be called in callback(article)
 */
module.exports = function(html, callback) {
    if (typeof html != 'string')
        callback(new TypeError('type of html must be string'));
	if (html.substring(0, 4) === 'http') {
		var url = html;
		needle.get(url, function(err, res) {
            if (res.body && typeof res.body == 'object') {
                callback(new TypeError('this is not a html page'));
            } else if (!err && res.statusCode == 200) {
				read.parse(res.body, url, callback);
			}
		});
	} else {
		read.parse(html, null, callback);
	}
}
