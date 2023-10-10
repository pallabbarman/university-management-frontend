'use client';

import { Button, Result, Row } from 'antd';
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
                extra={
                    <Link href="/">
                        <Button type="primary">Back Home</Button>
                    </Link>
                }
            />
        </Row>
    );
};

export default ErrorPage;
