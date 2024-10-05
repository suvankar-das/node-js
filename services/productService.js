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

        return await product.save();
    } catch (error) {
        console.log("Error occured at productService createProduct method", error);
        throw new Error(error);
    }
};
