import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';
import User from '../../../models/User';

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ username: params.userId }).select('-password'); // Exclude password field

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error fetching user details:', error);
    return NextResponse.json({ message: 'An error occurred while fetching user details.' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const { fullName, email, phone, address } = await req.json();
    await connectToDatabase();

    const user = await User.findOneAndUpdate(
      { username: params.userId },
      { fullName, email, phone, address },
      { new: true }
    ).select('-password'); // Exclude password field

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error updating user details:', error);
    return NextResponse.json({ message: 'An error occurred while updating user details.' }, { status: 500 });
  }
}