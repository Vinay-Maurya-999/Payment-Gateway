import app from "./src/App.js";
import connectDB from "./src/config/db.js";

await connectDB();

app.listen(3000, () => {
  console.log("Server is starting at 3000");
});
