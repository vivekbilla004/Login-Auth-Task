import axios from "axios"

const apiUrl = "https://login-auth-task.onrender.com/"

const API = axios.create({
  baseURL: apiUrl
})

export const loginUser = (data) => API.post("api/auth/login", data)
export const registerUser = (data) => API.post("api/auth/register", data)

export default API