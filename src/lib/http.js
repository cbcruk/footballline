import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.API_URL
})
axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data)
)

export default axios
