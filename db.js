// import mongoose from "mongoose";

// const mongoURI =
//   // "mongodb+srv://saka015:saka123@cluster0.6y2itcv.mongodb.net/mernfoodapp?retryWrites=true&w=majority";
//   "mongodb://saka015:saka123@ac-wpd7haa-shard-00-00.6y2itcv.mongodb.net:27017,ac-wpd7haa-shard-00-01.6y2itcv.mongodb.net:27017,ac-wpd7haa-shard-00-02.6y2itcv.mongodb.net:27017/mernfoodapp?ssl=true&replicaSet=atlas-12tk4y-shard-0&authSource=admin&retryWrites=true&w=majority";

// const connect = async () => {
//   try {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true });
//     console.log("DB connected");

//     const fetched_data = await mongoose.connection.db.collection("foodapp"); // food items

//     fetched_data.find({}).toArray(async function (err, data) {
//       const foodCategory = await mongoose.connection.db.collection(
//         "foodcategory"
//       );

//       foodCategory.find({}).toArray(function (err, catData) {
//         if (err) {
//           console.log(err);
//         } else {
//           global.foodapp = data;
//           global.foodCategory = catData;

//         }
//       })

//       //   console.log(global.foodapp);
//       // }
//     });
//   } catch (e) {
//     console.error("Error connecting to the database:", e.message);
//   }
// };

// export default connect;

// Bard-code

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.DATABASE;

// const mongoURI =
//   "mongodb://saka015:saka123@ac-wpd7haa-shard-00-00.6y2itcv.mongodb.net:27017,ac-wpd7haa-shard-00-01.6y2itcv.mongodb.net:27017,ac-wpd7haa-shard-00-02.6y2itcv.mongodb.net:27017/mernfoodapp?ssl=true&replicaSet=atlas-12tk4y-shard-0&authSource=admin&retryWrites=true&w=majority";
// "mongodb+srv://saka015:saka123@cluster0.6y2itcv.mongodb.net/mernfoodapp?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("DB connected");

    const foodapp = await mongoose.connection.db.collection("foodapp");
    const foodCategory = await mongoose.connection.db.collection(
      "foodcategory"
    );

    const data = await foodapp.find({}).toArray();
    const catData = await foodCategory.find({}).toArray();

    global.foodapp = data;
    global.foodCategory = catData;
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

export default connect;
