'use client';
import React, { ReactNode } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

interface ContentsProps {
    children: ReactNode;
}

const Contents = ({ children }: ContentsProps) => {
    return (
        <Content style={{ minHeight: '100vh', color: 'black' }}>
            {children}
        </Content>
    );
};

export default Contents;
