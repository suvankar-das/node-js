const Joi = require('@hapi/joi');
const constants = require('../constants');

const validateObjectSchema = (data, schema) => {
    //convert: false if I pass price as "100" , then it will throw error
    const result = schema.validate(data, { convert: false });

    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                path: value.path
            }
        });

        //console.log("error ==>", errorDetails);
        return errorDetails;
    }
    return null;

}



module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        let response = { ...constants.defaultServerResponse };
        const error = validateObjectSchema(req.body, schema);

        if (error) {
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;

            return res.status(response.status).send(response);
        }
        //go to productRoute , You can see , it will kicks in productController.createProduct
        return next();
    }
}
