const request = require('request')

class ApiCaller {
    constructor (endPoint) {
        this.endPoint = endPoint;
    }

    async call(options) {
        options.url = this.endPoint + options.url;
        options.json = true;

        if (!options.headers) options.headers = {};

        options.headers['x-chain-id'] = '8217';
        options.headers['Content-Type'] = 'application/json';
        options.headers.Authorization = 'Basic S0FTS1UyNU1PME8zREhBR1BUNEdONUM0OnRDdm1DaFl4c1psaUI5Z1NCTk1GbzBFSlhLcDNQZkl0Z1VFbndhdHM=';
        
        return new Promise((resolve, reject) => {
            request(options, function( error, _responce, body) {
                if (error) reject(error);
                else resolve(body);
            });
        });
    }
}

module.exports = ApiCaller;