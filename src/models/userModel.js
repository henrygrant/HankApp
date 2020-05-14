const db = require("../db.js");

const User = function (user) {
    this.email = user.email;
    this.name = user.name;
    this.active = user.active;
};

User.create = (newUser, result) => {
    db.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created user: ", {id: res.insertId, ...newUser});
        result(null, {id: res.insertId, ...newUser});
    });
};

User.findById = (userId, result) => {
    db.query(`SELECT * FROM user WHERE id = ${userId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

User.findByUsername = (username, result) => {
    db.query(`SELECT * FROM user WHERE username = '${username}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);
    });
};

User.getAll = result => {
    db.query("SELECT * FROM user", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("user: ", res);
        result(null, res);
    });
};

User.updateById = (id, user, result) => {
    db.query(
        "UPDATE user SET username = ? WHERE id = ?",
        [user.username, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({kind: "not_found"}, null);
                return;
            }

            console.log("updated user: ", {id: id, ...user});
            result(null, {id: id, ...user});
        }
    );
};

User.remove = (id, result) => {
    db.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({kind: "not_found"}, null);
            return;
        }

        console.log("deleted user with id: ", id);
        result(null, res);
    });
};

module.exports = User;