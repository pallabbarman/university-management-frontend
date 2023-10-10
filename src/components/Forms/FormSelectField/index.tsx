'use client';

import { Col, Row, Select } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

type SelectOptions = {
    label: string;
    value: string;
};

type SelectFieldProps = {
    options: SelectOptions[];
    name: string;
    size?: 'large' | 'small';
    value?: string | string[] | undefined;
    placeholder?: string;
    label?: string;
    defaultValue?: SelectOptions;
};

const FormSelectField = ({
    name,
    size = 'large',
    value,
    placeholder = 'select',
    options,
    label,
}: SelectFieldProps) => {
    const { control } = useFormContext();

    return (
        <Row style={{ flexDirection: 'column' }} gutter={[8, 8]}>
            <Col>{label ? label : null}</Col>
            <Col>
                <Controller
                    control={control}
                    name={name}
                    render={({ field: { value, onChange } }) => (
                        <Select
                            onChange={onChange}
                            size={size}
                            options={options}
                            value={value}
                            style={{ width: '100%' }}
                            placeholder={placeholder}
                        />
                    )}
                />
            </Col>
        </Row>
    );
};

export default FormSelectField;
