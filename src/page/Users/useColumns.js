function useColumns() {
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'username',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="Tên">{values.username}</div>
            )
        },
        {
            title: 'Quyền',
            dataIndex: 'permission',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="Quyền">{values.permission}</div>
            )
        },
        {
            title: 'Email',
            dataIndex: 'email',
            align: 'center',
            render: (_, values, index) => (
                <div data-label="Email">{values.email}</div>
            )
        }
    ];
    return { columns }
}

export default useColumns