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
    },

    postFollow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },


    deleteFollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },



    getProfile(id){
        return profileAPI.getProfile(id)
    }
}

export const profileAPI = {
    getProfile(id){
        return instance.get(`profile/${id}`).then(response => response.data)
    },

    getStatus(id){
        return instance.get(`profile/status/${id}`)
    },

    updateStatus(status){
        return instance.put(`profile/status`, {status})
    }
}


export const authAPI = {
    me() {
        return instance.get("auth/me").then(response => response.data)
    },

    login(email, password, rememberMe = false){
        return instance.post("auth/login", {email, password, rememberMe})
    },

    logout(){
        return instance.delete("auth/login")
    }
}



