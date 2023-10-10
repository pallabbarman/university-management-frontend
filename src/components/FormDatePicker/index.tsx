import { Col, DatePicker, DatePickerProps, Row } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { Controller, useFormContext } from 'react-hook-form';

type UMDatePikerProps = {
    onChange?: (valOne: Dayjs | null, valTwo: string) => void;
    name: string;
    label?: string;
    value?: Dayjs;
    size?: 'large' | 'small';
};

const FormDatePicker = ({
    name,
    label,
    onChange,
    size = 'large',
}: UMDatePikerProps) => {
    const { control, setValue } = useFormContext();

    const handleOnChange: DatePickerProps['onChange'] = (date, dateString) => {
        onChange ? onChange(date, dateString) : null;
        setValue(name, dateString);
    };

    return (
        <Row style={{ flexDirection: 'column' }} gutter={[8, 8]}>
            <Col>{label ? label : null}</Col>
            <Col>
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <DatePicker
                            value={dayjs(field.value) || ''}
                            size={size}
                            onChange={handleOnChange}
                            style={{ width: '100%' }}
                        />
                    )}
                />
            </Col>
        </Row>
    );
};

export default FormDatePicker;
