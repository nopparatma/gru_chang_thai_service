const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        const MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME;
        const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
        const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
        const MONGO_DB_HOST = process.env.MONGO_DB_HOST;

        const uri = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}/?retryWrites=true&w=majority`;

        await mongoose.connect(uri, {
            dbName: MONGO_DB_NAME
        });

        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB Cannot Connect !!!");
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
