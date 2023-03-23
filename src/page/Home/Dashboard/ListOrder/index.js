import React from 'react';
import { Spin, Image } from 'antd';
//  Data
import TableData from '../../../../components/TableData';

function ListOrder(props) {

    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="Tên">{values.name}</div>
            )
        },
        {
            title: 'Đường dẫn',
            dataIndex: 'url',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="Đường dẫn">{values.url}</div>
            )
        },
        {
            title: 'Github',
            dataIndex: 'github',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="github">{values.github}</div>
            )
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="Hình Ảnh">
                    <Image src={values.image.url} alt="" className="image" width={100} preview={true} />
                </div>
            )
        },
        {
            title: 'Biểu tượng',
            dataIndex: 'icon',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="Biểu tượng" className="image">
                    <Image src={values.icon.url} alt="" width={100} />
                </div>
            )
        },
    ];

    return (
        <>
            < TableData
                rowKey="_id"
                columns={columns}
                dataSource={[]}
                // loading={isPreviousData && isFetching}
                hideButton={true}
            // pagination={{
            //     current: search.page,
            //     position: ['bottomCenter'],
            //     pageSize,
            //     total: data.data.meta.total
            // }}
            />
        </>
    );
}

export default ListOrder;