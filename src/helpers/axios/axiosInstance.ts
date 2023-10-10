import { authKey } from '@/constants/storage';
import { IGenericErrorResponse } from '@/types/error';
import { ResponseSuccessType } from '@/types/response';
import { getFromLocalStorage } from '@/utils/localStorage';
import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers['Accept'] = 'application/json';
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        const accessToken = getFromLocalStorage(authKey);
        if (accessToken) {
            config.headers.Authorization = accessToken;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    //@ts-ignore
    function (response) {
        const responseObject: ResponseSuccessType = {
            data: response?.data?.data,
            meta: response?.data?.meta,
        };

        return responseObject;
    },
    function (error) {
        const responseObject: IGenericErrorResponse = {
            statusCode: error?.response?.data?.statusCode || 500,
            message: error?.response?.data?.message || 'Something went wrong!',
            errorMessages: error?.response?.data?.message,
        };

        return responseObject;
    }
);

export default axiosInstance;
