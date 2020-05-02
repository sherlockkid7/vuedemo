import axios from "axios";

// 登录完成后的所有请求必须在请求的header中添加token
// add a request interceptor
let axiosIns = axios.interceptors.request.use(
    function(config){
        let LoginToken = sessionStorage.getItem("LoginToken");
        if(LoginToken){
            config.headers.Authorization = "Bearer"+ LoginToken;
        }
        // do something before request is sent
        return config;
    },
    function(error){
        // do something with request error
        return Promise.reject(error);
    }
);
export default{
    login(data){
        // 发送ajax请求，axios
        return axios.post("http://yapi.demo.qunar.com//mock/96945/api/login",data)
        // return axios.post("/api/login",data)
    },
    logout(){
        // 退出登录，取消全局注册的依赖（钩子）
        axios.interceptors.request.eject(axiosIns)
    }
    // 该接口数据无法请求到
    // getUserProgress(){
    //     return axios.get("/api/getUserProgress");
    // }
};