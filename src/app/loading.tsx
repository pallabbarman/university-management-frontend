import { Row, Spin } from 'antd';

const Loading = () => {
    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Spin size="large"></Spin>
        </Row>
    );
};

export default Loading;
