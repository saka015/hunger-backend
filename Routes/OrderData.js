// import express from "express";
// const router = express.Router();

// import Order from "../models/Orders.js";

// router.post("/orderData", async (req, res) => {
//   let data = req.body.order_data;
//   await data.slice(0, 0, { Order_date: req.body.order_date });

//   //   if email not existing in db then create :else InsertMany()
//   let eId = await Order.findOne({ email: req.body.email });
//   console.log(eId);

//   if (eId === null) {
//     try {
//       await Order.create({
//         email: req.body.email,
//         order_data: [data],
//       }).then(() => {
//         res.json({ success: true });
//       });
//     } catch (error) {
//       console.log(error.message);
//       res.send("Server Error", error.message);
//     }
//   } else {
//     try {
//       await Order.findOneAndUpdate(
//         { email: req.body.email },
//         { $push: { order_data: data } }
//       ).then(() => {
//         res.json({ success: true });
//       });
//     } catch (error) {
//       res.send("Server Send", error.message);
//     }
//   }
// });

// export default router;

// code--------------------------------------2

// import express from "express";
// const router = express.Router();

// import Order from "../models/Orders.js";

// router.post("/orderData", async (req, res) => {
//   let data = req.body.order_data;
//   data.Order_date = req.body.order_date;

//   //   if email not existing in db then create :else InsertMany()
//   let eId = await Order.findOne({ email: req.body.email });

//   if (eId === null) {
//     try {
//       await Order.create({
//         email: req.body.email,
//         order_data: [data],
//       });
//       res.json({ success: true });
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).send("Server Error");
//     }
//   } else {
//     try {
//       await Order.findOneAndUpdate(
//         { email: req.body.email },
//         { $push: { order_data: data } }
//       );
//       res.json({ success: true });
//     } catch (error) {
//       res.status(500).send("Server Error");
//     }
//   }
// });

// router.post("/myorderData", async (req, res) => {
//   try {
//     let myData = await Order.findOne({ email: req.body.email });
//     res.json({ orderData: myData });
//   } catch (error) {
//     res.send("Server Error", error.message);
//   }
// });

// export default router;

// code-----------------------3

// import express from "express";
// const router = express.Router();

// import Order from "../models/Orders.js";

// router.post("/orderData", async (req, res) => {
//   try {
//     let data = req.body.order_data;
//     let orderDate = req.body.order_date;

//     // if (!data || typeof data !== "object") {
//     //   return res.status(400).json({ error: "Invalid order_data format" });
//     // }

//     // if (!orderDate) {
//     //   return res.status(400).json({ error: "order_date is required" });
//     // }

//     data.Order_date = orderDate;

//     let eId = await Order.findOne({ email: req.body.email });

//     if (eId === null) {
//       await Order.create({
//         email: req.body.email,
//         order_data: [data],
//       });
//       res.json({ success: true });
//     } else {
//       await Order.findOneAndUpdate(
//         { email: req.body.email },
//         { $push: { order_data: data } }
//       );
//       res.json({ success: true });
//     }
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// });

// router.post("/myorderData", async (req, res) => {
//   try {
//     let myData = await Order.findOne({ email: req.body.email });
//     res.json({ orderData: myData });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server Error");
//   }
// });

// export default router;

// router.post("/myorderData", async (req, res) => {
//   try {
//     let myData = await Order.findOne({ email: req.body.email });
//     res.json(myData ? myData.order_data : []); // Send the order_data array directly
//   } catch (error) {
//     res.status(500).send("Server Error");
//   }
// });



import express from "express";
const router = express.Router();

import Order from "../models/Orders.js";

router.post("/orderData", async (req, res) => {
  let data = req.body.order_data;
  data.Order_date = req.body.order_date;

  //   if email not existing in db then create :else InsertMany()
  let eId = await Order.findOne({ email: req.body.email });

  if (eId === null) {
    try {
      await Order.create({
        email: req.body.email,
        order_data: [data],
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error: Unable to create order");
    }
  } else {
    try {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      );
      res.json({ success: true });
    } catch (error) {
      res.status(500).send("Server Error: Unable to update order");
    }
  }
});

router.post("/myorderData", async (req, res) => {
  try {
    let myData = await Order.findOne({ email: req.body.email });
    res.json({ orderData: myData });
  } catch (error) {
    res.status(500).send("Server Error: Unable to retrieve order data");
  }
});

export default router;
