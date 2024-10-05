const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        brand: String,
    }, {
    timestamps: true, // this will create auto created at updateat out of the box
    toObject: {
        transform: (doc, ret, options) => {

            // replace _id and delete __v from response data
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});



module.exports = mongoose.model('Product', productSchema);
