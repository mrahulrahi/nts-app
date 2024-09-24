import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { connectToDatabase } from '../../../lib/db';
import User from '../../../models/User';

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, password } = await req.json();
    console.log('Received signup request:', { fullName, email, password });

    await connectToDatabase();
    console.log('Database connected successfully.');

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists:', email);
      return NextResponse.json({ message: 'User already exists.' }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Password hashed successfully.');

    // Create new user with default role 'user'
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      role: 'user', // Assign default role
    });

    await newUser.save();
    console.log('User registered successfully:', email);
    return NextResponse.json({ message: 'User registered successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error in signup:', error);
    return NextResponse.json({ message: 'An error occurred during registration.' }, { status: 500 });
  }
}