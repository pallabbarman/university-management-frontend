import Login from '@/components/Login';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'UM | Login',
    description: 'This is university management system',
};

const LoginPage = () => {
    return <Login />;
};

export default LoginPage;
