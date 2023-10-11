'use client';

import loginImage from '@/assets/login.png';
import { useUserLoginMutation } from '@/redux/features/auth';
import { storeUserInfo } from '@/services/auth';
import { Button, Col, Row, message } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';
import Form from '../Forms/Form';
import FormInput from '../Forms/FormInput';

interface LoginProps {
    id: string;
    password: string;
}

const Login = () => {
    const [userLogin] = useUserLoginMutation();
    const router = useRouter();
    const onSubmit: SubmitHandler<LoginProps> = async (data) => {
        try {
            const res = await userLogin({ ...data }).unwrap();
            if (res?.accessToken) {
                router.push('/profile');
                message.success('User logged in successfully!');
            }
            storeUserInfo({ accessToken: res?.data?.accessToken });
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

export default Login;
