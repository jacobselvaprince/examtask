const Notification = require("../../models/notification");

const getNotification = function () {
  try {
    return Notification.find();
  } catch (e) {
    return e;
  }
};

const getNotificationById = function (id) {
  try {
    return Notification.findById(id);
  } catch (e) {
    return e;
  }
};

const saveNotification = function (req) {
  try {
    req.body.createdBy = req.user._id;
    var notification = new Notification(req.body);
    return notification.save();
  } catch (e) {
    return e;
  }
};

const updateNotification = function (req) {
  try {
    return Notification.findByIdAndUpdate(req.params.id, req.body);
  } catch (e) {
    return e;
  }
};

const deleteNotification = function (req) {
  try {
    return Notification.findByIdAndDelete(req.params.id);
  } catch (e) {
    return e;
  }
};

module.exports = {
  getNotification,
  saveNotification,
  updateNotification,
  deleteNotification,
  getNotificationById,
};
