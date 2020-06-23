const { Router } = require("express");
const Client = require("../models/").client;
const Baskets = require('../models').basket
const BasketProducts = require('../models').basketProduct
const Products = require('../models').product

const router = new Router();

router.post('/create',async(req,res,next)=>{
    try{
        productId = req.body.productId
        const clientCreated = await Client.create()
            
            const basketCreated = await Baskets.create({
                clientId: clientCreated.id
            })
            
            const newProductAddedToBasket = await BasketProducts.create({
                basketId : basketCreated.id,
                productId
            })

            const basket = await Baskets.findByPk(basketCreated.id,{
                include: [Products]
            })

            res.status(200).send(basket)

        } catch(e){
            next(e)
        }

})


module.exports = router;