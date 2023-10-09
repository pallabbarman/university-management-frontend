'use client';

import loginImage from '@/assets/login.png';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { useUserLoginMutation } from '@/redux/features/auth';
import { storeUserInfo } from '@/services/auth';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import { SubmitHandler } from 'react-hook-form';

interface LoginPageProps {
    id: string;
    password: string;
}

const LoginPage = () => {
    const [userLogin] = useUserLoginMutation();
    const onSubmit: SubmitHandler<LoginPageProps> = async (data) => {
        try {
            const res = await userLogin({ ...data }).unwrap();
            storeUserInfo({ accessToken: res?.data?.accessToken });
            console.log(res);
        } catch (err) {}
    };

    return (
        <Row
            justify="center"
            align="middle"
            style={{
                minHeight: '100vh',
            }}
        >
            <Col sm={12} md={14} lg={10}>
                <Image
                    src={loginImage}
                    width={500}
                    alt="login image"
                    layout="responsive"
                />
            </Col>
            <Col sm={12} md={10} lg={8}>
                <h1
                    style={{
                        margin: '15px 0px',
                    }}
                >
                    Login your account
                </h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput
                                name="id"
                                type="text"
                                size="large"
                                label="Id"
                                placeholder="Enter your Id"
                            />
                        </div>
                        <div
                            style={{
                                margin: '15px 0px',
                            }}
                        >
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="Password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <Button type="primary" htmlType="submit" block>
                            Login
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default LoginPage;
