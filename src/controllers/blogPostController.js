const BlogPost = require("../models/blogPostModel.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const customer = new BlogPost({
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content
    });

    BlogPost.create(customer, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the BlogPost."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    BlogPost.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving BlogPosts."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    BlogPost.findById(req.body.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Couldn't find BlogPost with id ${req.body.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving BlogPost with id " + req.body.id
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

    BlogPost.updateById(
        req.body.id,
        new BlogPost(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Couldn't find BlogPost with id ${req.body.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating BlogPost with id " + req.body.id
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    BlogPost.removeById(req.body.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found BlogPost with id ${req.body.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete BlogPost with id " + req.body.id
                });
            }
        } else res.send({message: `BlogPost was deleted successfully!`});
    });
};
