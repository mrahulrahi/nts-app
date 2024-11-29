import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
    images: [String],
    title: String,
    body: String,
    price: Number,
    location: String,
    seat: Number,
    distance: Number,
    type: String
});

const Tour = mongoose.model("Tour", TourSchema);

export default Tour;
