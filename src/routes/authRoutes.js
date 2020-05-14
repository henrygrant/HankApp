module.exports = (app) => {
    const auth = require("../controllers/authController.js");

    app.post("/login", auth.login);
    app.post("/register", auth.register);
}