const router = require('express').Router();
let Reservation = require('../models/reservations.model');

router.route('/').get((req, res) => {
    Reservation.find()
    .then(reservations => res.json(reservations))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phonenumber = Number(req.body.phonenumber);
  const number = Number(req.body.number);
  const time = Number(req.body.time);
  const date = Date.parse(req.body.date);

  const newReservation = new Reservation({
    name,
    email,
    phonenumber,
    number,
    time,
    date
  });

  newReservation.save()
  .then(() => res.json('Reservation added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Reservation.findById(req.params.id)
    .then(reservation => res.json(reservation))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Reservation.findByIdAndDelete(req.params.id)
    .then(() => res.json('Reservation deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Reservation.findById(req.params.id)
    .then(reservation => {
        reservation.name = req.body.name;
        reservation.email = req.body.email;
        reservation.phonenumber = Number(req.body.phonenumber);
        reservation.number = Number(req.body.number);
        reservation.time = Number(req.body.time);
        reservation.date = Date.parse(req.body.date);

      reservation.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;