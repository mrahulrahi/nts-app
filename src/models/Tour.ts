import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
    img: String,
    title: String,
    duration: String,
    price: Number,
    location: String,
    seat: Number,
    distance: Number,
    type: String
});

const Tour = mongoose.model("Tour", TourSchema);

export default Tour;
