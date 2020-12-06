// src/setupProxy.js

const proxy = require('http-proxy-middleware')
// 프록시 : 방화벽, 웹 필터, 캐쉬, 공유데이터
const targetURI = 'http://localhost:5000/'
// module.exports = function (app) {
//     app.use(
//         createProxyMiddleware('/api',{
//             target: targetURI,
//             changeOrigin: true,
//             pathRewrite: {
//                 '^/api': '', // URL ^/api -> 공백 변경
//             },
//         })
//     )
// }

module.exports = function (app) {
    app.use(
        '/api',

        proxy({
            target: targetURI,

            changeOrigin: true,
        })
    )
}
