const productModel = require("./../database/models/productModel");



module.exports.createProduct = async (serviceData) => {
    //console.log(serviceData);
    // insert the data

    // let product = new productModel({
    //     name: serviceData.name,
    //     brand: serviceData.brand,
    //     price: serviceData.price
    // });

    try {
        let product = new productModel({
            ...serviceData,
        });

        let result = await product.save();
        // toObject() should only apply on single document , for list , use loop before
        return result.toObject();
    } catch (error) {
        console.log("Error occured at productService createProduct method", error);
        throw new Error(error);
    }
};
