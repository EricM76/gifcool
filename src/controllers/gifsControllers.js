const { response } = require('express');
const gifsResource = require('../requests/gifsResource');

module.exports = {
    random : (req,res) => {
        gifsResource.random()
        .then(result => {
            console.log(result)
            res.render('random',{
                title : result.data.data.title,
                gif : result.data.data.images.original.url
            })
        })
        .catch(error => {
            switch (error.response.status) {
                case 403:
                    res.render('error',{
                        message: error.response.statusText,
                        error : {
                            status : 403,
                            stack : 'Error de autenticación. Verifique su api_key'
                        }
                    })
                    break;
                default:
                    break;
            }
        })
    },
    trending : (req,res) => {
        gifsResource.trending()
        .then(result => {
            res.render('result',{
                gifs : result.data.data
            })
            console.log(result.data)
        })
        .catch(error => {
            switch (error.response.status) {
                case 403:
                    res.render('error',{
                        message: error.response.statusText,
                        error : {
                            status : 403,
                            stack : 'Error de autenticación. Verifique su api_key'
                        }
                    })
                    break;
                default:
                    break;
            }
        })
    },
    search : (req,res) => {
        const {limit,q} = req.query
        gifsResource.search(limit,q)
        .then(result => {
            res.render('result',{
                gifs : result.data.data
            })
        })
        .catch(error => {
            switch (error.response.status) {
                case 403:
                    res.render('error',{
                        message: error.response.statusText,
                        error : {
                            status : error.response.status,
                            stack : 'Error de autenticación. Verifique su api_key'
                        }
                    })
                    break;
                default:
                    break;
            }
        })
    }
}