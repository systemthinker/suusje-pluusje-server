const { Router } = require("express");
const Products = require("../models/").product;

const router = new Router();

router.get('/:id', async(req,res,next)=>{
    try{
        const id = req.params.id
        if(!id){
            res.status(400).send('no product found')
        }

        const product = awaitProducts.findByPk(id)

        if(!product){
            res.status(400).send('no product found')
        }

        res.status(200).send(product)



    } catch(e){
        next(e)
    }
})


module.exports = router;