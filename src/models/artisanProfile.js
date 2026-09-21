// Id(PK), user_id(FK), skills, experience_years, rating, price_range, location_lat, location_lng, verified, created_at

import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: "User",
    },
    professional_headline: { type: String, required: true },
    profession: {
      type: String,
      required: true,
      enum: [
        "Carpenter",
        "Plumber",
        "Welder",
        "Brick Layer",
        "Electrician",
        "Auto Mechanic",
        "Painter",
        "Others",
      ],
    },
    experience_years: { type: Number, required: true },
    rating: { type: [Number] },
    phone_number: { type: String, required: true },
    starting_price: { type: Number, required: true },
    residential_address: { type: String, required: true },
    office_address: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
