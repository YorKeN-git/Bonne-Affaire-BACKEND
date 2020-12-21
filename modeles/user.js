const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, index: true, unique: true, sparse: true },
    mdp: { type: String, required: true },
    prenom: { type: String, required: true },
    nom: { type: String, required: true },
    adresse: { type: String, required: true },
    codePostal: { type: Number, required: true },
    ville: { type: String, required: true },
});

//userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);