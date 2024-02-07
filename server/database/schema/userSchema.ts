import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  password: string;
  email: string;
  friends?: string[];
}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  friends: {
    type: [String],
    required: false,
  },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;