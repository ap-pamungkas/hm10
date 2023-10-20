const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const PORT =  process.env.PORT;

const bodyParser = require('body-parser');
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny"));
const usersRouter = require('./routers/users');
const moviesRouter = require('./routers/movies');
 


app.use(bodyParser.json());

const path = require('path');
app.use(moviesRouter);
app.use(usersRouter);



app.get('/test', (req, res)=>{
 res.json({
    massage:"test passed"
 });
 
});
app.listen(PORT, () => {
  console.log(`app running at port ${PORT}`);
});
