const axios = require('axios');
const defaults = require('./default');

const url = 'gifs/';
const api_key = 'bWo4v44iCpufFV5TQfL4zwsKdTHwBPUg'

module.exports = {
    random : () => {
        return axios({
            ...defaults,
            method : 'GET',
            url : url + 'random',
            params : {
                api_key
            }
        })
    },
    trending : () => {
        return axios({
            ...defaults,
            method : 'GET',
            url : url + 'trending',
            params : {
                api_key,
                limit : 10
            }
        })

    },
    search : (limit,q) => {
        return axios({
            ...defaults,
            method : 'GET',
            url : url + 'search',
            params : { 
                api_key,
                limit,
                q
            }
        })
    }
}
