const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requied: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      //   trim: true
    },
    dob: { type: Date, required: true },
    password: {
      type: String,
      required: true,
    },
  },
  { Timestamps: true },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
