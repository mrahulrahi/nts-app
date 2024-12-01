import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db'; 
import Tour from '../../../models/Tour';

export async function GET() {
  try {
    await connectToDatabase();
    const tours = await Tour.find();
    return NextResponse.json(tours, { status: 200 });
  } catch (error) {
    console.error('Error fetching tours:', error);
    return NextResponse.json({ message: 'An error occurred while fetching tours.' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { img, title, duration, price, location, seat, distance, type } = await req.json();
    await connectToDatabase();
    const newTour = new Tour({ img, title, duration, price, location, seat, distance, type });
    await newTour.save();
    return NextResponse.json(newTour, { status: 201 });
  } catch (error) {
    console.error('Error creating tour:', error);
    return NextResponse.json({ message: 'An error occurred while creating the tour.' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, img, title, duration, price, location, seat, distance, type } = await req.json();
    await connectToDatabase();
    const updatedTour = await Tour.findByIdAndUpdate(id, { img, title, duration, price, location, seat, distance, type }, { new: true });
    if (!updatedTour) {
      return NextResponse.json({ message: 'Tour not found' }, { status: 404 });
    }
    return NextResponse.json(updatedTour, { status: 200 });
  } catch (error) {
    console.error('Error updating tour:', error);
    return NextResponse.json({ message: 'An error occurred while updating the tour.' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await connectToDatabase();
    const deletedTour = await Tour.findByIdAndDelete(id);
    if (!deletedTour) {
      return NextResponse.json({ message: 'Tour not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Tour deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting tour:', error);
    return NextResponse.json({ message: 'An error occurred while deleting the tour.' }, { status: 500 });
  }
}
