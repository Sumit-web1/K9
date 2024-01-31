require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDB = require("./utils/database");

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", router);

const PORT = 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at Port: ${PORT}`);
    });
});
