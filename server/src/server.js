const express = require("express");
const app = express();

const { PORT } = require("./config/config");

const cors = require("cors");
const routes = require("./modules/routes");

app.use(express.json());
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(routes);

app.listen(PORT, () => console.log(PORT));
