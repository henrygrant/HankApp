const express = require('express')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain)

require("./routes/userRoutes.js")(app)
require("./routes/blogPostRoutes.js")(app)
require("./routes/authRoutes.js")(app)

const port = 3000

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
