const service = require("./users.service");
const bcrypt = require("bcrypt");

// To get all the record from user collection
const getUsers = async function (req, res) {
  try {
    var users = await service.getUsers();
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

// To save a record into user collection
const saveUser = async function (req, res) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    await service.saveUser(req);
    res.status(201).send("User Record Saved Succesfully");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

// To update a record in user collection
const updateUser = async function (req, res) {
  try {
    await service.updateUser(req);
    res.status(201).send("User Record updated Succesfully");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

// To delete a record in user collection
const deleteUser = async function (req, res) {
  try {
    await service.deleteUser(req);
    res.status(200).send("User Record Deleted Succesfully");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getUsers,
  saveUser,
  updateUser,
  deleteUser,
};
