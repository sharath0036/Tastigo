import mongoose from "mongoose";

const firmSchema = new mongoose.Schema({
    firmname: {
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
            enum: ['north-india', 'south-india']
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
    }

})

const Firm = mongoose.model("Firm", firmSchema);
export default Firm;
