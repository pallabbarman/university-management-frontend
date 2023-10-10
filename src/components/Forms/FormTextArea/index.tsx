import { Col, Input, Row } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

type TextAreaProps = {
    name: string;
    label?: string;
    rows?: number;
    value?: string;
    placeholder?: string;
};

const FormTextArea = ({
    name,
    label,
    rows,
    value,
    placeholder,
}: TextAreaProps) => {
    const { control } = useFormContext();
    return (
        <Row style={{ flexDirection: 'column' }} gutter={[8, 8]}>
            <Col>{label ? label : null}</Col>
            <Col>
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Input.TextArea
                            rows={rows}
                            placeholder={placeholder}
                            {...field}
                            defaultValue={value}
                        />
                    )}
                />
            </Col>
        </Row>
    );
};

export default FormTextArea;
