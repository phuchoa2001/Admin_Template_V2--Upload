import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Result } from 'antd';

const Link404 = () => {
    const { push } = useHistory();
    return (
        <Result
            status="404"
            title="404"
            subTitle="xin lỗi không có trang này"
            extra={<Button type="primary" onClick={() => push("/")}>Back Home</Button>}
        />
    )
}
export default Link404;