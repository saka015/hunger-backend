// // index.js
// import express from "express";
// import connect from "./db.js";
// import createUserRouter from "./Routes/CreateUser.js";
// import displayData from "./Routes/DisplayData.js";

// const app = express();

// // Call the connect function to establish a connection to the database
// connect();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept"
//   );
//   next();
// });

// app.use(express.json());
// app.use("/api", createUserRouter);
// app.use("/api", displayData);

// app.listen(5000, () => {
//   console.log("Server is Working");
// });

// bard

import express from "express";
import connect from "./db.js";
import createUserRouter from "./Routes/CreateUser.js";
import displayData from "./Routes/DisplayData.js";
import orderData from "./Routes/OrderData.js";

const PORT = process.env.PORT || 5000;

const app = express();

// Call the connect function to establish a connection to the database
connect();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api", createUserRouter);
app.use("/api", displayData);
app.use("/api", orderData);

app.listen(PORT, () => {
  console.log("Server is Working");
});
