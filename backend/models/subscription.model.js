const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    email: {
        type: String,
        required : true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
  });

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;