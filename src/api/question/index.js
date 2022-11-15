const express = require("express");
const router = express.Router();
const controller = require("./question.controller");
const auth = require("../../middleware/auth");
const checkRole = require("../../middleware/checkRole");

var writeGroup = ["ADMIN", "STAFF"];
var readGroup = ["ADMIN", "STAFF", "STUDENT"];

router.get("/", auth, checkRole(readGroup), controller.getQuestions);
router.post("/", auth, checkRole(writeGroup), controller.saveQuestion);
router.put("/:id", auth, checkRole(writeGroup), controller.updateQuestion);
router.delete("/:id", auth, checkRole(writeGroup), controller.deleteQuestion);

module.exports = router;
