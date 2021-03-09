const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  category: String
}, { timestamps: true });
 
// export Word model.
module.exports = mongoose.model('Product', productSchema);
