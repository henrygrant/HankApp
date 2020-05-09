const express = require('express');
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/userRoutes.js")(app);
require("./routes/blogPostRoutes.js")(app);

const port = 3000

app.get('/', (req, res) => res.json({message: 'Hello!'}))


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))