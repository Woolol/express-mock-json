/* aaaa */
exports.response = (req, res, next) => {
	if (res.statusCode === 200) {
		res.setHeader('test', 'test')
	} else {
		res.setHeader('err', 'err')
	}
	next()
}
