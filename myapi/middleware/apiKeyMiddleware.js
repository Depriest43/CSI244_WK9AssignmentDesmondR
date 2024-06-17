const apiKeyMiddleware = (req, res, next) => {
    //get the api passed to the request if any
    const apiKey = req.headers["x-api-key"];
    //check the apiKey
    if (!apiKey || apiKey !== process.env.API_KEY) {
      //here they failed
      return res.status(401).json({ message: "Unauthorized" });
    }
    //here they passed, call the next middleware in the chain
    next();
  };
  //export this function so we can use it later
  module.exports = apiKeyMiddleware;
  
  
  