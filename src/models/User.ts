import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  role: string; // Add role field
}

const UserSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user' }, // Default role is 'user'
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;