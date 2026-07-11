import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ritupermani:Ritukukreja123@food-del.7g2q9jm.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
