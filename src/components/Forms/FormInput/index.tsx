'use client';

import { Col, Input, Row } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

interface FormInputProps {
    name: string;
    type?: string;
    size?: 'large' | 'small';
    value?: string | string[] | undefined;
    id?: string;
    placeholder?: string;
    validation?: object;
    label?: string;
}

const FormInput = ({
    name,
    type,
    size,
    value,
    id,
    placeholder,
    validation,
    label,
}: FormInputProps) => {
    const { control } = useFormContext();

    return (
        <Row style={{ flexDirection: 'column' }} gutter={[8, 8]}>
            <Col>{label ? label : null}</Col>
            <Col>
                <Controller
                    control={control}
                    name={name}
                    render={({ field }) =>
                        type === 'password' ? (
                            <Input.Password
                                type={type}
                                size={size}
                                placeholder={placeholder}
                                {...field}
                                value={value ? value : field.value}
                            />
                        ) : (
                            <Input
                                type={type}
                                size={size}
                                placeholder={placeholder}
                                {...field}
                                value={value ? value : field.value}
                            />
                        )
                    }
                />
            </Col>
        </Row>
    );
};

export default FormInput;
