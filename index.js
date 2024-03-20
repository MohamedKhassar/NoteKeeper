const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const app = express();
require("./connection/db");

app.use(bodyParser.json());
app.use("/api/notes", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
