const express = require('express')
const proxy = require('http-proxy-middleware')

// proxy middleware options
const options = {
    loglevel: "debug",
    target: 'https://dev-smarthome.vqbn.com', // target host
    changeOrigin: true, // needed for virtual hosted sites
    /* ws: true, // proxy websockets
    pathRewrite: {
        '^/api/old-path': '/api/new-path', // rewrite path
        '^/api/remove/path': '/path' // remove base path
    },*/
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'dev.localhost:3000': 'http://localhost:3000'
    }
}

// create the proxy (without context)
const rest_api = proxy(options)

module.exports = function (app) {
    // mount `exampleProxy` in web server
    app.use('/api', rest_api)    

    /*app.use(proxy('*', { target: 'https://localhost:3000' }))
    app.use(proxy('/api', { changeOrigin: true, target: 'https://dev-smarthome.vqbn.com' }))*/

}; 