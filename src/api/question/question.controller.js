const service = require("./question.service");
const notificationService = require("../notification/notification.service");

// To get all the records from question collection
const getQuestions = async function (req, res) {
  try {
    if (req.user.role == "STUDENT") {
      req.query.status = "APPROVED";
    }

    var questions = await service.getQuestions(req);
    res.status(200).send(questions);
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

// To Save a record into question collection
const saveQuestion = async function (req, res) {
  try {
    await service.saveQuestion(req);
    req.body.title = "New Question Added By Staff";
    await notificationService.saveNotification(req);
    res.status(201).send("Question Record Saved Succesfully");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

// To update a record in question collection
const updateQuestion = async function (req, res) {
  try {
    await service.updateQuestion(req);
    req.body.title = "Question Updated By Staff";
    await notificationService.saveNotification(req);
    res.status(201).send("Question Record updated Succesfully");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

// To delete a record in question collection
const deleteQuestion = async function (req, res) {
  try {
    await service.deleteQuestion(req);
    req.body.title = "Question Deleted By Staff";
    await notificationService.saveNotification(req);
    res.status(200).send("Question Record Deleted Succesfully");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getQuestions,
  saveQuestion,
  updateQuestion,
  deleteQuestion,
};
