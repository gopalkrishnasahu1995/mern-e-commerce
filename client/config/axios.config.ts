import axios, { AxiosInstance } from 'axios'
import { BASE_URL } from '../constants/api'
const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL
})

export default instance