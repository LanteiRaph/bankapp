import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  acId: {
    type: Number,
    required: true,
    unique: true
  },
  balance: {
    type: Number
  },
  acNm: {
    type: String,
    required: true
  }
})

export const Accounts = mongoose.model('Accounts',AccountSchema);