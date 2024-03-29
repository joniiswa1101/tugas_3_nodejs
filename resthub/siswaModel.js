var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tanggallahir: {
    type: Date,
    default: Date.now
  },
  gender: String,
  hobi: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function(callback, limit) {
  Contact.find(callback).limit(limit);
}
