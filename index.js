const mongoose=require("mongoose")
const express = require("express");
const app = express();
app.use(express.json());
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const session = require("express-session");
const passport = require("passport");
app.use(
  session({
    secret: process.env.token,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

require('./controllers/passport')
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT;
const uri = process.env.URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Error connecting to database: ", error);
  });
app.use("/users", userRouter);
app.use("/blogpassort", postRouter);

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
