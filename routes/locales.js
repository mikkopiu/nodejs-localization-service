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

module.exports = router;
