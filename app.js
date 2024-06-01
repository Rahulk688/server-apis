const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routers/user.route");
const serviceRoute = require("./routers/service.route");
const walletRoute = require("./routers/wallet.route");
const bookinRoute = require("./routers/booking.route");

const app = express();
app.use(bodyParser.json());
app.use("/",UserRoute);
app.use("/",serviceRoute);
app.use("/",walletRoute);
app.use("/",bookinRoute);

module.exports = app;
