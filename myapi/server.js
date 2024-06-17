const apiKeyMiddleware = require("./middleware/apiKeyMiddleware");


//bring in .env
require("dotenv").config();
//express and rate limit
const express = require("express");
const rateLimit = require("express-rate-limit");
//cors
const cors = require("cors");
//get the port from .env
const PORT = process.env.PORT;

const app = express();

//lets create a rate-limiting object
const limit = rateLimit({
  windowMs: 10 * 60 * 1000, //time limit of 10 minutes
  max: 3, //number of requests they can make in that limit
});

//configure middleware
app.use(apiKeyMiddleware);



app.use(express.json());
app.use(cors());
//add our rate limiter to middleware
app.use(limit);

//define an endpoit at the root
app.get("/", (req, res) => {
  res.send("Hello World");
});
//listen on the port
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});


