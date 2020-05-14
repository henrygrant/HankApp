const User = require("../models/userModel.js")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtConfig = require("../config/jwtConfig.js");


exports.register = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    User.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    }, (err, data) => {
        if (err) {
            res.status(500).send({
                message: `Error registering user ${req.body.username}`
            })
        } else {
            let token = jwt.sign({id: data.id}, jwtConfig.secret, {expiresIn: 86400}) // exp in 24h
            res.status(200).send({
                auth: true,
                token: token,
                user: data
            });
        }
    })
}

exports.login = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
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
            if (bcrypt.compareSync(req.body.password, data.password )) {
                res.status(200).send(data)
            } else {
                res.status(401).send({
                    message: "Incorrect password"
                })
            }
        }
    })
}

