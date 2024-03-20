const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/notes_app");
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", () => {
  console.error("Error connecting to MongoDB: ");
});
