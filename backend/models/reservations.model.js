const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phonenumber: { type: Number, required: true },
  number: { type: Number, required: true },
  time: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;