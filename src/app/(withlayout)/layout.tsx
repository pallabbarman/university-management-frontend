import Contents from '@/components/ui/Contents';
import Sidebar from '@/components/ui/Sidebar';
import { Layout } from 'antd';
import { ReactNode } from 'react';

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
