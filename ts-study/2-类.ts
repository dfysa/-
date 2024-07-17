class Person {
  id: number;
  name: string;
  age: number = 18;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  introduce(): string {
    return `hello,I am ${this.name},and I am ${this.age} years old`;
  }
}

//对象创建

let p = new Person(1, "zhangsan");

console.log(p.name); //读 
p.name = 'lisi'; //写 
console.log(p.name);
//调用类中方法
console.log(p.introduce());


// 静态成员
class Constants {
  static count: number = 1;
}
class Utils {
  static toLowerCase(str: string) {
    return str.toLowerCase();
  }
}
console.log(Constants.count);
console.log(Utils.toLowerCase("Hello World"));


//继承

class Student extends Person {
  classNumber: string;
  constructor(id: number, name: string, classNumber: string) {
    super(id, name);
    this.classNumber = classNumber;
  }

  introduce(): string {
    return super.introduce() + `, and I am a student`;
  }
}

let student = new Student(1, "xiaoming", "三年二班");
console.log(student.introduce());

//访问修饰符
class Person1 {
  private id: number;
  protected name: string;
  public age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

class Student1 extends Person1 {


  getName(){
    //此处因为private 而报错
    // return this.id;
    return this.name
  }


}

let s=new Person1(1,'张三',10)
// 这里报错
// s.name
