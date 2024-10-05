const productService = require('../services/productService')
// or You can omit /index because node will find inside the folder with same file name or file named index
const constant = require('../constants/index');

module.exports.createProduct = async (req, resp) => {
    let responseObj = { ...constant.defaultServerResponse };
    try {
        const responseFromService = await productService.createProduct(req.body);
        responseObj.status = 200;
        responseObj.message = constant.productMessage.PRODUCT_CREATED;
        responseObj.body = responseFromService;

    } catch (error) {
        console.log("Soemthing went wrong controller / createProduct", error);
        responseObj.message = error.message;

    }
    return resp.status(responseObj.status).send(responseObj);
}
