const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.huruo.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const toolCollection = client.db("power_painting").collection("tools");
  console.log("Coonected");

  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("Hello From power painting!");
});

app.listen(port, () => {
  console.log(`Painting App listening on port ${port}`);
});
