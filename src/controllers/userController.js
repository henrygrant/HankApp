const User = require("../models/userModel.js");
const jwt = require('jsonwebtoken')

exports.register = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
}

exports.login = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  User.findByUsername(req.body.username, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Couldn't find User with id ${req.body.username}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.body.username
        });
      }
    } else {
      return data
    }
  })
}

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  User.findById(req.body.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Couldn't find User with id ${req.body.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.body.id
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  User.updateById(
    req.body.id,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Couldn't find User with id ${req.body.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.body.id
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  User.remove(req.body.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.body.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with id " + req.body.id
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

