const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["UNREAD", "READ"],
    default: "UNREAD",
  },
});

const Notification = mongoose.model("Notification", NotificationSchema);

module.exports = Notification;
