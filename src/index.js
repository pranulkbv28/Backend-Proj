// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

// this is another way to start up the project
/*
;( async () => {
    try {
        await mongoose.connect(`${process.env.MOGODB_URI}/${DB_NAME}`);
    } catch (error) {
        console.log("ERROR: ", error);
    }
})()
*/
