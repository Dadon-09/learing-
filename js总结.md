## Javascript基础总结
### JS基础分为三个部分
- ECMAscript : JavaScript的语法标准;
- DOM : 文档对象模型 ;
- BOM : 浏览器对象模型
### JS代码引入
#### js代码的书写位置
1. 内嵌式 :  在`<body>`标签内部书写,写在所有的html标签之后
2. 外链式 :  引入外部的js文件 ,放在所有html标签之后 ,和内嵌JS代码并列
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- 外链式 -->
    <script src="test.js"></script>
    <!-- 内嵌式 -->
    <script>
    alert("警告框");
    </script>
</body>
</html>
```
#### Javascript 的输出方式
1. console.log() 控制台输出信息 作用:调试代码
2. alert() 网页当中弹出警告框
3. promt() 用户输入语句 ,类型是字符串
### js的变量
+ 通过关键字var去声明变量 等号右边的值赋值给左边的变量
```js
var a = '你好';
```
+ 变量的命名规范
    a. 字母,数字,下划线,$,组成
    b. 不能以数字开头
    c. 严格区分大小写
    d. 采用**驼峰命名法**-->第一个单词首字母小写 第二个单词及以后首字母大写
    e. 见名知意

### 变量的数据类型
+ 数据类型:有原始数据类型(简单数据类型) 和 引用数据类型(复杂数据类型)
    - 原始数据类型:string number boolean undefined none
    - 复杂数据类型:object(对象) 数组 函数
#### string:字符串
1. 字符串使用需要放在""号
2. "" 和''都可以使用 但不能混用比如`var b = '你好"`这个是错误的
3. 相同的引号不能嵌套 不同的可以 例如`var b = "'你好'";`可以 ,`var c = ''你好'';`是错误的
#### number类型 (数字)
 ` var num = 1;` 不需要加引号
- NaN是一个特殊的数字 表示not a number 非数值
- isNaN():任何不能被转换为数值的值,都会返回true; `console.log(isNaN(12*'abc'));`//返回true
#### boolean类型 
 **true和false**常用来做*判断*
####undefined 未定义和 null
``` js
var c;
console.log(c);//undefined 未被赋值
```
null 用来表示空值
#### 如何判断变量的数据类型
typeof()+变量名
### 变量的传递
```js
<script>
        var a = 22;
        var b = 33;
        var c = 44;
        a = c - b;
        b = a + c;
        c = b - a;
        console.log(a);//11
        console.log(b);//55
        console.log(c);//44   
</script>
```
### 变量的类型转换
+ 其他类型===>string
    1. 变量+""或者变量+"abc" `var a = 123; a = a + '';`
    2. 调用toString() --undefined和null不能用这个方法
    ``` js
    var b = true;
        console.log(b.toString());//字符"true"
        var c = 123;
        console.log(c.toString(16));//可以更改进制显示
    ```
    3. 使用String()函数 **隐式转换**用的是这个规则
    ```js
    console.log(String(null));//string类型
        console.log(String(123));//string类型
        console.log(String(undefined));//string类型
        console.log(String(NaN));//string类型
    ```
+ 其他数据类型==>Number类型 
    - 使用Number()函数   **隐式转换**用的是这个规则
        - 字符串--->数字
            - 如果字符串中是纯数字,则直接转换为数字
            * 如果字符串中有非数字的内容,则转换为NaN.
            * 如果字符串是一个空字符串或者是一个全是空格的字符串,则转换为0
        ```js
            console.log(Number('123'));//123
            console.log(Number('123abc'));//NaN
            console.log(Number(''));//  0
            console.log(Number('   '));//0
        ```
        - boolean --->Number
            `console.log(Number(true));//1`
            `console.log(Number(false));//0`
        - null ===>数字 `console.log(Number(null));//0`
        - undefined ===>数字 `console.log(Number(undefined));//NaN`
    - parseInt(): 字符串---->**整数**
        + 转换规则 : 从第一个**非空**白字符开始转换,直到遇到一个非数字字符为止;
        + 如果对非String使用parseInt()或parseFloat(),会先将其转换为String然后再转换隐式转换 String()这个规则
    ```js
        console.log(parseInt('8'));//
        console.log(parseInt('  2019年7月4号在学JS基础'));//2019
        console.log(parseInt('2019.07.04开始学JS基础'));//2019
        console.log(parseInt('abc2019年7月4号在学JS基础'));//NaN
    ```  
    ```javascript
    console.log(parseInt(true));;//NaN
    console.log(parseInt(false));//NaN
    console.log(parseInt(null));//NaN
    console.log(parseInt(undefined));//NaN
    console.log(parseInt(154.7));//154
    ```
 + 其他数据类型 转换成boolean类型
    - **null undefined 空字符串 0 和NaN**都转换为false

