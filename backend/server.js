const express = require("express");

const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();


const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const post = require("./routes/post");

app.use("/api/users", post);
app.listen(process.env.PORT || 5000, () => {
    console.log("Server Running");
});