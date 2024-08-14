import mongoose  from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://thoratprathmesh:MongoDBpratu@cluster0.jplio8z.mongodb.net/FoodDeliveryApp').then(()=>console.log("DB Connected"));
}