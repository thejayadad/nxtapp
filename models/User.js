import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    uinque: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    required: true,
  },
  rides: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ride" }],
    default: [],
  },
  savedRides: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ride" }],
    default: [],
  },
  bookings: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;