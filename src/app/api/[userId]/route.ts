import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';
import User from '../../../models/User';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params; // Extract userId from resolved params
  try {
    await connectToDatabase();

    const user = await User.findOne({ username: userId }).select('-password'); // Use userId for the query

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error fetching user details:', error);
    return NextResponse.json({ message: 'An error occurred while fetching user details.' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
  try {
    const { fullName, email, phone, address } = await req.json();
    const { userId } = await params; // Extract userId from resolved params
    await connectToDatabase();

    const user = await User.findOneAndUpdate(
      { username: userId },
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