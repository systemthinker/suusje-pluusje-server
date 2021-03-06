const { Op } = require("sequelize");
const { Router } = require("express");
const Baskets = require("../models").basket;
const Products = require("../models").product;
const Client = require("../models").client;
const BasketProducts = require("../models").basketProduct;

const router = new Router();

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const basket = await Baskets.findByPk(id, {
      include: [Products],
    });
    const whatIsBasketProduct = await BasketProducts.findAll({
      where: {
        basketId: basket.id,
      },
    });

    const fullCart = whatIsBasketProduct.reduce((acc, p) => {
      const pInAcc = acc.find((cp) => cp.productId === p.productId);
      if (!pInAcc) {
        return [...acc, { productId: p.productId, quantity: 1 }];
      } else {
        const newAcc = acc.map((cp) =>
          cp.productId === p.productId
            ? { ...cp, quantity: cp.quantity + 1 }
            : cp
        );
        return newAcc;
      }
    }, []);

    const productIds = fullCart.map((p) => p.productId);
    const products = await Products.findAll({
      where: { id: { [Op.in]: productIds } },
    });
    const fullCartWithPrice = fullCart.map((cp) => ({
      ...cp,
      ...products.find((p) => p.id === cp.productId).dataValues,
    }));

    res.status(200).send(fullCartWithPrice);
  } catch (e) {
    next(e);
  }
});

router.get("/client/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const basket = await Baskets.findOne({
      where: {
        clientId: id,
      },
      include: [Products],
    });

    const whatIsBasketProduct = await BasketProducts.findAll({
      where: {
        basketId: basket.id,
      },
    });

    const fullCart = whatIsBasketProduct.reduce((acc, p) => {
      const pInAcc = acc.find((cp) => cp.productId === p.productId);
      if (!pInAcc) {
        return [...acc, { productId: p.productId, quantity: 1 }];
      } else {
        const newAcc = acc.map((cp) =>
          cp.productId === p.productId
            ? { ...cp, quantity: cp.quantity + 1 }
            : cp
        );
        return newAcc;
      }
    }, []);

    const productIds = fullCart.map((p) => p.productId);
    const products = await Products.findAll({
      where: { id: { [Op.in]: productIds } },
    });
    const fullCartWithPrice = fullCart.map((cp) => ({
      ...cp,
      ...products.find((p) => p.id === cp.productId).dataValues,
    }));

    res.status(200).send(fullCartWithPrice);
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  // adds item to basket
  try {
    const id = req.params.id;
    // id = clientId
    const productId = req.body.productId;
    if (!id) {
      res.status(400).send("no client found");
    }

    const basketFound = await Baskets.findOne({
      where: {
        clientId: id,
      },
    });

    if (!basketFound) {
      res.status(400).send("no basket found");
    }

    if (!productId) {
      res.status(400).send("no product found to add");
    }

    const validProductId = await Products.findByPk(productId);

    if (!validProductId) {
      res
        .status(400)
        .send("no valid product to add, please provide an existing product");
    }

    const newProductAddedToBasket = await BasketProducts.create({
      basketId: basketFound.id,
      productId,
    });

    const basket = await Baskets.findByPk(basketFound.id, {
      include: [Products],
    });

    const whatIsBasketProduct = await BasketProducts.findAll({
      where: {
        basketId: basketFound.id,
      },
    });

    const fullCart = whatIsBasketProduct.reduce((acc, p) => {
      const pInAcc = acc.find((cp) => cp.productId === p.productId);
      if (!pInAcc) {
        return [...acc, { productId: p.productId, quantity: 1 }];
      } else {
        const newAcc = acc.map((cp) =>
          cp.productId === p.productId
            ? { ...cp, quantity: cp.quantity + 1 }
            : cp
        );
        return newAcc;
      }
    }, []);

    const productIds = fullCart.map((p) => p.productId);
    const products = await Products.findAll({
      where: { id: { [Op.in]: productIds } },
    });
    const fullCartWithPrice = fullCart.map((cp) => ({
      ...cp,
      ...products.find((p) => p.id === cp.productId).dataValues,
    }));

    res.status(200).send(fullCartWithPrice);
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  // removes product from basket
  console.log("product id", req.body.productId);

  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).send("no basket found");
    }

    const basketFound = await Baskets.findOne({
      where: {
        clientId: id,
      },
    });

    if (!basketFound) {
      res.status(400).send("no basket found");
    }
    const productId = req.body.productId;

    if (!productId) {
      res.status(400).send("no product found to add");
    }

    const validProductId = await Products.findByPk(productId);

    if (!validProductId) {
      res
        .status(400)
        .send(
          "no valid product found to remove, please provide an existing product"
        );
    }

    await BasketProducts.destroy({
      where: { productId, basketId: basketFound.id },
      limit: 1,
    });

    const whatIsBasketProduct = await BasketProducts.findAll({
      where: {
        basketId: basketFound.id,
      },
    });

    const fullCart = whatIsBasketProduct.reduce((acc, p) => {
      const pInAcc = acc.find((cp) => cp.productId === p.productId);
      if (!pInAcc) {
        return [...acc, { productId: p.productId, quantity: 1 }];
      } else {
        const newAcc = acc.map((cp) =>
          cp.productId === p.productId
            ? { ...cp, quantity: cp.quantity + 1 }
            : cp
        );
        return newAcc;
      }
    }, []);

    const productIds = fullCart.map((p) => p.productId);
    const products = await Products.findAll({
      where: { id: { [Op.in]: productIds } },
    });
    const fullCartWithPrice = fullCart.map((cp) => ({
      ...cp,
      ...products.find((p) => p.id === cp.productId).dataValues,
    }));

    res.status(200).send(fullCartWithPrice);
  } catch (e) {
    next(e);
  }
});

router.post("/create", async (req, res, next) => {
  let id = req.body.id;

  try {
    if (!id) {
      res.status(400).send("no client found");
    }

    console.log("id is ", id);
    const client = await Client.findByPk(id);

    if (!client) {
      res.status(400).send("no client found with that id");
      return;
    }

    let basket = await Baskets.findOne({
      where: {
        clientId: id,
      },
    });

    if (!basket) {
      const basketCreated = await Baskets.create({
        clientId: id,
      });

      res.status(200).send(basketCreated);
    }

    const whatIsBasketProduct = await BasketProducts.findAll({
      where: {
        basketId: basket.id,
      },
    });

    const fullCart = whatIsBasketProduct.reduce((acc, p) => {
      const pInAcc = acc.find((cp) => cp.productId === p.productId);
      if (!pInAcc) {
        return [...acc, { productId: p.productId, quantity: 1 }];
      } else {
        const newAcc = acc.map((cp) =>
          cp.productId === p.productId
            ? { ...cp, quantity: cp.quantity + 1 }
            : cp
        );
        return newAcc;
      }
    }, []);

    const productIds = fullCart.map((p) => p.productId);
    const products = await Products.findAll({
      where: { id: { [Op.in]: productIds } },
    });
    const fullCartWithPrice = fullCart.map((cp) => ({
      ...cp,
      ...products.find((p) => p.id === cp.productId).dataValues,
    }));

    res.status(200).send(fullCartWithPrice);
  } catch (e) {
    next(e);
  }
});

router.delete("/all/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).send("no basket found");
    }

    const basketFound = await Baskets.findByPk(id);

    if (!basketFound) {
      res.status(400).send("no basket found");
    }

    await BasketProducts.destroy({
      where: {
        basketId: id,
      },
    });

    const newBasket = await Baskets.findByPk(id, {
      include: [Products],
    });

    res.status(200).send(newBasket);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
