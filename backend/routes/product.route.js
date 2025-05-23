import express from 'express';

import  {getProducts, createProduct, updateProduct, deleteProduct}  from '../controllers/product.controller.js';

const router = express.Router();

//get all products
router.get('/', getProducts);

// create  a new product
router.post('/', createProduct);

// update a product
router.put('/:id', updateProduct);


// delete a product
router.delete('/:id', deleteProduct);


export default router;