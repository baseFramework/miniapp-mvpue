let fly = require("../../node_modules/flyio/dist/npm/wx.js");
fly = new fly();

// 配置项 (可参考 flyio 文档)
fly.config = {
    headers: {}, //请求头
    baseURL: 'https://yapi.test.shuqian123.com', //请求基地址 // /mock/10/api/test
    timeout: 0, //超时时间，为0时则无超时限制
    withCredentials: false //跨域时是否发送cookie
}

//添加请求拦截器
fly.interceptors.request.use(
    (config, promise) => {
        config.headers['X-Tag'] = 'Octopus';
        return config;
    })

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response, promise) => {
        //只将请求结果的data字段返回
        return response.data
    },
    (err, promise) => {
        //发生网络错误后会走到这里
        // promise.resolve(err)
    }
)

export default fly;

/**
 * 如果你想单独移除拦截器，只需要将拦截器设为null即可：
 * fly.interceptors.request.use(null)
 * fly.interceptors.response.use(null,null)
 * 
 * 参考地址
 * 官网：https://wendux.github.io
 * API用法：https://blog.csdn.net/duwen90/article/details/78328979
 */