import axios from "../axios";

export const LoginApi = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/login',
            method: 'post'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})