### 算术运算符
- 任何数和NaN做运算 都得NaN
- 对非Number类型的值进行运算(包括 - * /)时,先转换为Number,再运算
- +号特殊 有一方是字符串的时候,起到的是拼接作用
- 任何值与字符串做加法运算,都是先转换为字符串,再做拼接操作

### 赋值运算符
+ a = a + 1;可以简写为a++;
+ a++是先赋值 在自增 ++a是先自增 在赋值

### 比较运算符
- 比较运算符 符合条件为true 不符合条件为false
``` js
console.log(5 > 3);//true
console.log(1 > 3);//false
console.log(10 == 10);//true
console.log(5 != 3);//true
```
- 一边是数字 一边是非数字时 ,要转换为数字再比较
``` js
console.log(2 < null);//2<0 false
console.log(1 > undefined);//false 1>NaN  和NaN做比较的值都是false
```
- 两边都是字符串时 不转换数字 直接比较unicode编码
---

## JS的内置对象Date和Math
### Date()对象 
```js
var date = new Date(); //当前的时间对象
    console.log(date); //Fri Jul 12 2019 16:18:45 GMT+0800 (中国标准时间)
    //2009.12.31 00:30:30
    var date1 = new Date('2009.12.31 00:30:30');
    console.log(date1);
    var year = date.getFullYear(); //获取年
    var month = date.getMonth() + 1; //获取月 月是0-11
    var day = date.getDate(); //获取日
    var weekday = date.getDay(); //获取周几
    var hour = date.getHours(); //获取时
    var min = date.getMinutes(); //获取分
    var second = date.getSeconds(); //获取秒
    var millisecond = date.getMilliseconds(); //获取毫秒
    var str = '今天是' + year + '年' + month + '月' + day + '日' + '星期' + weekday;
    console.log(str);
    //时间戳
    var stamp = date.getTime(); //从格林威治标准时间的1970年1月一日,0时0分0秒至今所花费的毫秒数
    console.log(stamp);
```
### Math()对象
```js
var a = Math.ceil(19.13); //20向上取整数
console.log(Math.floor(19.33)); //foolr()向下取整 19
console.log(Math.max(1, 5, 9, 80, 77)); //取多个数的最大值
console.log(Math.min(-19.33, -40, 8, 1, 0)); //取多个数的最小值
console.log(Math.pow(34, 3)); //Math.pow(x,y)取x的y次方
console.log(Math.random()) //取0-1之间的随机数不包含1
//取两个特定范围的随机整数[x,y]
//console.log(Math.floor(Math.random()*(y-x+1))+x);例如
//取4-15之间的随机整数[4,15]
console.log(Math.floor(Math.random() * 12) + 4);
console.log(Math.round(2.4)); // 2//Math.round()四舍五入取整(整数四舍五入,负数五舍六入);
console.log(Math.round(2.9)); // 3
```
### 逻辑运算符
- || --或 一个条件是真 则为真
- && --与(且) 两个条件都为真 位真
- != --非 取反
#### 短路运算
- &&
```js
true && alert('谈不弹出'); //弹出
false && alert('谈不弹出'); //不弹出
```
- ||
```js
true || alert('谈不弹出'); //不弹出
false || alert('谈不弹出'); //弹出
```
#### 对非布尔值逻辑运算
- 做! 运算 将其转换为布尔值再操作
- 做 && || 运算要将其转换为布尔值再进行运算,返回结果仍是原值
``` js
var result = 5 || 6;
console.log(result); // 5
//谁决定了运算的结果 返回谁
console.log(5 && 6); //6
console.log('' || 6); //6
```
### if语句
``` js
if (条件判断) {
    alert('条件符合....')
} else {
    alert('条件不符合')
}
```
#### 多分支条件语句
```js
if (条件表达式1) {
            // 条件1为真时，做的事情
} else if (条件表达式2) {
            // 条件1不满足，条件2满足时，做的事情
} else if (条件表达式3) {
            //条件1、2不满足，条件3满足时，做的事情
} else {
            // 条件1、2、3都不满足时，做的事情
}
```
#### 三元运算符
- 表达式?如果表达式为true 执行前边:如果表达式为false;执行后边
```js
var b = 3 < 4 ? 3 : 4;
console.log(b);//3
```
#### switch 语句
条件分支语句
```js
switch(表达式){
    case 值1:
        语句体;
    break;(结束switch语句)
    case 值2：
        语句体2;
    break;
    ...
    ...
    default：
        语句体 n+1;
        break;
}
```
#### for 循环
```js
for (i = 1; i < 100; i++) {
    console.log(i);//打印1-99的数字
}  
```   
#### while和do...while
```js
while(条件表达式){
	语句...
}  

do...while
do{
		语句...
	}while(条件表达式)
```
- 两个语句的功能类似 while是先判断后执行 do..while是先执行后判断
- break是停止循环 后面的代码不会再执行 **continue**是跳出本次循环 ,后面循环继续
---
## 数组
+ 数组通过下标索引获取、添加和修改元素
+ 通过arr.length可以知道数组元素的个数
+ 通过for循环遍历数组
```js
var arr = [1,3,5,7,9];
for (var i = 1; i < arr.length; i++) {
    console.log(arr[i]);
}
```
### 数组的基本方法
1. push()从数组的最后添加元素,返回新数组的长度,修改了原数组
2. unshift()从数组的最前添加元素,返回新数组的长度,修改了原数组
3. pop()删除数组的最后一位元素,返回被删除的元素,修改了原数组
4. shift()删除数组的第一位元素,返回被删除的元素,修改了原数组
5. concat()连接两个或多个数组,返回结果为新的数组,不改变原数组
6. join()将数组转换为字符串,返回字符串,不改变原数组
6. split()将字符串通过指定分隔符分割为数组

