import axios from 'axios'

const api = "https://ekaut-control-api.herokuapp.com/api/"

export const getActiveTanks = () => {
    const path = "listActiveTanks"
    return axios.get(api + path)
}

export const getInactiveTanks = () => {
    const path = "listInactiveTanks"
    return axios.get(api + path)
}

