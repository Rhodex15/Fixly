import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minLength: 10 },
    role: {
        type: String,
        required: true,
        enum: ["house_owner", "artisan", "admin"],
        default: "house_owner",
    },
   
},
{

    timestamps: true,
},
);

const User = mongoose.model("User", userSchema);
export default User;