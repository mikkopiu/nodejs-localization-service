'use strict';

const models = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    models.Locale.findAll({
        include: [ models.Localization ]
    }).then(locales => {
        res.render('index', {
            title: 'Localization service',
            locales
        });
    });
});

module.exports = router;
