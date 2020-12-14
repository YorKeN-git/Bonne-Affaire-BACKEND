const bcrypt = require('bcrypt');
const User = require('../modeles/user');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash,
                prenom: req.body.prenom,
                nom: req.body.nom,
                adresse: req.body.adresse,
                codePostal: req.body.codePostal,
                ville: req.body.ville
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};