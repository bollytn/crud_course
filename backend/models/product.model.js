import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
},
{ 
    timestamps: true // timestamps: true will automatically add createdAt and updatedAt fields to the document 
} 
); 

const Product = mongoose.model('Product', productSchema);

export default Product;
