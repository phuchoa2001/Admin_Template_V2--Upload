import React from 'react';
import { Space, Spin , Input} from 'antd';
import { useHistory } from 'react-router-dom';

import TableData from '../../components/TableData';
import useColumns from './useColumns';
import { useCustomSearchParams } from '../../hooks/useCustomSearchParams';
import { useUser, useDeleteUser } from './queries/queries';
import WrapperMaindash from '../../components/WrapperMaindash';
import { CREATE, EDIT } from '../../routes/contant'

const { Search } = Input;

function User(props) {
    const [search, setSearch] = useCustomSearchParams();
    const history = useHistory();
    const argument = {
        params: search,
        options: {
            keepPreviousData: true,
        },
    };
    const { data, isPreviousData, isFetching } = useUser(argument);
    const { mutate } = useDeleteUser(argument);
    const { columns } = useColumns();

    const handleChange = (query) => {
        setSearch({ ...search, page_size: query.pageSize, page: query.current })
    }
    const handleAdd = () => {
        history.push(`/users${CREATE}`)
    }
    const handleEdit = (selectedRowKeys) => {
        history.push(`/users/edit/${selectedRowKeys[0]}`)
    }
    const handleDelete = (selectedRowKeys) => {
        mutate(selectedRowKeys);
    }

    const onSearch = (value) => {
        setSearch({
            ...search ,
            search : value 
        })
    };
    return (
        <WrapperMaindash title={"Danh Sách hình ảnh"}>
            <Space>
                <Search
                    placeholder="Tìm kiếm..."
                    onSearch={onSearch}
                    style={{
                        width: 300,
                    }}
                    defaultValue={search.search}
                />
            </Space>
            {!isPreviousData && !isFetching ?
                < TableData
                    rowKey="_id"
                    columns={columns}
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    dataSource={data.data.data}
                    loading={isPreviousData && isFetching}
                    pagination={{
                        current: search.page,
                        position: ['bottomCenter'],
                        pageSize: search.page_size,
                        total: data.data.total
                    }}
                    onChange={handleChange}
                /> : <Spin />
            }
        </WrapperMaindash>
    );
}

export default User;