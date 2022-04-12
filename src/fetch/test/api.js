import http from '@/utils/http';

export default{
    getListAPI(params){
        return http.get(`/rApi/resc/get`,params,'http1')
    },
}