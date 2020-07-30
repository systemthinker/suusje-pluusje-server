const { Router } = require("express");
const Client = require("../models/").client;
const Baskets = require("../models").basket;
const BasketProducts = require("../models").basketProduct;
const Products = require("../models").product;
const { toJWT } = require("../auth/jwt");

const router = new Router();

router.post("/create", async (req, res, next) => {
  try {
    productId = req.body.productId;
    const clientCreated = await Client.create({
      isVerified: false,
    });

    const basketCreated = await Baskets.create({
      clientId: clientCreated.id,
    });

    const newProductAddedToBasket = await BasketProducts.create({
      basketId: basketCreated.id,
      productId,
    });

    const basket = await Baskets.findByPk(basketCreated.id, {
      include: [Products],
    });

    const token = toJWT({ clientId: clientCreated.id });

    res.status(201).json({ token, ...clientCreated.dataValues, basket });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
