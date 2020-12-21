const express = require('express');
const router = express.Router();

const commandeCtrl = require('../controllers/commande');

router.post('/creerCommande', commandeCtrl.creerCommande);

module.exports = router;