const { Produit } = require('../modeles/produit');
const { User } = require('../modeles/user');
const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    prenomLivraison: { type: String, required: true },
    nomLivraison: { type: String, required: true },
    adresseLivraison: { type: String, required: true },
    codePostalLivraison: { type: Number, required: true },
    villeLivraison: { type: String, required: true },
    produit: { type: [mongoose.Schema.Types.ObjectId], ref: 'Produit' },
    totalAPayer: { type: Number, required: true },
    dateCommande: { type: String, required: true },
    dateCommandeValide: { type: String },
    dateCommandeValide: { type: String },
    isEnAttenteValidation: { type: Boolean },
    isValide: { type: Boolean },
    isExpedie: { type: Boolean }
});

module.exports = mongoose.model('Commande', commandeSchema);