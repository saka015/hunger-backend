// import express from "express";
// const router = express.Router();

// router.post("/foodData", (req, res) => {
//   try {
//     res.send([global.foodapp,global.foodCategory]);
//   } catch (error) {
//     console.error(error.message);
//     res.send("Server error");
//   }
// });

// export default router;

// bard

import express from "express";

const router = express.Router();

router.post("/foodData", async (req, res) => {
  try {
    const { foodapp, foodCategory } = global;
    res.send([foodapp, foodCategory]);
  } catch (error) {
    console.error(error.message);
    res.send("Server error");
  }
});

export default router;
