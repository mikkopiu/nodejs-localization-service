'use strict';

const models = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    Promise.all([
        models.Localization.findAll({include: [models.Translation]}),
        models.Locale.findAll({include: [models.Translation]})
    ])
    .then(([localizations, locales]) => {
        localizations = localizations.map(l => {
            l.usedLocales = l.Translations.map(t => t.LocaleId);
            return l;
        });

        res.render('index', {
            title: 'Localization service',
            localizations,
            locales
        });
    });
});

module.exports = router;
