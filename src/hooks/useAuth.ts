import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<{
        username: any; id: string; role: string 
} | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId');

        if (token && userId) {
            setIsAuthenticated(true);
            setUser({
                username: localStorage.getItem('username') || '',
                id: userId,
                role: localStorage.getItem('userRole') || 'user'
            });
        } else {
            setIsAuthenticated(false);
            setUser(null);
        }
    }, [router]);

    const login = async (username: string, password: string) => {
        try {
            const response = await fetch('/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('userId', data.user.id);
                localStorage.setItem('userRole', data.user.role);
                localStorage.setItem('username', data.user.username);
                setIsAuthenticated(true);
                setUser({
                    username: data.user.username,
                    id: data.user.id,
                    role: data.user.role
                });
            } else {
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login. Please try again.');
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userRole');
        setIsAuthenticated(false);
        setUser(null);
        router.push('/signin');
    };

    return { isAuthenticated, user, login, logout };
};

export default useAuth;