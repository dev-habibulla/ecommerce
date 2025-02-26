require("dotenv").config();

const express = require("express");
const app = express();
const authRoute = require("./routes/authRoutes");
const cors = require("cors");
const dbConnection = require("./utils/dbConnection");


app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))


let port = process.env.PORT;

app.use(express.json())
app.use("/api", authRoute);

app.get("/", function (req, res) {
  res.send("Hello World");
});

dbConnection()

app.listen(port, function () {
  console.log(`port run ${port}`);
});
