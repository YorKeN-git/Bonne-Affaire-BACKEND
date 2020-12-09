const Produit = require('../modeles/produit');
const fs = require('fs');
const produit = require('../modeles/produit');

exports.creerProduit = (req, res, next) => {
    const produitObj = JSON.parse(req.body.produit);
    const produit = new Produit({
        ...produitObj,
        photoPrincipal: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    produit.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllProduit = (req, res, next) => {
    Produit.find().then(
        (produits) => {
            res.status(200).json(produits);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteProduit = (req, res, next) => {
    Produit.findOne({ _id: req.params.id })
        .then(produit => {
            const filename = produit.photoPrincipal.split('/images')[1];
            fs.unlink(`images/${filename}`, () => {
                Produit.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};

exports.modifierProduit = (req, res, next) => {
    const produitObj = req.file ? {
        ...JSON.parse(req.body.produit),
        photoPrincipal: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body };
    Produit.updateOne({ _id: req.params.id }, {...produitObj, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));

};

exports.getProduitById = (req, res, next) => {
    Produit.findOne({
        _id: req.params.id
    }).then(
        (produit) => {
            res.status(200).json(produit);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};