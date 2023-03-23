import axiosClient from './axiosClient';

export const userApi = {
    getAll(params) {
        return axiosClient.get("users", { params });
    },
    getId(id) {
        return axiosClient.get(`users/${id}`);
    },
    add(data) {
        return axiosClient.post("register", data);
    },
    put({ data, id }) {
        return axiosClient.put(`users/${id}`, data);
    },
    delete(ids) {
        return axiosClient.delete("users", { data: { ids } });
    },
};
