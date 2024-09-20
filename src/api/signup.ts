import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import {connectToDatabase} from '../lib/db';
import User from '../models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await connectToDatabase();
    const { fullName, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully!' });
  } else {
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
