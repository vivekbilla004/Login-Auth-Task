import axios from "axios"

const apiUrl = "https://login-auth-task.onrender.com/api/auth"

const API = axios.create({
  baseURL: apiUrl
})

export const loginUser = (data) => API.post("/login", data)
export const registerUser = (data) => API.post("/register", data)

export default API