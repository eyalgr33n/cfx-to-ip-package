const axios = require('axios');

class CFXTOIP {
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://cfx.re/',
            timeout: 5000,
            validateStatus: status => status >= 200 && status < 300
        });
    }

    resolve(code) {
        return new Promise((resolve, reject) => {
            this.instance.get(`/join/${code}`)
            .then((response) => {
                const url = response.headers["x-citizenfx-url"];
                if (!url) {
                    reject(new Error('Invalid code'));
                } else {
                    const [, ip, port] = url.match(/(\d+\.\d+\.\d+\.\d+):(\d+)/);
                    resolve({ ip, port });
                }
            })
            .catch((e) => {
                reject(new Error(e.message));
            });
        })
    }
}

module.exports = CFXTOIP;