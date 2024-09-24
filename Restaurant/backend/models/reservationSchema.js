import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain at least three characters"],
    maxLength: [30, "First name cannot exceed thirty characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain at least three characters"],
    maxLength: [30, "Last name cannot exceed thirty characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^[0-9]{11}$/.test(v),
      message: "Phone number must contain exactly 11 digits.",
    },
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
