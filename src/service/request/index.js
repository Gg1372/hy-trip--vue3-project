import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'
import useMainStore from '@/stores/modules/main'

const mainStore = useMainStore();

class HYRequest {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }

    request(config) {
        mainStore.isLoading = true;
        return new Promise(async (resolve, reject) => {
            this.instance.request(config).then(res => {
                mainStore.isLoading = false;
                resolve(res.data)
            }).catch(err => {
                mainStore.isLoading = false;
                reject(err)
            })
        })
    }

    get(config) {
        return this.request({ ...config, method: 'get' })
    }

    post(config) {
        return this.request({ ...config, method: 'post' })
    }
}

export default new HYRequest(BASE_URL, TIMEOUT);