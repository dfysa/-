export default function hello() {
  console.log("moduleA");
}
lt function hello() {
//   console.log("moduleA");
// }

//由于默认导入时无需关注导入项的名称，
//所以默认导出支持匿名内容，比如匿名函数，语法如下
export default function () {
  console.log("moduleB");
}