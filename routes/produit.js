const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');

const produitCtrl = require('../controllers/produit');

router.get('/', produitCtrl.getAllProduit);
router.post('/', multer, produitCtrl.creerProduit);
router.delete('/:id', produitCtrl.deleteProduit);
router.get('/:id', produitCtrl.getProduitById);
router.put('/:id', multer, produitCtrl.modifierProduit);
module.exports = router;