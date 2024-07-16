//定义
interface Person2 {
  id: number;
  name: string;
  age: number;
  introduce(): void;
}

//实现
class Student2 implements Person2 {
  id: number;
  name: string;
  age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  introduce(): void {
    console.log("Hello,I am a student");
  }
}

//多态
//再创建一个`Teacher`对象
class Teacher2 implements Person2 {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log("Hello,I am a teacher");
  }
}
//最后分别调用`p1`和`p2`的`introduce()`方法，你会发现，
//同样是`Person`类型的两个对象，调用同一个`introduce()`方法时，
//表现出了不同的行为，这就是多态。

let a1: Person2 = new Student2(1, "zhangsan", 17);
let a2: Person2 = new Teacher2(2, "lisi", 35);


//接口使用
class Order {
  totalAmount: number;
  paymentStrategy: PaymentStrategy;
  constructor(totalAmount: number, paymentStrategy: PaymentStrategy) {
    this.totalAmount = totalAmount;
    this.paymentStrategy = paymentStrategy;
  }
  pay() {
    this.paymentStrategy.pay(this.totalAmount);
  }
}

class AliPay implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`AliPay:${amount}`);
  }
}


class WechatPay implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Wechat:${amount}`);
  }
}

interface PaymentStrategy {
  pay(amount: number): void;
}

let order1 = new Order(1000, new AliPay());
order1.pay();

let order2 = new Order(1000, new WechatPay());
order2.pay();

// 接口的灵活性（用来描述类以外，还常用于直接描述对象的类型）
// let person3: { name: string; age: number; gender: string } = {
//   name: "张三",
//   age: 10,
//   gender: "男",
// };

interface Person3 {
  name: string;
  age: number;
  gender: string;
}

let person1: Person3 = { name: "张三", age: 10, gender: "男" };