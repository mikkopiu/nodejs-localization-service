'use strict';

const express = require('express');
const router = express.Router();
const db = require('../db').client;
const debug = require('debug')('server:localizations');

/* GET localizations listing. */
router.get('/', (req, res, next) => {
    db.hgetall('localizations')
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            debug(`Error ${err}`);
            next(err);
        });
});

router.post('/create', (req, res, next) => {
    const localization = req.body;
    db.hmset(localization.id, localization)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            debug(`Error ${err}`);
            next(err);
        });
});

module.exports = router;
