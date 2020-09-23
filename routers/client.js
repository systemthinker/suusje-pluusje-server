const { Router } = require("express");
const Client = require("../models/").client;
const Baskets = require("../models").basket;
const BasketProducts = require("../models").basketProduct;
const Products = require("../models").product;
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");

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

router.patch("/signup", authMiddleware, async (req, res) => {
  const { email, password, name, id } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  if (!id) {
    return res.status(400).send("no client found");
  }

  if (password.length < 3) {
    return res
      .status(400)
      .send("Zorg dat uw wachtwoord minimaal 3 tekens bevat");
  }

  try {
    const client = await Client.findByPk(id, {
      include: [Address],
    });

    if (!client) {
      return res.status(400).send("no client found");
    }
    client.name = name;
    client.password = bcrypt.hashSync(password, SALT_ROUNDS);
    client.isVerified = true;
    client.email = email;

    await client.save();
    console.log("client is", client);
    delete client.dataValues["password"]; // don't send back the password hash

    res.status(201).send(client);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.patch("/order", authMiddleware, async (req, res) => {
  const { email, name, lastName, middleName, id } = req.body;
  if (!email || !name || !lastName) {
    return res.status(400).send("Please provide an email, and a name");
  }

  if (!id) {
    return res.status(400).send("no client found");
  }

  if (password.length < 3) {
    return res
      .status(400)
      .send("Zorg dat uw wachtwoord minimaal 3 tekens bevat");
  }

  try {
    const client = await Client.findByPk(id, {
      include: [Address],
    });

    if (!client) {
      return res.status(400).send("no client found");
    }
    client.name = name;
    client.lastName = lastName;
    client.middleName = middleName;
    client.email = email;

    await client.save();
    console.log("client is", client);

    res.status(201).send(client);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
