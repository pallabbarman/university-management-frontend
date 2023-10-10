'use client';

import { Layout, theme } from 'antd';
import { ReactNode } from 'react';
import Header from '../Header';

const { Content } = Layout;

interface ContentsProps {
    children: ReactNode;
}

const Contents = ({ children }: ContentsProps) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Content
            style={{ minHeight: '100vh', color: 'black', margin: '0 1rem' }}
        >
            <Header />
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
