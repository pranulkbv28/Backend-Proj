// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!", err);
  });

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
