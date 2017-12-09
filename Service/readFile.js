/**
 * 下面的代码：进行I/O操作，给readFile绑定一个回调函数function(error,file){},
 * 并在读取testfile完成后执行回调函数。期间，后面的额代码继续执行，不受I/O阻塞
 */
var fs = require("fs");
fs.readFile("./testfile","utf-8", function(error, file){
    if(error) throw error;
    console.log("我读完文件啦~");
    console.log(file);
});
console.log("我不会被阻塞！");