import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from the database
        res.status(200).json({success:true, data: products }); // Send the products as a response
    } catch (error) {
        console.log("error in getting products", error.message);
        res.status(500).json({success:false, message: 'Server error' });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body; //user will send the product in the body

    if(!product.name || !product.price || !product.image) {
      return res.status(400).json({success:false, message: 'Please fill in all fields' });
    }
    const newProduct = new Product({
        name: product.name,
        price: product.price,
        imageUrl: product.image,
    }); // Assuming your Product model still uses 'imageUrl' as the field name
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json({success:true, data: savedProduct });
    } catch (error) {
        console.log("error in creating product", error.message);
        res.status(500).json({success:false, message: 'Server error' });
    }
}

export const updateProduct =  async (req, res) => {
    const { id } = req.params; // Extracting id from the request parameters
    const product = req.body; //user will send the product in the body
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success:true, data: updatedProduct });
    }catch (error) {
        console.log("error in updating product", error.message);
        res.status(404).json({success:false, message: 'Product not found' });
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params; // Extracting id from the request parameters
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: 'Product deleted successfully' });
    }catch (error) {
        console.log("error in deleting product", error.message);
        res.status(404).json({success:false, message: 'Product not found' });
    }
}
