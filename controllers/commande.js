const Commande = require('../modeles/commande');
const User = require('../modeles/user');
const Produit = require('../modeles/produit');

exports.creerCommande = (req, res, next) => {
    console.dir(JSON.stringify(req.body));
    //const commandeObj = JSON.parse(req.body.commande);
    // const user = new User({
    //     user: req.body.user
    // });
    // const panier = new Produit({
    //     panier: req.body.produit
    // });
    const commande = new Commande({
        userId: req.body.userId,
        user: req.body.user,
        prenomLivraison: req.body.prenomLivraison,
        nomLivraison: req.body.nomLivraison,
        adresseLivraison: req.body.adresseLivraison,
        codePostalLivraison: req.body.codePostalLivraison,
        villeLivraison: req.body.villeLivraison,
        produit: req.body.panier,
        totalAPayer: req.body.totalAPayer,
        dateCommande: req.body.dateCommande
    });
    //commande.user = user;
    //commande.produit = panier;
    commande.save()
        .then(() => res.status(201).json({ message: 'Commande enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};