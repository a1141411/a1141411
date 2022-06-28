const fs = require('fs'); // node fs commomjs

const files = ['./a.txt', './readme.md', './b.txt'];

for (let file of files) {
    // 加入为读取文件停下来 有没有同步
    // 阻塞代码
    const data = fs.readFileSync(file);
    console.log(data.toString());
    // fs.readFile(file, (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log(data.toString());
    // })
}