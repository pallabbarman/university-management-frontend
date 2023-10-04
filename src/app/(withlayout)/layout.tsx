import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import Sidebar from '@/components/ui/Sidebar';
import Contents from '@/components/ui/Contents';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <Layout hasSider>
            <Sidebar />
            <Contents>{children}</Contents>
        </Layout>
    );
};

export default DashboardLayout;
