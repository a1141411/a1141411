/**
 * 代码最重要的是？
 * 可读性
 * @param {string   } file  文件名 
 * @return { boolean } 是否是图片 
 * @author 注明作者
 * @date 2020-3-29 时间
 */
function checkIsImage(file) {
    console.log(file);
    //file 不能为空
    if(!file) {
        return false;
    }
    // ['a','txt']
    // if (
    // file.split('.')[1] == 'jpg' 
    //     || file.split('.')[1] == 'gif' 
    //     || file.split('.')[1] == 'jpeg'
    //     || file.split('.')[1] == 'png'
    //     || file.split('.')[1] == 'svg'
    //     || file.split('.')[1] == 'webg'
    //     || file.split('.')[1] == 'awebp'
    // ){
    //     return true;
    // }

    let imgFormats = ['jpg','gif','jpeg','png','svg','webp','awebp'];
    //三元运算符
    return imgFormats.indexOf(file.split('.')[1]) == -1 ? false : true;
    if (pos == -1 ){
        return false;
    }else{
        return true;
    }
    return false;
}

console.log(checkIsImage('a.g'))