const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// import routes
const asanas = require("./src/api/routes/asanas");

// Initialise Port
const PORT = process.env.PORT || 5000;

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is up and running.");
});

// Use routes
app.use("/api/v1/asanas", asanas);

app.listen(PORT, () => {
  console.log(`Up and running on port ${PORT}`);
});
