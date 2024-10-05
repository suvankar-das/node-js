const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        brand: String,
    }, {
    timestamps: true // this will create auto created at updateat out of the box
});



module.exports = mongoose.model('Product', productSchema);
