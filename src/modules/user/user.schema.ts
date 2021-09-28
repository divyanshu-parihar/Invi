import mongoose from "mongoose";
export interface UserType extends mongoose.Document {
  id: number;
  name: string;
  current: boolean;
  vc: "String" | undefined;
}

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  current: {
    type: Boolean,
    required: true,
  },
  vc: {
    type: Boolean,
    required: true,
  },
});

const User = mongoose.model<UserType>("User", UserSchema);
export default User;
