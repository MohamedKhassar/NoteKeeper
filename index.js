const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const swaggerUi = require("swagger-ui-express");
const app = express();
require("./connection/db");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yml");

app.use(bodyParser.json());
app.use("/api/notes", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = { app, server };
