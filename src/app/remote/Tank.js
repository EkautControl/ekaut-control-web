import axios from 'axios'

const api = "https://ekaut-control-api.herokuapp.com/api/"

export const getActiveTanks = () => {
    const path = "getActiveTanks"
    return axios.get(api + path)
}
