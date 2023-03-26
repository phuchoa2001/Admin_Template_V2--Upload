import axiosClient from './axiosClient';

export const ImageApi = {
    getAll(params) {
        return axiosClient.get("/images", { params });
    },
    upload(form) {
        return axiosClient.post("/images/upload", form);
    },
    delete(ids) {
        return axiosClient.delete("/images", { data: { ids } });
    },
};
