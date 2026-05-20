import axios from "axios"

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api/auth"

const API = axios.create({
  baseURL: apiUrl
})

export const loginUser = (data) => API.post("/login", data)
export const registerUser = (data) => API.post("/register", data)

export default API