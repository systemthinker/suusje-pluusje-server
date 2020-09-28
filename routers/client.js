const { Router } = require("express");
const Client = require("../models/").client;
const Baskets = require("../models").basket;
const BasketProducts = require("../models").basketProduct;
const Products = require("../models").product;
const Address = require("../models").adres;
const AddressBilling = require("../models").addressbilling;
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

router.post("/order", authMiddleware, async (req, res) => {
  const { id, salutation, name, middleName, lastName, email } = req.body;
  if (!email || !name || !lastName) {
    return res.status(400).send("Please provide an email, and a name");
  }

  if (!id) {
    return res.status(400).send("no client found");
  }

  console.log("all checked till client");

  try {
    const client = await Client.findByPk(id, {
      include: [Address],
    });

    console.log("client is", client);
    console.log("id is", id);

    if (!client) {
      return res.status(400).send("no client found");
    }
    client.name = name;
    client.lastName = lastName;
    client.middleName = middleName;
    client.email = email;
    client.salutation = salutation;

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

router.post("/address", authMiddleware, async (req, res) => {
  const {
    clientId,
    postalCode,
    houseNumber,
    houseNumberAddition,
    cityNameFromApi,
    streetNameFromApi,
  } = req.body;

  console.log("body is", req.body);
  if (!postalCode || !houseNumber || !cityNameFromApi || !streetNameFromApi) {
    return res
      .status(400)
      .send("Please provide an postalCode, housenumber, city and streetname");
  }

  if (!clientId) {
    return res.status(400).send({ message: "no client found" });
  }

  console.log("all checked till client");

  const address = await Address.findOne({
    where: { clientId },
  });

  console.log("current adres", address);
  try {
    if (address) {
      address.clientId = clientId;
      address.postalCode = postalCode;
      address.houseNumber = houseNumber;
      address.city = cityNameFromApi;
      address.streetName = streetNameFromApi;
      address.houseNumberAddition = houseNumberAddition || null;

      await address.save();
      console.log("address is", address);

      res.status(201).send(address);
    } else {
      const newAddress = await Address.create({
        clientId: clientId,
        postalCode: postalCode,
        houseNumber: houseNumber,
        city: cityNameFromApi,
        streetName: streetNameFromApi,
        houseNumberAddition: houseNumberAddition || null,
      });

      console.log("new address is", newAddress);

      res.status(201).send(newAddress);
    }
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/billing", authMiddleware, async (req, res) => {
  const {
    clientId,
    postalCodeBilling,
    houseNumberBilling,
    houseNumberAdditionBilling,
    cityNameFromApiBilling,
    streetNameFromApiBilling,
  } = req.body;

  console.log("body is", req.body);
  if (
    !postalCodeBilling ||
    !houseNumberBilling ||
    !cityNameFromApiBilling ||
    !streetNameFromApiBilling
  ) {
    return res.status(400).send({
      message:
        "Please provide an postalCode, housenumber, city and streetname for billing address",
    });
  }

  if (!clientId) {
    return res.status(400).send({ message: "no client found" });
  }

  console.log("all checked till client");

  const addressBillingFind = await AddressBilling.findOne({
    where: { clientId },
  });

  console.log("current adres", addressBillingFind);
  try {
    console.log("test");
    if (addressBillingFind) {
      addressBillingFind.clientId = clientId;
      addressBillingFind.postalCodeB = postalCodeBilling;
      addressBillingFind.houseNumber = houseNumberBilling;
      addressBillingFind.city = cityNameFromApiBilling;
      addressBillingFind.streetName = streetNameFromApiBilling;
      addressBillingFind.houseNumberAddition =
        houseNumberAdditionBilling || null;

      await addressBillingFind.save();
      console.log("address is", addressBillingFind);
      console.log("test");
      res.status(201).send(addressBillingFind);
    } else {
      console.log("test222");
      const newAddressBilling = await AddressBilling.create({
        clientId: clientId,
        postalCode: postalCodeBilling,
        houseNumber: houseNumberBilling,
        city: cityNameFromApiBilling,
        streetName: streetNameFromApiBilling,
        houseNumberAddition: houseNumberAdditionBilling || null,
      });

      console.log("new address is", newAddressBilling);

      res.status(201).send(newAddressBilling);
    }
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
