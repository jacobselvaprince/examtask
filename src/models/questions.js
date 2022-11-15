const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  choice1: {
    type: String,
    required: true,
    trim: true,
  },
  choice2: {
    type: String,
    required: true,
    trim: true,
  },
  choice3: {
    type: String,
    required: true,
    trim: true,
  },
  choice4: {
    type: String,
    required: true,
    trim: true,
  },
  mark: {
    type: Number,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["APPROVED", "REJECTED", "PENDING"],
    default: "PENDING",
  },
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;