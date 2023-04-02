const express = require('express')
const router = express.Router()
const controller = require('../controllers/inquiry.controller')

// 一覧データ取得ルーター
router.get('/getInquiryData', controller.getInquiry)
module.exports = router
