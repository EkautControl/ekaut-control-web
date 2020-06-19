import axios from 'axios'

const api = "https://ekaut-control-api.herokuapp.com/api"

export const getActiveTanks = () => {
    const path = "/activeTanks"
    return axios.get(api + path)
}

export const getInactiveTanks = () => {
    const path = "/inactiveTanks"
    return axios.get(api + path)
}

export const submitProduction = (production) => {
    const path = "/production"
    return axios.post(api + path, production)
}
