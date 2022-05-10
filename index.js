const express = require("express");
const cors = require("cors");

const app = express();

//Routes
const pollingUnits = require("./routes/polling_units");
const ward = require("./routes/ward");
const states = require("./routes/states");
const lga = require("./routes/lga");
const party = require("./routes/party");
const puResult = require("./routes/pu_results");

const port = process.env.PORT || 9000;

//Add some useful middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//define Routes
app.get("/", (req, res) => {
  res.send("Server is working!!!");
});

app.use("/polling-units", pollingUnits);
app.use("/ward", ward);
app.use("/states", states);
app.use("/lga", lga);
app.use("/party", party);
app.use("/pu-results", puResult);

//open express server
app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
