var express = require('express');
var router = express.Router();
const data = require("../bin/data.json")
router.get('/food', async function(req, res) {
    res.json(data)
});

module.exports = router;
