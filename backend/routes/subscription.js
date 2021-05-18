const router = require('express').Router();
let Subscription = require('../models/subscription.model');

router.route('/').get((req, res) => {
    Subscription.find()
    .then(subscriptions => res.json(subscriptions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email;

  const newEmail = new Subscription({email});

  newEmail.save()
    .then(() => res.json('Email added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Subscription.findById(req.params.id)
    .then(subscription => res.json(subscription))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Subscription.findByIdAndDelete(req.params.id)
    .then(() => res.json('Subscription deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Subscription.findById(req.params.id)
    .then(subscription => {
        subscription.email = req.body.email;

        subscription.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;