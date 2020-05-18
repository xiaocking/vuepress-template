// 自动获取guide文件夹中的md文件并注入到路由中
// 不能 嵌套文件夹
const fs = require("fs")
const path = require("path")
const pages = [];
function resolve(dir) {
  return path.resolve(__dirname, dir)
}
function getMdFile(dir, arr) {
  const filePath = dir.substr(2);
  const fsList = fs.readdirSync(resolve(dir));
  fsList.forEach(item => {
    if (/.*(\.md)$/.test(item)) {
      // 是md文件
      let fileName = item.split('.')[0];
      if (fileName === "README") {
        arr.unshift(filePath + '/')
      } else {
        arr.push(filePath + '/' + fileName)
      }
    }
    // else {
    //   // 是文件夹
    //   getMdFile(dir + '/' + item, arr)
    // }
  });

}
getMdFile("../guide", pages)
module.exports = pages