import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "97519653-c16a-489b-b268-7ad98a23a451"}
})

export const UserAPI = {
    getUsers: (currentPage = 1, screenSize = 10) => instance
        .get(`users?page=${currentPage}&count=${screenSize}`)
        .then((response) => response.data),


    getUsers2: (pageNumber = 1, screenSize = 10) => instance
        .get(`users?page=${pageNumber}&count=${screenSize}`)
        .then((response) => response.data),
}
