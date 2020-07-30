const express = require("express");
const loggerMiddleWare = require("morgan");
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");
const authRouter = require("./routers/auth");
const clientRouter = require("./routers/client");
const basketRouter = require("./routers/basket");
const orderRouter = require("./routers/order");
const productRouter = require("./routers/product");
const productDetailRouter = require("./routers/productDetails");
const authMiddleWare = require("./auth/middleware");

const app = express();
app.use(loggerMiddleWare("dev"));
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  const user = req.user;
  delete user.dataValues["password"];
  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

app.use("/", authRouter);
app.use("/client", clientRouter);
app.use("/basket", basketRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);
app.use("/details", productDetailRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
