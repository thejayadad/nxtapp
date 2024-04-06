import mongoose from "mongoose";

const RideSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
  },
  description: String,
  doors: Number,
  mpg: Number,
  features: {
    type: [String],
  },
  notes: String,
  ridePhotos: {
    type: [String],
  },
  location: String,
  tag: {
    type: String,
  },
  likes: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    default: [],
  },
  checkIn: Number,
  checkOut: Number,
  maxSeats: Number,
  price: Number,
  bookings: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  
  
})

const Ride = mongoose.models.Ride || mongoose.model("Ride", RideSchema);

export default Ride;