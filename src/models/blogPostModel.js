const db = require("../db.js");

const BlogPost = function(blogPost) {
  this.email = blogPost.email;
  this.name = blogPost.name;
  this.active = blogPost.active;
};

BlogPost.create = (newBlogPost, result) => {
  db.query("INSERT INTO blogPost SET ?", newBlogPost, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created blogPost: ", { id: res.insertId, ...newBlogPost });
    result(null, { id: res.insertId, ...newBlogPost });
  });
};

BlogPost.findById = (blogPostId, result) => {
  db.query(`SELECT * FROM blogPost WHERE id = ${blogPostId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found blogPost: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

BlogPost.getAll = result => {
  db.query("SELECT * FROM blogPost", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("blogPost: ", res);
    result(null, res);
  });
};

BlogPost.updateById = (id, blogPost, result) => {
  db.query(
    "UPDATE blogPost SET userId = ?, title = ?, content = ? WHERE id = ?",
    [blogPost.userId, blogPost.title, blogPost.content, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated blogPost: ", { id: id, ...blogPost });
      result(null, { id: id, ...blogPost });
    }
  );
};

BlogPost.remove = (id, result) => {
  db.query("DELETE FROM blogPost WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted blogPost with id: ", id);
    result(null, res);
  });
};

module.exports = BlogPost;