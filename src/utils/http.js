// 导入封装好的axios实例
import request from './request';
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
const http = {
    /**
     * methods: 请求
     * @param url 请求地址
     * @param params 请求参数
     */
    get(url,params,httpType='http1'){
        const config = {
            method: 'get',
            url:baseUrl[httpType]+url
        };
        if(params) config.params = params;
        return request(config)
    },
    post(url,params,httpType='http1'){
        const config = {
            method: 'post',
            url:baseUrl[httpType]+url
        };
        if(params) config.data = params;
        return request(config)
    },
    put(url,params,httpType='http1'){
        const config = {
            method: 'put',
            url:baseUrl[httpType]+url
        };
        if(params) config.params = params;
        return request(config)
    },
    delete(url,params,httpType='http1'){
        const config = {
            method: 'delete',
            url:baseUrl[httpType]+url
        };
        if(params) config.params = params;
        return request(config)
    }
};
//导出
export default http;