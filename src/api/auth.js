import axiosClient from "./apiClient";

export function login(data) {
    return axiosClient.post('/auth/login', data);
}

export function register(data) {
    return axiosClient.post('/auth/register', data);
}

export function forgotPassword(data) {
    return axiosClient.post('/auth/forgot-password', data);
}

export function resetPassword(data) {
    return axiosClient.post('/auth/reset-password', data);
}