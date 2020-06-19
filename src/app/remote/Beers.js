import axios from 'axios'

const api = "https://ekaut-control-api.herokuapp.com/api"

export const listBeers = () => {
    const path = "/beers"
    return axios.get(api + path)
}
