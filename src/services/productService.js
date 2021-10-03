import axios from 'axios'
const baseURL = "http://localhost:3001/api/"


const getAll = () => {
    return axios.get(baseURL + "products")
                .then(response => response.data)
}


const productService = {getAll}

export default productService;


