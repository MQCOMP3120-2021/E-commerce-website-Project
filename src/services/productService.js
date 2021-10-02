import axios from 'axios'
const baseURL = "/api/"


const getAll = () => {
    return axios.get(baseURL + "products")
                .then(response => response.data)
}

