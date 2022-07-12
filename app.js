const express = require("express");
const cors = require("cors");

const testSchema = require("./model/testModel");
const connection = require("./config/dbConnection");

const app = express();

app.use(cors());
app.use(express.json());

const testCollection = connection.model("test", testSchema);

app.get("/test", async (req, res) => {
  const result = await testCollection.find({});

  res.send(result);
});

app.listen(5000);

// module.exports = connectDB;
