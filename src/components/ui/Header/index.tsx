import { Avatar, Button, Dropdown, Layout, MenuProps, Row } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { logOut } from '@/services/auth';
import { authKey } from '@/constants/storage';
import { useRouter } from 'next/navigation';

const { Header: AntHeader } = Layout;

const Header = () => {
    const router = useRouter();

    const handleLogout = () => {
        logOut(authKey);
        router.push('/login');
    };

    const items: MenuProps['items'] = [
        {
            key: '0',
            label: (
                <Button type="text" danger onClick={handleLogout}>
                    Logout
                </Button>
            ),
        },
    ];

    return (
        <AntHeader style={{ background: '#fff' }}>
            <Row justify="end" align="middle" style={{ height: '100%' }}>
                <Dropdown menu={{ items }}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
            </Row>
        </AntHeader>
    );
};

export default Header;
