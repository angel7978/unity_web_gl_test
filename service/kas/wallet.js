const ApiCaller = require('./api_caller');

class Wallet extends ApiCaller {
    constructor() {
        super('https://wallet-api.klaytnapi.com')
    }

    async getAccount() {
        const options = {
            method: 'GET',
            url: '/v2/account',
            json: true,
        };

        return await this.call(options);
    }
}

const wallet = new Wallet();
module.exports = wallet;