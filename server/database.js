exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://trig:c0ding!@ds137230.mlab.com:37230/sixty-six-days';

exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL ||
	'mongodb://localhost/test-sixty-six-days');

exports.PORT = process.env.PORT || 8080;
