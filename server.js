//1.引入express
const express = require('express');
const { json } = require('express/lib/response');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request   对请求报文的封装
//response  对响应报文的封装

//可以接收任意类型的请求
app.all('/JSON-server',(request,response) =>{

    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应一个数据
    const data = {
        name: 'lx'
    };
    //对对象进行字符串的转换
    let str = JSON.stringify(data);
    
    //设置响应体
    response.send(str);

});

app.get('/server',(request,response) =>{

    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    response.send('Hello AJAX GET -2');

});

//针对IE缓存的规则
app.get('/IE',(request,response) =>{

    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    response.send('Hello IE -2');

});

//延时响应
app.all('/delay',(request,response) =>{

    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    //添加定时器
    setTimeout(() => {
        //设置响应体
        response.send('延时响应');
    }, 1000);
});

//jQUery 服务
app.all('/jQuery-server',(request,response) =>{

    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    
    const data = {
        name:'lx'
    }
});

//axios 服务
app.all('/axios-server',(request,response) =>{

    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    
    const data = {
        name:'lx'
    }

    //设置响应体
    response.send(JSON.stringify(data));
});


//fetch 服务
app.all('/fetch-server',(request,response) =>{

    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    
    const data = {
        name:'lx'
    }

    //设置响应体
    response.send(JSON.stringify(data));
});


// jQuery-jsonp 检测用户名是否存在
app.all('/check-username',(request,response) =>{

    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    
    const data = {
        exist:1,
        msg:'用户名已经存在'
    };
    //将数据转换为字符串
    let str = JSON.stringify(data);
    //设置响应体
    response.end(`handle(${str})`);
});

app.all('/jquery-username',(request,response) =>{

    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    
    const data = {
        name:"wjl",
        city:['bj','sh','nn']
    };
    //将数据转换为字符串
    let str = JSON.stringify(data);
    //接收callback参数
    let cb = request.query.callback;
    //设置响应体
    response.end(`${cb}(${str})`);
});

app.all('/cors-server',(request,response) =>{

    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置请求头
    response.setHeader('Access-Control-Allow-Headers','*');
    
    //设置响应体
    response.end("hello cors");
});

//4.监听端口
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中");
})
