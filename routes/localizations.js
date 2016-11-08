'use strict';

const models = require('../models');
const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
    models.Localization.create({
        id: req.body.id
    }).then(() => res.redirect('/'));
});

router.get('/:localization_id/destroy', (req, res) => {
    models.Localization.destroy({
        where: {
            id: req.params.localization_id
        }
    }).then(() => res.redirect('/'));
});

router.post('/:localization_id/translations/create', (req, res) => {
    models.Translation.create({
        LocalizationId: req.params.localization_id,
        LocaleId: req.body.localeId,
        value: req.body.value
    }).then(() => res.redirect('/'));
});

router.get('/:localization_id/translations/:translations_id/destroy', (req, res) => {
    models.Translation.destroy({
        where: {
            id: req.params.translations_id
        }
    }).then(() => res.redirect('/'));
});

module.exports = router;
