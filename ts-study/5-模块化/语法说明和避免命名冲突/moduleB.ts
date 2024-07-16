//将a引入b
// import { hello, str } from "./moduleA";
// hello();
// console.log(str);

//解决命名冲突
//方法一：导入重命名(更繁琐，推荐下一种)
import { hello as helloFromA, str as strFromA } from "./moduleA";
import { hello as helloFromC, str as strFromC } from "./moduleC";
helloFromA();
console.log(strFromA);
helloFromC();
console.log(strFromC);

//方法二：创建模块对象
import * as A from "./moduleA";
import * as C from "./moduleC";
A.hello();
console.log(A.str);
C.hello();
console.log(C.str);