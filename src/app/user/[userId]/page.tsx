// src/app/user/[userId]/page.tsx
import { notFound } from 'next/navigation'; // Use this for better 404 handling
import UserProfile from './UserProfile'; // Import the client component

// Dummy data for demonstration purposes
const users = [
    { id: 'user1', name: 'John Doe', email: 'john@example.com' },
    { id: 'user2', name: 'Jane Doe', email: 'jane@example.com' },
    { id: 'user3', name: 'Alice Smith', email: 'alice@example.com' },
];

// Define the User type
type User = {
    id: string;
    name: string;
    email: string;
};

type Props = {
    params: { userId: string };
};

// Function to generate static paths
export async function generateStaticParams() {
    return users.map((user) => ({
        userId: user.id,
    }));
}

// Fetch user data based on userId
const getUserById = (userId: string): User | null => {
    return users.find((user) => user.id === userId) || null;
};

export default function UserPage({ params }: Props) {
    const user = getUserById(params.userId);

    if (!user) {
        notFound(); // Renders a 404 page
    }

    // Render the client component and pass the user data as a prop
    return <UserProfile user={user} />;
}
