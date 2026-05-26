import axio from "axios"

const apiPort = "3000"

const localAPI =  `http://localhost:${apiPort}`

const externalAPI =  null

const api = axio.create({
    baseURL : localAPI
})

export default api