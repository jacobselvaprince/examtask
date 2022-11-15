var composable_middleware = require("composable-middleware");

const checkRole = function (allowedRole) {
  return composable_middleware().use(function (req, res, next) {
    var permitted = allowedRole.includes(req.user.role);

    if (!permitted) {
      res.status(403).send("Unauthorized");
      return;
    }
    next();
  });
};

module.exports = checkRole;