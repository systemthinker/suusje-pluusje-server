const { Router } = require("express");
const Baskets = require('../models').basket 
const Products = require('../models').product 
const Client = require('../models').client


const router = new Router();

router.get('/:id', async(req,res,next)=>{
    const id = req.params.id
    const basket = await Baskets.findByPk(id,{
        include: [Products]
    })
   
    res.status(200).send(basket);

})

router.patch('/:id', async(req,res,next)=>{
    const id = req.params.id
    
    const basket = await Baskets.findByPk(id,{
        include: [Products]
    })

     // later add logic for editing basket i.e. remove a product.
   
    
    res.status(200).send(basket);

})

router.post('/:id', async(req,res,next)=>{
    id = req.params.id; 
       
    try{

    if(!id){
        res.status(400).send('please login first')
        return
    }

    const client = await Client.findByPk(id);

    if(!client) {
        res.status(400).send('no client found')
        return
    }

    if(!req.body.id){
        res.status(400).send('no product found')
        return
    }
    
    const clientHasBasket = await Baskets.findOne({
        where: {
            clientId : req.params.id
        }
    })

    if(!clientHasBasket){
    const basket = await Baskets.create({
        clientId: id
    })
    console.log('new basket is', basket)
    }

    // add logic for adding products.

    console.log('clients basket is', clientHasBasket)


    res.status(200).send('ok')
    } catch(e){
    next(e)
    }

})  

module.exports = router;