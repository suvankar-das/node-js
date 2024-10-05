const joi = require('@hapi/joi');


module.exports.createProductSchema = joi.object().keys({
    name: joi.string().required(),
    price: joi.number().required(),
    brand: joi.string().required(),
});
