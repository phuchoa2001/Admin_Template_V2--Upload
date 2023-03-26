import { Image } from 'antd';

function useColumns() {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            align: 'center',
            key: 'index',
            render: (_, values, index) => (
                <div data-label="STT">{index + 1}</div>
            )
        },
        {
            title: 'Chiều rộng / Chiều cao',
            dataIndex: 'width',
            align: 'center',
            key: 'width',
            render: (_, values) => (
                <div data-label="width">W:{values.width}/H{values.height}</div>
            )
        },
        {
            title: 'Public_id',
            dataIndex: 'public_id',
            align: 'center',
            key: 'Public_id',
            render: (_, values) => (
                <div data-label="Public_id">{values.public_id}</div>
            )
        },
        {
            title: 'Định dạng',
            dataIndex: 'format',
            align: 'center',
            key: 'format',
            render: (_, values) => (
                <div data-label="format">{values.format}</div>
            )
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'url',
            align: 'center',
            key: 'url',
            render: (_, values) => (
                <div data-label={"url"}>
                    <Image
                        preview={true}
                        src={values.url}
                        width={100}
                    />
                </div>
            )
        },
    ];
    return { columns }
}

export default useColumns