import axios from 'axios'

const api = "https://ekaut-control-api.herokuapp.com/api/"

export const listBeers = () => {
    const path = "listBeers"
    return axios.get(api + path)
}
