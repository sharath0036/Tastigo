import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: [
        {
            type: String,
            required: true,
            enum: ['veg', 'non-veg']
        }
    ],
    image: {
        type: String
    },
    bestseller: {
        type: Boolean
    },
    description: {
        type: String
    },
    firm: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Firm"
        }
    ]

})

const Product = mongoose.model("Product", productSchema);
export default Product;