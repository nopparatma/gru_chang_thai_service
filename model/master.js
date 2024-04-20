const mongoose = require("mongoose");

const masterSchema = new mongoose.Schema(
    {
        KEY: {
            type: String,
            required: true,
        },
        NAME: {
            type: String,
            required: true,
        },
        DATA: {
            type: String,
            required: true,
        },
    },
    {
        collection: "MASTER",
    }
);

const Product = mongoose.model("Master", masterSchema);

module.exports = Product;
