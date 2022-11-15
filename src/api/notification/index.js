const express = require("express");
const router = express.Router();
const controller = require("./notification.controller");
const auth = require("../../middleware/auth");
const checkRole = require("../../middleware/checkRole");

var writeGroup = ["ADMIN", "STAFF"];

router.get("/", auth, checkRole(writeGroup), controller.getNotification);
router.post("/", auth, checkRole(writeGroup), controller.saveNotification);
router.put("/:id", auth, checkRole(writeGroup), controller.updateNotification);
router.delete(
  "/:id",
  auth,
  checkRole(writeGroup),
  controller.deleteNotification
);

module.exports = router;
