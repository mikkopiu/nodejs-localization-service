'use strict';

const models = require('../models');
const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
    models.Locale.create({
        id: req.body.id,
        fullName: req.body.fullName
    }).then(() => res.redirect('/'));
});

router.get('/:locale_id/destroy', (req, res) => {
    models.Locale.destroy({
        where: {
            id: req.params.locale_id
        }
    }).then(() => res.redirect('/'));
});

router.post('/:locale_id/localizations/create', (req, res) => {
    models.Localization.create({
        localizationId: req.body.localizationId,
        value: req.body.value,
        LocaleId: req.params.locale_id
    }).then(() => res.redirect('/'));
});

router.get('/:locale_id/localizations/:localization_id/destroy', (req, res) => {
    models.Localization.destroy({
        where: {
            id: req.params.localization_id
        }
    }).then(() => res.redirect('/'));
});

module.exports = router;
