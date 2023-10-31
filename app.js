require("dotenv").config();
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;
const books = require("./routes/book");

app.use(express.json());
app.use("/api/book", books);
app.use(cors())

const startDB = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

startDB();
