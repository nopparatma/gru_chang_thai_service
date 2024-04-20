const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        NAME: {
            type: String,
            required: true,
        },
        IMAGE: {
            type: String,
            required: true,
        },
        TYPE: {
            type: String,
            required: true,
        },
    },
    {
        collection: "PRODUCT",
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
