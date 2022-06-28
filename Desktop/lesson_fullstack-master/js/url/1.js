// https:// 协议 security 更加安全的http
// www.wc.com   域名 好记 -> ip
// login path
// 查询参数？
// parse 解析
function parsParam(url) {
    const paramsStr = /.+\?(.+)$/.exec(url)[1];
    // console.log(paramsStr);
    const paramsArr = paramsStr.split('&');
    // console.log(paramsArr)

    let paramsObj = {};
    paramsArr.forEach(param => {
        if (/=/.test(param)) {
            let [key, val] = param.split('=');
            if (paramsObj.hasOwnProperty(key)) {
                paramsObj[key] = [].concat(paramsObj[key], val);
            }else {
                val = decodeURIComponent(val);
                if(/^\d+$/.test(val)) {
                    val = parseInt(val)
                }
                paramsObj[key] = val;
            }
            // paramsObj[key] = val

        }else {
            paramsObj[param] = true;
        }
    })
    return paramsObj; 
}
let url = 'https://www.wc.com?a=1&b=2&c=3&d&b=4&name = %E6%96%87%E9%95%BF';
console.log(parsParam(url));
// 解析URL 参数到一个对象中