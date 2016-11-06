'use strict';

const express = require('express');
const router = express.Router();

/* GET localizations listing. */
router.get('/', function (req, res, next) {
    res.render('manage', {data: ['ding', 'dong']});
});

module.exports = router;
