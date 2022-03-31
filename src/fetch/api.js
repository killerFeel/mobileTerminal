import http from '../utils/http';

const httpList = {
    test:{ // 测试环境
        http1:'http://localhost:3078', // ip1
        http2:'http://197.82.15.15:8082', // ip2
    },
    production: { // 生产环境
        http1:'http://197.82.15.15:8083',// ip1
        http2:'http://197.82.15.15:8084', // ip2
    }
};
let baseUrl = httpList['test'];
if (process.env.NODE_ENV.indexOf('production') > -1) { // 开发环境
    baseUrl = httpList['production'];
}

export default{
    getListAPI(params,httpType='http1'){
        return http.get(`${baseUrl[httpType]}/rApi/resc/getCategory`,params)
    },
}