### 冒泡排序及其优化
```js
var arr = [33,44,22,17,18,9];
//对其从小到大排序
for(var i = 0; i < arr.length -1; i++) {
    if (arr[i] > arr[i + 1]) {
        var temp = arr [i];
        arr[i] = arr[i + 1];
        arr[i + 1] = arr[i];
    }
}
console.log(arr)//[33,22,17,18,9,44]这是第一轮将最大值放在了最后
```
+ 优化冒泡排序(采用for循环)
```js
for(var j = 0; j < arr.length-1; j++){
    for(var i = 0;i < arr.length - 1 -j; i++) {
        if (arr[i] > arr[i + 1]) {
        var temp = arr [i];
        arr[i] = arr[i + 1];
        arr[i + 1] = arr[i];
    }
}
console.log(arr);//[9,17,18,22,33,44]
```
### 选择排序及其优化
+ 选择排序
```js
var arr = [4, 3, 2, 7, 9, 10];
var maxIndex = 0;// 设置其下标指定为最大
for(var i = 1;i < arr.length; i++) {
    if (arr[maxIndex] > arr[i]) { 
        maxIndex = i;
    }
}
var temp = arr[0];
arr[0]=arr[maxIndex];
arr[maxIndex] = temp;
console.log(arr);
```
+ 选择排序优化
```js
var arr = [4, 3, 2, 7, 9, 10];
for (j = 0;j < arr.length-1;j++){
    var maxIndex = j;// 设置其下标指定为最大
    for(var i = j + 1;i < arr.length; i++) {
    if (arr[maxIndex] > arr[i]) { 
        maxIndex = i;
    }
}
var temp = arr[j];
arr[j]=arr[maxIndex];
arr[maxIndex] = temp;
}
```

---
## 函数
### 创建函数的方式
```js
function bar {  //具名函数

}

var b = function(){  //匿名函数

}

(function(){
    alert('不能调用也能立即执行')//立即执行函数
})
```
### 函数的返回值
+ 用return把计算结果返回出去
+ return后面的语句都不会执行,执行玩return语句之后停止并立即退出
+ return语句后不跟任何值,就相当于返回一个undefined
+ 返回值可以是任意的数据类型 ,可以是对象 也可以是函数
```js
function sum(a,b){
    return a + b;
}
var a= sum(5,6);
console.log(a);
```
### 函数的作用域
+ 全局作用域中的变量是全局变量, 页面的任意部分都可以访问的到
+ 全局作用域中的创建的变量都会作为 window 对象的属性保存,  创建的函数都会作为window对象的方法保存
+ 函数体内的变量作用域为整个函数体 ,函数体外不可引用
#### 作用域的上下级关系
- 在函数作用域操作一个变量时 ,先在自身作用域中寻找,没有向上一级作用域中寻找,直至找到作用域
### 参数的数据类型
+ 基本数据类型 作为参数传递时 ,会创建修改数据的副本,不会影响原本值
    - 数据本身存在栈内存
+ 引用数据类型 作为参数传递时 会修改原数据
    - 数据本身存在堆内存 栈内存存放的是指向堆内存的地址
