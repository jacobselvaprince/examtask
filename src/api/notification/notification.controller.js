const service = require("./notification.service");

// To get all the record from notification collection
const getNotification = async function (req, res) {
  try {
    var notification = await service.getNotification();
    res.status(200).send(notification);
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

// To save a record into notification collection
const saveNotification = async function (req, res) {
  try {
    await service.saveNotification(req);
    res.status(201).send("Notification Send Succesfully");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

// To update a record into notification collection
const updateNotification = async function (req, res) {
  try {
    await service.updateNotification(req);
    res.status(201).send("Notification updated Succesfully");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

// To delete record into notification collection
const deleteNotification = async function (req, res) {
  try {
    await service.deleteNotification(req);
    res.status(200).send("Question Deleted Succesfully");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getNotification,
  saveNotification,
  updateNotification,
  deleteNotification,
};
