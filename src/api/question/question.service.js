const Question = require("../../models/questions");

const getQuestions = function (req) {
  try {
    return Question.find(req.query);
  } catch (e) {
    return e;
  }
};

const saveQuestion = function (req) {
  try {
    var question = new Question(req.body);
    return question.save();
  } catch (e) {
    return e;
  }
};

const updateQuestion = function (req) {
  try {
    return Question.findByIdAndUpdate(req.params.id, req.body);
  } catch (e) {
    return e;
  }
};

const deleteQuestion = function (req) {
  try {
    return Question.findByIdAndDelete(req.params.id);
  } catch (e) {
    return e;
  }
};

module.exports = {
  getQuestions,
  saveQuestion,
  updateQuestion,
  deleteQuestion,
};
