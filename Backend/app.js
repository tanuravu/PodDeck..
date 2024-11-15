const express = require('express');
const app = express();
const cookieParser=require("cookie-parser");
const userApi = require("./routes/user"); 
const catApi = require("./routes/category"); 
const PodcastApi = require("./routes/podcast");
require("dotenv").config();
require("./connection/connection");
app.use(cookieParser());
app.use(express.json());






// all routes
app.use("/api/v1", userApi);
app.use("/api/v1", catApi);
app.use("/api/v1/",PodcastApi);





app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
});
