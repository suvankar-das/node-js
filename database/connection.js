const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
        console.log("Database connected");
    } catch (error) {
        console.log("error in connection js=>", error);
        throw new Error(error);
    }
};
