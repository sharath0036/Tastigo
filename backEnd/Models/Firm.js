import mongoose from "mongoose";

const firmSchema = new mongoose.Schema({
    firmName: {
        type: String,
        required: true,
        unique: true
    },
    area: {
        type: String,
        required: true
    },
    category: [
        {
            type: String,
            required: true,
            enum: ['veg', 'non-veg', 'both']
        }
    ],
    region: [
        {
            type: String,
            required: true,
            enum: ['north-india', 'south-india', 'chinese', 'bakery']
        }
    ],
    offer: {
        type: String
    },
    image: {
        type: String
    },

    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]

})

const FirmModel = mongoose.model("Firm", firmSchema);
export default FirmModel;
