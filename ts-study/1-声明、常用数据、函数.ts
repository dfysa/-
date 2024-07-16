console.log('你好  abs  123')
let c = 60;
console.log(typeof c)

let arr: number[] = [1, 2, 3]
console.log(arr[0]);


let person: { name: string, age: number } = { name: 'zhangsan', age: 10 }
console.log(person.name);


function sum(a: number, b: number): number {
    return a + b
}
let result = sum(2, 3)
console.log(result);


//用问号标明可选参数，在调用函数时没有传递对应的可选参数时，该参数的值为undefined，可将这结果编入方法内的逻辑判断
function getPersonInfo(name: string, age: number, gender?: string): string { 
    if (gender === undefined) { 
        gender = '未知' 
    } 
    return `name:${name},age:${age},gender:${gender}`; 
} 
    let p1 = getPersonInfo('zhagnsan', 10, '男') 
    let p2 = getPersonInfo('lisi', 15); 

    console.log(p1); 
    console.log(p2);    

    //编写参数时可为其附上默认值，使其成为一个默认参数。调用函数若不传此参数，则为默认值，传了此参数则为对应传输的值
function getPersonInfo1(name: string, age: number, gender: string='未知'): string { 
    if (gender === undefined) { 
        gender = '未知' 
    } 
    return `name:${name},age:${age},gender:${gender}`; 
} 
    let p3 = getPersonInfo1('zhagnsan', 10, '男') 
    let p4 = getPersonInfo1('lisi', 15); 

    console.log(p3); 
    console.log(p4);    

    //一个函数可能用于处理不同类型的值，这种情况可以使用联合类型，例如以下案例中的`message: number | string`
    function printNumberOrString(message: number | string) {
          console.log(message) 
        } 
        printNumberOrString('a') 
        printNumberOrString(1)


    //若函数需要处理任意类型的值，则可以使用`any`类型，例如以下案例中的`message: any`
    function print(message:any) {  
        console.log(message) 
    } 
    print('a') 
    print(1) 
    print(true)


   //返回值类型
   //特殊类型
   //若函数没有返回值，则可以使用`void`作为返回值类型，其含义为空。
   function test(): void {
     console.log("hello");
   }
 

   //类型判断
   //函数的返回值类型可根据函数内容推断出来，因此可以省略不写。
   function test1() {
     console.log("hello");
   }
   function sum1(a: number, b: number) {
     return a + b;
   }

   // 函数声明特殊语法
   //匿名函数
   //匿名函数的语法结构简洁，特别适用于简单且仅需一次性使用的场景
   //注意：匿名函数能够根据上下文推断出参数类型，因此参数类型可以省略。 
   let numbers: number[] = [1, 2, 3, 4, 5] 
   numbers.forEach(function (number) {
     console.log(number); 

   })

   //箭头函数
   //匿名函数的语法还可以进一步的简化，只保留参数列表和函数体两个核心部分，两者用`=>`符号连接。
//    let numbers: number[] = [1, 2, 3, 4, 5] 
    numbers.forEach((num) => { console.log(num) })
     numbers.forEach(num => { console.log(num) })