### 递归算法 
+ 自己调用了自己 结果和前几次的结果有关系
```js
//求阶乘
function fn(n) {
    if( n === 1 ){
        return 1;
    }
    return fn( n - 1) * n;
}

//不死神兔
//假设一对刚出生的小兔一个月后就能长成大兔，再过一个月(即第3个月初)就能生下一对小兔，
//并且此后每个月都生一对小兔，一年内没有发生死亡，问：一对刚出生的兔子，
//一年内繁殖成多少对兔子?

//1. 1对
//2. 1对
//3. 2对
//4. 3对
//5. 5对
//6. 8对
//7. 13对
//:   :
//:   :
//n. f(n) ====>  f(n) = f(n-1) + f(n-2);
function f(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return f(n - 1) + f(n - 2);
}
console.log(f(8)); //21对
```
---
## 对象
+ 对象是复杂数据类型 ,key value是属性名和属性值
```js
var person = {
    name: '张三',
    age: 22,
    sex: true,
    like: ['篮球', '足球', 'rap'],
    say: function () {
        alert('雷猴啊');
    },
    children: {
        name: '小米',
        sex: 'false'
    },
    sayName: function () {
        alert(this.sex);
    }
}
```
+ 对象赋值给另一个变量 只会把内存的地址赋值过去`var obj = person;` 修改obj person也会改变
### 创建对象
```js
//方式一 :
var obj = new Object(); // new 一个空的对象
//方式二
var obj1 = {};
//自定义构造函数 创建对象
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say = function () {
        alert(this.name);
    }
}
//zc是new出来的实例对象
var zc = new Person('李四', 34);
console.log(zc);
zc.say();
```
+ this的指向 以函数的形式调用时,this永远都是window 比如fun();相当于window.fun();
+ 以方法的形式调用时 this是指向调用方法所在的那个对象 obj.say() this指向obj
### 遍历对象
```js
//遍历数组
arr.forEach(function (item) {
    //回调函数 里边的形参 item 指的是数组中的每一项对象
    console.log(item);
})
console.log(arr);
//对象遍历
for (var key in obj) {
    //key是对象的每一个属性名
    //obj.key 获取的是obj的key属性 没有这个属性 故他的属性值是undefined
    //属性值要用obj[key]这种形式去获取
    console.log('属性名' + key + ',属性值' + obj[key])
}
```
### JSON
+ json对象是JS对象的字符串表示法，它使用文本表示一个JS对象的信息，本质是一个字符串
```js
 //JSON对象
var objJson = {
    'name': '张三丰',
    'age': 1000
}
console.log(objJson.name);
console.log(objJson);

//把对象传给后台要转换为json字符串
var strJson = JSON.stringify(obj);//转换成json字符串
//台接收到字符串 要把它变回对象 ,只有JSON字符串能转换为json对象
var objJson = JSON.parse(strJson);
```
---
## 数组的高级API
+ reverse()翻转数组 ,返回结果为翻转后的数组(改变原数组)
+ sort() 对数组进行从小到大排序 (改变原数组) 返回排序后的数组
    - sort()是按照unicode码进行排序的 所以拍数字时 要如下
    ```js
    arr.sort(function(a,b){
        return  a-b;
        //如果返回值大于0 互相交换位置
        //小于0 不变位置
        //等于0 不交换
    })
    ```
+ slice()从原数组中提取一个或者多个元素 ,返回结果为新的数组(不会改变原数组) `var newArr = arr.slice(1,4);`意思是从下标1开始截取到下标4 但不包含下标4
+ indexOf()和lastIndexOf()代表从前和从后获取数组的第一个value指定值索引(下标) ,返回值为-1 说明元素不存在
+ splice 从原数组中删除一个或几个元素 ,返回结果为新的数组 (改变原来的数组)
    - 如`var newArr = arr.splice(1,4,"你好");`从索引1号开始删除4个元素 ,和替换元素"你好" 可以替换也可以不写
### 字符串的方法
```js
var str = 'how are you! and you?';
//charAt()获取相应位置的字符
console.log(str.charAt(5)); //r
//charCodeAt()获取指定位置字符的Unicode编码
console.log(str.charCodeAt(5)); //114
//indexOf()返回字符在字符串中的位置
//lastIndexOf()
console.log(str.indexOf(' ')); //3  第一个空格下标是3
console.log(str.lastIndexOf(' ')); //16 最后一个空格下标是16
//concat()连接字符串
console.log(str.concat(str1));
//slice()提取字符串额的某个部分
console.log(str.slice(1, 9)); //从起始位置的索引到结束位置的索引 不包含结束位置的索引
// substr()截取字符串,不会改变原字符
console.log(str.substr(1, 9)); // 1是起始索引位置 9 是截取的字符个数(包含空格)
//toUpperCase() 小写转换成大写
console.log(str.toUpperCase());
//toLowerCase() 大写转换成小写
```
---
## 小结


















