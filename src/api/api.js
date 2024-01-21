import axios from "axios";

    const instance = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",

        headers: {
            "API-KEY": "a0b1f331-4821-42e2-a488-37710a16fbe6",
            "Content-Type": "application/json"
        }
    })


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}


export const getAuth = () => {
    return instance.get("auth/me").then(response => response.data)
}


export const postFollow = (id) => {
    return instance.post(`follow/${id}`).then(response => response.data)
}


export const deleteFollow = (id) => {
    return instance.delete(`follow/${id}`).then(response => response.data)
}

