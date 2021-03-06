import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "f82df6c3-33b7-4f9c-aecf-8cc3197eb73e"},

});

export const userApi = {
    getUsers1() {
        return instance.get(`users`).then((response) => {
            return response.data;
        });
    },
    getUsers2(currentPage = 1, pageSize = 100) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then((response) => {
            return response.data;
        });
    },
    getMypage(userId) {
        return instance.get(`profile/${userId}`).then((response) => {
            return response.data
        })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then((response) => {
            return response.data
        });
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then((response) => {
            return response.data
        });
    },
    getUserData() {
        return instance.get(`auth/me`).then((response) => {
            return response.data
        });
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then((response) => {
            return response.data
        });
    },
    updateUserStatus(status) {
        return instance.put('profile/status', {status}).then((response) => {
            return response.data
        });
    },
    login(email, password, rememberMe, captcha) {
        return instance.post('auth/login', {email, password, rememberMe, captcha}).then((response) => {
            return response.data
        });
    },
    logout() {
        return instance.delete('auth/login').then((response) => {
            return response.data
        })
    },
    uploadPhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo);
        return instance.put('profile/photo', formData).then((response) => {
            return response.data
        });
    },
    updateProfile(profile) {
        return instance.put("profile", profile).then((response) => {
            return response.data
        })
    },
    getCaptcha() {
        return instance.get(`security/get-captcha-url`).then((response) => {
            return response.data
        });
    },

};

