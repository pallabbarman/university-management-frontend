'use client';
import BreadCrumbs from '@/components/BreadCrumbs';
import { USER_ROLE } from '@/constants/role';
import { Layout, theme } from 'antd';
import { ReactNode } from 'react';

const { Content } = Layout;

interface ContentsProps {
    children: ReactNode;
}

const Contents = ({ children }: ContentsProps) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const base = USER_ROLE.ADMIN;

    return (
        <Content
            style={{ minHeight: '100vh', color: 'black', margin: '0 1rem' }}
        >
            <BreadCrumbs
                items={[
                    {
                        label: `${base}`,
                        link: `/${base}`,
                    },
                    {
                        label: 'student',
                        link: `/${base}/student`,
                    },
                ]}
            />
            <div
                style={{
                    padding: 24,
                    minHeight: 360,
                    background: colorBgContainer,
                }}
            >
                {children}
            </div>
        </Content>
    );
};

export default Contents;
