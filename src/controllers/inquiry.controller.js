const data = require('../common/mapper/inquiry.mapper')

exports.getInquiry = (req, res) => {
	const rows = req.query.rows
	switch (rows) {
		case '1000':
			res.send(data.get1000Rows())
			break
		case '10000':
			res.send(data.get10000Rows())
			break
	}
}
