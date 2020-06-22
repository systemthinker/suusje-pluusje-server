const { Router } = require("express");
const Baskets = require('../models').basket 
const Products = require('../models').product 
const Client = require('../models').client
const BasketProducts = require('../models').basketProduct


const router = new Router();

router.get('/:id', async(req,res,next)=>{
    const id = req.params.id
    const basket = await Baskets.findByPk(id,{
        include: [Products]
    })
   
    res.status(200).send(basket);

})

router.patch('/:id', async(req,res,next)=>{
    // adds item to basket
    try{
    const id = req.params.id
    if(!id){
        res.status(400).send('no basket found')
    }

    const basketFound = await Baskets.findByPk(id)
    console.log("basketFound", basketFound)
    if(!basketFound) {
        res.status(400).send('no basket found')
    }
    const productId = req.body.productId

    
    
    if(!productId){
        res.status(400).send('no product found to add')
    }

    const validProductId = await Products.findByPk(productId)

    if(!validProductId) {
        res.status(400).send('no valid product to add, please provide an existing product')
    }

    const newProductAddedToBasket = await BasketProducts.create({
        basketId : id,
        productId
    })

    const basket = await Baskets.findByPk(id,{
        include: [Products]
    })
 
    res.status(200).send(basket);
    } catch(e){
        next(e)
    }

})

router.delete('/:id', async(req,res,next)=>{
    // removes product from basket

    try{
        const id = req.params.id
        if(!id){
            res.status(400).send('no basket found')
        }
    
        const basketFound = await Baskets.findByPk(id)
        
        if(!basketFound) {
            res.status(400).send('no basket found')
        }
        const productId = req.body.productId
           
        if(!productId){
            res.status(400).send('no product found to add')
        }
    
        const validProductId = await Products.findByPk(productId)
    
        if(!validProductId) {
            res.status(400).send('no valid product found to remove, please provide an existing product')
        }

        await BasketProducts.destroy(
            {where: {productId},
        limit: 1},
            )

        const newBasket = await Baskets.findByPk(id,{
            include: [Products]
        })
        
        res.status(200).send(newBasket)

    } catch(e){
        next(e)
    }

})

router.post('/create', async(req,res,next)=>{
    let id = req.body.id; 
       
    try{

    if(!id){
        try{
        const clientCreated = await Client.create()
            console.log('client created?', clientCreated)
        id = clientCreated.id
        } catch(e){
            next(e)
        }
    }

    console.log('id is ', id);
    const client = await Client.findByPk(id);

    if(!client) {
        res.status(400).send('no client found with that id')
        return
    }

    let basket = await Baskets.findOne({
        where: {
            clientId : id
        }
    })

    

    if(!basket){
    const basketCreated = await Baskets.create({
        clientId: id
    })
    
    res.status(200).send(basketCreated)
    }

    res.status(200).send(basket)
    } catch(e){
    next(e)
    }

})  

router.delete('/all/:id', async(req,res,next)=>{

    try{
        const id = req.params.id
        if(!id){
            res.status(400).send('no basket found')
        }
    
        const basketFound = await Baskets.findByPk(id)
        
        if(!basketFound) {
            res.status(400).send('no basket found')
        }

        await BasketProducts.destroy(
            {where: {
                basketId: id}
            })

        const newBasket = await Baskets.findByPk(id,{
            include: [Products]
        })
        
        res.status(200).send(newBasket)

    } catch(e){
        next(e)
    }

})

router.get('/anonymous/create/', async(req,res,next)=>{
    // creates anonymous basket for client that isnt logged in
    try{
        newBasket = await Baskets.create();

        res.status(200).send(newBasket)
    } catch(e){
        next(e)
    }
})

module.exports = router;