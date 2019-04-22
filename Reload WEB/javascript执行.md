重学前端16，宏观任务和微观任务
====

+ 宏观任务和微观任务
  + 我们把宿主发起的任务称为宏观任务，把javascript发起的任务称为微观任务
  + 事件循环   javascript引擎等待着宿主分配宏观任务，在操作系统中，等待的行为通常都叫做一个事件循环
  + Promise会产生异步代码，js必须保证他们在一个宏观队列中完成，因此，每个宏观任务又包含了一个微观任务队列。
  + Promise 永远在队列尾部添加微观任务。setTimeout 等宿主 API，则会添加宏观任务。
+ Promise
  + 标准化的异步管理方式
  + 需要进行 io、等待或者其它异步操作的函数，不返回真实结果，而返回一个“承诺”，函数的调用方可以在合适的时机，选择等待这个承诺兑现（通过 Promise 的 then 方法的回调）。
  + then是一个异步的过程
  + **Promise** 产生的是 JavaScript 引擎内部的**微任务**，而 **setTimeout** 是浏览器 API，它产生**宏任务**。
  + 微任务始终先于宏任务
+ **异步执行顺序**
  + 首先我们分析有多少个宏任务；
  + 在每个宏任务中，分析有多少个微任务；
  + 根据调用次序，确定宏任务中的微任务执行次序；
  + 根据宏任务的触发规则和调用次序，确定宏任务的执行次序；
  + 确定整个顺序。
+ async/await
  + async一定返回Promise
****
重学前端17， 闭包，作用域链，执行上下文，this
====

+ 概览
![avatar](https://github.com/tenggouwa/ImgWork/blob/master/ReloadWeb/seventeen-1.png)

****
重学前端18，有多少种函数?
====

+ 函数
  + 普通函数 function定义的
  ```
    function foo(){
      // code
    }
  ```
  + 箭头函数 => 运算符定义的
  ```
    function foo = () => {
      // code
    }
  ```
  + 方法: class中定义的
  ```
    class C {
      foo(){
        // code
      }
    }
  ```
  + 生成器函数 用function *定义的
  ```
    function * foo() {
      // code
    }
  ```
  + 类 用class定义的类 
  ```
    class Foo {
      constructor() {
        // code
      }
    }
  ```
  + 异步函数
  ```
    async function foo() {
      //code
    }
  ```
+ this关键字
  + **调用函数时使用的引用，决定了函数执行时刻的 this 值。**
  + **改为箭头函数后，不论用什么引用来调用它，都不影响它的 this 值。**
  + call  ```foo.call({}, 1, 2 ,3)```
  + apply ```f00.apply({}, [1, 2, 3])```
  + bind 可以生成一个绑定过的函数
  ```
    function foo(a, b, c){
        console.log(this);
        console.log(a, b, c);
    }
    foo.bind({}, 1, 2, 3)();
  ```
****
重学前端19 语句
===

+ 语句分类
![avatar](https://github.com/tenggouwa/ImgWork/blob/master/ReloadWeb/nineteen-1.jpg)
+ 



























