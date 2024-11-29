import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    imgUrl: String, 
    title: String, 
    type: String, 
    capacity: String, 
    rate: Number
}); 

const Car = mongoose.model("Car", CarSchema);

export default Car;