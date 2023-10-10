'use client';

import Contents from '@/components/ui/Contents';
import Sidebar from '@/components/ui/Sidebar';
import { isLoggedIn } from '@/services/auth';
import { Layout, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const isUserLoggedIn = isLoggedIn();

    useEffect(() => {
        if (!isUserLoggedIn) {
            router.push('/login');
        }
        setLoading(true);
    }, [isUserLoggedIn, router]);

    if (!loading) {
        return <Spin size="large" />;
    }

    return (
        <Layout hasSider>
            <Sidebar />
            <Contents>{children}</Contents>
        </Layout>
    );
};

export default DashboardLayout;
