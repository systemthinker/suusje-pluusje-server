const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const Client = require("../models/").client;
const Basket = require('../models').basket
const Address = require('../models').adres;
const { SALT_ROUNDS } = require("../config/constants");
const basket = require("../models/basket");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const client = await Client.findOne({ where: { email } });

    if (!client || !bcrypt.compareSync(password, client.password)) {
      return res.status(400).send({
        message: "Client with that email not found or password incorrect"
      });
    }

    delete client.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ clientId: client.id });
    return res.status(200).send({ token, ...client.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newClient = await Client.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
      isVerified: true
    });

    const newBasket = await Basket.create({
      clientId : newClient.id
    })

    delete newClient.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ clientId: newClient.id });

    res.status(201).json({ token, ...newClient.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.patch("/order/signup", authMiddleware, async (req, res) => {
  const { email, password, name, id } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  if(!id){
    return res.status(400).send('no client found')
  }

  try {
    const client = await Client.findByPk(id,{
      include : [Address]
    })
    
    if(!client){
      return res.status(400).send('no client found')
    }
    client.name = name;
    client.password = bcrypt.hashSync(password, SALT_ROUNDS)
    client.isVerified = true
    client.email = email
   
    await client.save()
    console.log('client is', client)
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

router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.client.dataValues["password"];
  res.status(200).send({ ...req.client.dataValues });
});

module.exports = router;
