# 异步之数据请求

1. xhr 与fetch关系？
    功能都是一样的 xhr 旧时代， fetch es6 最新的api
    fetch('http://localhost:3000/posts')
        .then(data => data.json())
        .then(data => data)

xhr = new XMLHttpRequest xhr 实例
<!-- request 多种请求方法 get 明文 url输入 post 加密 -->
xhr.open("GET", "http://localhost:3000/posts", true);
xhr.send();
xhr.onreadystatechange = function(event) {
    event.target.readyState  4
    JSON.parse(event,target.responseText) JSON 强制类型转换 
    
}