const mongoose = require('mongoose');

const produitSchema = mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true },
    photoPrincipal: { type: String, required: true },
    categorie: { type: String, required: true },
    prix: { type: Number, required: true },
    quantity: { type: Number, required: true },

});

module.exports = mongoose.model('Produit', produitSchema);