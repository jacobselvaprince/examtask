const jwt = require("jsonwebtoken");
const service = require("../api/users/users.service");

const auth = async function (req, res, next) {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    var decode = await jwt.verify(token, process.env.SECRET_KEY);

    var user = await service.getUserById(decode._id);

    if (!user) {
      res.status(403).send("Unauthenticate");
      return;
    }

    req.user = user;
    next();
  } catch (e) {
    res.status(403).send("Unauthenticate");
  }
};

module.exports = auth;
