import express from 'express';

import productSchema from '../models/product.js'

const router = express.Router();



router.get('', (req, res, next) => {
    res.send('Home Page')
})


router.get('/products', (req, res, next) => {
    res.json({
        status: 'success',
        data:{
            products: products
        }
    })
})

router.post('/products', async (req, res, next) => {
    const {name, price, description, color} = req.body;

    const product = await productSchema.create({
        name,
        price, 
        description,
        color
    })

    res.status(201).json({
        status: "success",
        date:{
            product
        }
    })

})


router.get('/products/:id', (req, res, next) =>{
    const {id} = req.params;
    // pull out req.params.id
    const product = products.find(item =>id === item.id);

    res.status(201).json({
        status:"success",
        data : {
            product
        }
    })


})



export default router;