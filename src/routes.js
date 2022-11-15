const apiRoute = function (app) {
  // Api Routes
  app.use("/api/users", require("./api/users"));
  app.use("/api/questions", require("./api/question"));
  app.use("/api/notification", require("./api/notification"));
};

module.exports = {
  apiRoute,
};
