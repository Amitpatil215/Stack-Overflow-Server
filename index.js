const express = require("express");

const app = express();

//? routs
app.get("/", (req, res) => {
  res.send("Hey there stack overflow!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running at ${port}`));
