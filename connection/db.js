const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://mohamedkhassar775:Medkh2638@cluster0.5ckr73z.mongodb.net/notes_app");
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", () => {
  console.error("Error connecting to MongoDB: ");
});
