const express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors")

const { initializeDBConnection } = require("./db/initializeDBConnection");
const { routeNotFound } = require("./middlewares/routeNotFound");

const app = express();

app.use(bodyParser.json());
app.use(cors())

//DO NOT MOVE, needs to be at top to establish connection before any functions execute
initializeDBConnection();

const videosRouter = require("./routes/videos.router")
app.use("/videos", videosRouter)

app.get('/', (req, res) => {
  res.send('Welcome to NFTask!')
});

//DO NOT MOVE, needs to be at the end to catch all routes that are not being handled by server
app.use(routeNotFound)

app.listen(3000, () => {
  console.log('server started');
});