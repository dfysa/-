//定义
enum Season {
  SPRING,
  SUMMER,
  AUTUMN,
  WINTER,
}
//访问
let spring: Season = Season.SPRING;

//使用场景

enum Direction {
  UP,
  BOTTOM,
  LEFT,
  RIGHT,
}
function move(direction: Direction) {
  if (direction === Direction.UP) {
    console.log("向上移动");
  } else if (direction === Direction.BOTTOM) {
    console.log("向下移动");
  } else if (direction === Direction.LEFT) {
    console.log("向左移动");
  } else {
    console.log("向右移动");
  }
}
move(Direction.UP);


// 赋值
//默认情况下，每个属性的值都是数字，并且从 `0` 开始递增
console.log(Direction.UP) //0
console.log(Direction.BOTTOM) //1
console.log(Direction.LEFT) //2
console.log(Direction.RIGHT) //3

//还能手动为每个属性赋值
// enum Direction {
//     UP = 1,
//     BOTTOM = 2,
//     LEFT = 3,
//     RIGHT = 4
// }

// console.log(Direction.UP) //1
// console.log(Direction.BOTTOM) //2
// console.log(Direction.LEFT) //3
// console.log(Direction.RIGHT) //4

//再例如
// enum Direction {
//     UP = 'up',
//     BOTTOM = 'bottom',
//     LEFT = 'left',
//     RIGHT = 'right'
// }

// console.log(Direction.UP) //up
// console.log(Direction.BOTTOM) //bottom
// console.log(Direction.LEFT) //left
// console.log(Direction.RIGHT) //right


//通过为枚举属性赋值，可以赋予枚举属性一些更有意义的信息，例如以下枚举
enum Color {
  Red = 0xff0000,
  Green = 0x00ff00,
  Blue = 0x0000ff,
}

enum FontSize {
  Small = 12,
  Medium = 16,
  Large = 20,
  ExtraLarge = 24,
}