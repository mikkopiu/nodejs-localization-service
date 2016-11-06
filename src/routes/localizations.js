'use strict';

const express = require('express');
const router = express.Router();
const db = require('../db').client;
const debug = require('debug')('server:localizations');

/* GET localizations listing. */
router.get('/', (req, res, next) => {
    db.hgetallAsync('localization')
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
    db.hmsetAsync('localization', localization)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            debug(`Error ${err}`);
            next(err);
        });
});

module.exports = router;
