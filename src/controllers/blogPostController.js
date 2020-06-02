const BlogPost = require("../models/blogPostModel.js");
const User = require("../models/userModel.js");

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const blogPost = new BlogPost({
        userId: req.body.userId,
        content: req.body.content
    });

    BlogPost.create(blogPost, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the BlogPost."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    BlogPost.getAll((err, blogData) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving BlogPosts."
            });
        else {
            User.getAll((err, userData) => {
                if(err) {
                    res.status(500).send({
                        message: "Error retrieving Users"
                    });
                } else {
                    blogData.forEach(B => B.user = userData.find(U => U.id === B.userId))
                    res.send(blogData)
                }
            })
        }
    });
};

exports.findOne = (req, res) => {
    BlogPost.findById(req.body.id, (err, blogData) => {
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
        } else {
            User.findById(D.userId, (err, userData) => {
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
                } else {
                    blogData.user = userData
                    res.send(blogData);
                }
            })
        }
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
