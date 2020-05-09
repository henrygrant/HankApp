module.exports = app => {
  const blogPosts = require("../controllers/blogPostController.js");
  app.post("/blogPosts", blogPosts.create);
  app.get("/blogPosts", blogPosts.findAll);
  app.get("/blogPosts/:id", blogPosts.findOne);
  app.put("/blogPosts/:id", blogPosts.update);
  app.delete("/blogPosts/:id", blogPosts.delete);
}