## DOM 
文本对象模型(Document Object Mode) 
### 事件
- 事件的三要素 :
    1. 事件源 :要触发的对象
    2. 事件 
    3. 事件处理程序
- 获取事件源 ==>给事件源绑定事件 ==>触发事件
```js
//获取事件源
var box = document.getElementsByClassName('box); 
box.onclick = function(){////绑定事件
    console.log('今天天气不错');//事件处理程序
}

//也可以行内绑定
<div onclic = 'fn()'></div>
function fn(){
    console.log('天气不错');
}
```
### 什么是DOM
1. dom就是网页的api,让网页中的元素可以被js获取和编辑,动态修改网页
2. dom将文档解析为一个由节点和对象组成的集合 节点包括元素节点 属性节点 文本节点(包括换行和空格) 注释节点
#### 节点的获取方式
1. 通过id获取
2. 通过类名获取
3. 通过标签获取
```js
//方式一 :通过id获取 最为准确
var box = document.getElementById('#id');
// 方式二:通过class获取
var box = document.getElementsByClassName('.box')[0];//获取的是一个伪数组 具有length属性
//方式三 :通过标签获取
var box = document.getElementsBytagName('div')[0];
```
#### 节点之间 的关系
父节点 兄弟节点 子节点 他们的访问关系是以属性的方式存在
1. 父节点 
一个节点只有一个父节点.调用方式为parentNode
`box.parentNode`box节点的父节点
2. 兄弟节点
nextSibling 调用下一个兄弟节点 还有previousSibling是前一个兄弟节点 在高级浏览器和ie678浏览器中的作用有些微差别

3. 获取单个子节点
firstChild/firstElementChild 指的是第一个是子元素节点
lastChild/lastElementChild 指的是最后一个元素节点
4. 获取所有的子节点
+ childNodes: 它是标准属性 :它返回指定元素的子元素集合,包括html节点 文本节点 nodeType==1是元素节点
+ children :不是标准属性 只返回HTML节点 几乎所有浏览器都支持

### DOM节点操作
#### 创建节点
document.creatElement('标签名');
#### 插入节点
1. appendChild(新的子节点) ---在父节点的最后插入一个新的子节点
2. insertBefore(要插入的节点,参考的节点)
#### 删除节点
父节点.removeChild(子节点);  删除自己 node.parentNode.removeChild(node);
#### 复制节点 
要复制的节点.cloneNode()得到一个新的节点 cloneNode(true)节点内的内容也复制

### 节点属性的操作
### 获取节点的属性值
1. node.属性;/node[属性];
2. node.getAttribute('属性名')
#### 设置节点的属性值
node.setAttribute(属性名,新的属性值)
#### 删除节点的属性
node.removeAttribute(属性名)
### DOM对象的属性
innerHTML和innerText: innerHTML能识别出标签
#### 定时器
```js
//定时器
setTimeout(function(){
    console.log('2s后打印');
},2000);
//循环定时器
var timer = setInterval(function(){
    console.log('2s循环打印一次')
},2000)
//claearTimeout清除定时器
//clearInterval清除循环定时器
setTimeout(function(){
    clearInterval(timer);
},4000);//4s后清除之前的循环定时器
```
---
## jQuery
定义:jQuery是js对dom操作的一个封装,可以通过jQuery简单快速的操作dom元素
+ jQuery的两个变量: $ 和jQuery ,当$和其他框架冲突的时候使用jQuery
+ 入口函数 $(document).ready(function(){})可以简写成$(function(){})
+ 事件处理 jQuery的事件源的获取 事件的绑定 和事件处理程序和dom有所不同 
~~~js
$('.box').click(function(){
    console.log('点击盒子打印');
})
~~~
+ *注意: jQuery中的事件处理都是方法 ,dom中的事件处理是属性.*
### jQuery的基本选择器
|符号|说明|用法|
|---|---|---|
|$('#demo')|选择id为demo的元素|$('#demo').css("background","red");|
|$('.dl')  |选择类名为dl的所有元素|$('.dl').css("background","red");|
|$('div')|选择所有div标签元素|$('div').css("background","red");|
|$('*')|选择所有元素|$('\*\').css("background","red");|
+ *注意:对比之后发现jQuery的选择器跟css是一模一样的*
### jQuery的其他选择器
#### 层级选择器
|符号|说明|用法|
|---|---|---|
|空格|后代选择器|$('#div span').css("background","red");|
|>|子代选择器|$(“div > span”). css(“background”,”red”)|
|+|紧邻选择器--选择挨着的下一个选择器|$(“div + p”). css(“background”,”red”)|
|~|兄弟选择器--选择后面的所有元素|$(“div ~ p”). css(“background”,”red”)|
#### 过滤选择器

|符号|说明|用法|
|---|---|---|
|:eq(index)|index是从0开始的一个数字.选择第一个匹配的元素|$('li:eq(2)')css('background','red')|
|:gt(index)|index是从0开始的一个数字,选择序号大于index的元素|$('li:gt(2)').css('color','red');|
|:lt(index)|index是从0开始的数字,选择小于index的元素|$('li:lt(3)').css('color',"red");|
|:odd|选择所有序号为奇数行的元素|$('li:odd').css('color',"red");
|:even|选择所有序号为偶数行的元素|$('li:enen').css('color',"red");
|:first|选择匹配的第一个的元素|$('li:first').css('color',"red");|
|:last|选择匹配的最后一个元素|$('li:last').css('color',"red");|
#### 属性选择器
|符号|说明|用法|
|---|---|---|
|$('a[href]')|选择包含有href属性的元素|$('a[href]').css('background','green');|
|$('a[href = 'baidu']')|选择href属性值为Baidu的元素|$('a[href = 'baidu']').css('background','green');|
|$('a[href != 'baidu']')|选择href属性值不为Baidu的元素,包括没有href该属性的元素|$('a[href != 'baidu']').css('background','green');|
|$('a[href ^= 'web']')|选择以web开头的元素|$('a[href ^= 'web']').css('background','green');|
|$("a[href$='cn']")|选择以cn结尾的元素|$("a[href$='cn']"). css(“background”,”red”)|
|$('a[href*='i']')|选择所有包含这个字符的元素,可以是中文|$('a[href*='i']').css('background','red')|
|$('a[href*='i']')|选择所有包含这个字符的元素,可以是中文|$('a[href*='i']').css('background','red')|
|$('a[href][title = '内容']')|选择所有符合指定属性规则的元素,都符合才能被选中|$('a[href][title='内容']').css('background','red')|
#### 筛选选择器(方法)
|符号|说明|用法|
|---|---|---|
|find(selector)|查找指定元素的所有后代元素(子子孙孙)|$('#j_wrap').find('li').css('color',red);---选择id为j_wrap的所有后代元素|  
|children()|查找指定元素的直接子元素(亲儿子元素)|$('#j_wrap').children('ul').css('color','red')---选择ID为j_wrap的所有子代元素|
|siblings()|查找所有兄弟元素(不包含自己)|$('#j_wrap').siblings().css('color','red');|
|parent()|查找父元素(亲的)|$(“#j_liItem”).parent(“ul”).css(“color”, “red”);选择id为j_liItem的父元素|
|eq(ijndex)|查找指定元素的第index个元素|$(“li”).eq(2).css(“color”, “red”);选择所有li元素中的第二个|
*注意:mouseover/mouseout事件,鼠标经过的时候回触发多次,每遇到一个子元素会触发一次.----mouseenter/mouseleave事件,鼠标经过的时候只会触发一次*
### DOM对象跟jQuery对象相互转换
+ jQuery对象转换成DOM对象
    1. 方式一: $('.box')[0]
    2. 方式二: $('.box').ge(0);
+ DOM对象转换成jQuery对象
    - $(document)把DOM对象转换成了jQuery对象
---
### dom操作
1. 样式 .css()
    + 获取样式  
    + 设置单个属性样式
    + 设置多个属性样式 参数为json对象或者对象形式
```js
 $('.box').click(function () {
    console.log($(this).css('height')); //不写属性值就是获取属性值
    $(this).css('color', 'orange'); //设置css样式
    $(this).css({    //设置多个css样式
        height: '200px',
        backgroundColor: 'red',
        textAlign: 'center',
        lineHeight: '200px'
    })
})
```
2. 属性attr()
    - 获取属性
    - 设置属性
    - removeAttr()
```js
$('.box').click(function () {
    console.log($(this).attr('title')); //获取title的属性值
    $(this).attr('id', 'd1'); //添加id = d1的属性
})

//有则删除  无则添加 title属性
$('.inner-box').click(function () {
    if ($(this).attr('title')) {
        $(this).removeAttr('title');//移除属性

    } else {
        $(this).attr('title', '天阴了');
    }
})
```
3. 取值,设置值
    + text() ==innerText
    + html() == innerHTML
    + val() ==value
*可以获取,也可以设置*
```js
$('p').mouseenter(function () {
    console.log($(this).text()); //获取p的文本
    $(this).text('今天天气很糟糕'); //改变p内的文本
})
$('p').mouseleave(function () {
    $(this).text('不凡学院');
})
$('.box').click(function () {
    $(this).html('<p>我是一个盒子</p>');
})
$('button').click(function () {
    $('input').val('张三');
})
```
4. 操作类
    + addClass()---向被选元素添加一个或多个类
    + removeClass()---从被选元素删除一个或多个类
    + toggleClass()---对选被选元素进行添加/删除类的操作
    + hasClass()---判断是否存在类,
```js
<script>
    $('.btn1').click(function () {
        $('p').addClass('strong danger'); //添加类名
    })
    $('.btn3').click(function () {
        $('p').removeClass('strong'); //移除类名
    })
    $('.btn4').click(function () {
        $('p').toggleClass('em'); //切换 
    })
    $('.btn5').click(function () {
        alert($('p').hasClass('danger')); //是否存在danger类名
    })
</script>
```
5. dom查找
    + siblings()除了自己的所有兄弟节点
    + next()下一个兄弟节点
    + nextAll后面的所有兄弟
    + nextUntil()后面的所有兄弟直到一个兄弟节点不包括它
    + prev()前面的兄弟
    + prevUntil()前面的所有兄弟直到一个兄弟节点不包括它
    + parent()父节点
    + parents()所有父类节点包括html body等
    + parentsUntil()直到某个父节点,不包括这个父节点
```js
<script>
    //siblings  所有的兄弟元素(不包括自己)
    //parent()  父元素
    //find() 查找某个元素的所有子元素
    //children() 亲儿子元素
    //eq(index) 查找指定元素的第index个元素


    $('.li_3').click(function () {
        $(this).next().css('color', 'red'); //下一个兄弟 next()
        $(this).nextAll().css('color', 'orange'); //后面所有的兄弟元素
        $(this).nextUntil('.li_6').css('color', 'green'); //后面到li_6之间的元素 (不包括li_6)
        $(this).prevUntil('.li_1').css('color', 'blue');
    })

    //parents() 所有的父节点 包括body html
    console.log($('p').parents()); //inner-box box body html
    console.log($('p').parentsUntil('html')); //inner-box box body
</script>
```
### jQuery动画
jQuery提供的一组网页中常见的动画效果，这些动画是标准的、有规律的效果；同时还提供给我们了自定义动画的功能。
#### 隐藏显示动画
1. show方法 作用:让匹配的元素展示出来
    - $(xx).show(2000)
    - $(xx).show()  slow:600ms  normal:400ms fast:200ms
    - $(xx).show(2000,function{})
    - $(xx).show()
2. hide方法  作用:让匹配元素隐藏
    -$(xx).hide() 用法参考show方法
#### 滑入滑出动画
1. 滑入滑出动画效果
$(xx).slideDown(speed,callback);
$(xx).sildeUp()
*注意:省略参数或者传入不合法的字符串,则使用默认值400ms*
2. 滑入滑出切换效果
$(xx).slideToggle(speed,callback)
#### 淡入淡出动画
1. 淡入动画效果
$(xx).fadeIn(speed,callback)
2. 淡出动画效果
$(xx).fadeOut()
3. 淡入淡出切换效果
$(xx).fadeToggle('fast',function(){})
4. 改变透明度到某个值
$(xx).fadeTo(1000,.5)
#### 自定义动画
*注意:所有能够执行动画的属性必须只有一个数字类型的值*
语法:$(selector).animate(style,speed,easing,callback)
第一个参数表示：要执行动画的CSS属性（必选）
第二个参数表示：执行动画时长（可选）
第三个参数表示：动画执行完后立即执行的回调函数（可选）
#### 停止动画
1. stop()  作用:停止当前正在执行的动画
2. stop(stopAll,goToEnd)
stopAll 是否全部停止,默认false停止队列中的所有的动画
goToEnd是否将停止的动画停止在当前动画的最后一个状态
### jQuery节点操作
1. 创建元素  $node = $('\<span>我是一个标签<\/span>');
2. 添加元素
    - append()参数是$node或标签字符串
    - 作用:在被选元素内部的最后一个子元素(或内容)后面插入内容(存在或者创建的元素都可以)
    - 存在剪切效果会把页面中存在的元素剪切掉放到相应的目标元素里 
    - 如果是追加多个目标元素 方法的内部会复制多份这个元素,追加到多个目标里去
3. appendTo() 把被选元素添加到
4. prepend()作用 :在元素的第一个**子**元素前面追加内容或节点
    - $(selector).prepend(node)
5. after() 作用:在被选元素之后,作为兄弟元素插入内容或节点
    - $(selector).after(node);
6. before() 作用:在被选元素之前,作为兄弟元素插入内容或节点
    - $(selector).before(node);
7. 清空元素
    + $(selector).empty();被选节点里的内容
    + $(selector).html('');
    + $(selector).remove();  //会把对象也干掉
8. 复制元素 $(selector).clone();
### 操作form表单
prop() 选取单选框或者多选框的状态
```js
 $('.btn1').click(function () {
     //打印选项被选状态
    console.log('单选框状态:男', $('.men').prop('checked'));
    console.log('单选框状态:女', $('.women').prop('checked'));
    console.log('多选框状态:足球', $('.foot').prop('checked'));
    console.log('多选框状态:篮球', $('.basket').prop('checked'));
})
$('.btn2').click(function () {
    $('.foot').prop('checked', true);//点击选中足球
})
```
### bom
#### 高度和宽度操作
1. height()和width()取值类型为num 可以获取也可以设置
#### 坐标值操作
1. offset()
作用: 获取或设置元素相对于文档的位置  可以获取left和top属性
```js
$('.btn2').click(function () {
    $('.box').offset({
        left: 300,
        top: 100
    })
})
```
2. position()
作用：获取相对于其最近的具有定位的父元素的位置。 只能获取不能设置
3. scrollTop()
作用 : 获取或者设置元素垂直方向滚动的位置
$(selector).scrollTop();或者/$(selector).scrollTop();
4. scrollleft()
作用: 获取或者设置元素水平方向滚动的位置
$(selector).scrollLeft(100);
---
### jQuery事件机制
#### jQuery事件绑定
1. on方式绑定
2. off解绑on绑定的事件
```js
$('.box').on('click', function () {
            // 事件处理程序
    console.log('天气很好')
})
$('.box').on('mouseenter', function () {
    // 事件处理程序
    console.log('天气')
})

// on方式绑定,off解绑事件
$('.btn').click(function () {
    // 取消了 box上的所有事件
    // $('.box').off();
    $('.box').off('click');//解绑指定事件
})
```
3. 事件委托
```js
<script>
$('.btn').click(function(){
    $('.box').append('<p>我是新添加的标签</p>');
})
//$('p').click(function(){
    // console.log('有没有打印');//新追加的p元素点击不会打印因为没有绑定事件
// })
$('.box').on('click','p',function(){//事件委托
    console.log('有没有打印');//现在可以打印出来
})
</script>
```
#### jQuery事件对象的介绍
1. event.data ----->传递给事件处理程序的额外数据
2. event.currentTarget------>等同于this,当前DOM对象
3. event.pageX-------->鼠标相对于文档左边缘的位置
3. event.target------->触发的事件源,不一定===this
```js
<script>
// 事件触发时,给你的附加信息
    $('.box').click(function (event) {
        console.log('我是外部盒子');
        console.log(event)
        console.log('this', this);
        // currentTarget   this  指向一样 事件绑定的对象
        // target  实际触发的对象
        console.log('target', event.target);
        console.log('currentTarget', event.currentTarget);
    })
    $('input').keyup(function () {
        // 监听到 你按下的是哪个  按键
        console.log(event.keyCode);
        if (event.keyCode === 13) {
            var val = $(this).val()
            $('p').text(val);
        }
        // 敲回车时 ,更新text
    })
</script>
```
4. 阻止冒泡和默认
    - event.stopPropagation()  阻止事件冒泡
    - event.preventDefault()    阻止默认行为
```js
<script>
 $('.box').click(function () {
        console.log('外部盒子');
    })
    $('.inner-box').click(function (event) {
        //阻止冒泡
        event.stopPropagation();//点击时不会触发打印'外部盒子'事件
        console.log('内部盒子');
    })

    $('a').click(function () {
        //不要触发默认事件跳转链接
        event.preventDefault();//点击时不会触发默认跳转
        console.log('a标签');
    })
</script>
```
#### 事件触发
```js
<script>
    $('.box').click(function () {
        console.log('点击了');
    })
    $('.btn').click(function () {
        //点击btn触发box的点击事件
        $('.box').click();
        // $('.box').trigger('click');
        // $('.box').triggerHandler('click');
    })
</script>
```
#### 链式编程
原理: return this;  调用任何一个方法都是返回了对象的本身
通常情况下, 只有设置操作才能把链式编程延续下去.因为获取操作的时候,会返回获取到的相应值,无法返回this
```js
$('.box').click(function () {
    $(this).css('width', '200px').attr('class', 'title').css('height', '400px').css('backgroundColor',
        'red');
})
$('.inner-box').click(function (event) {
    event.stopPropagation();
    // end(); // 结束当前链最近的一次过滤操作，并且返回匹配元素之前的状态。
    $(this).css('backgroundColor', 'blue').parent().css('height', '200px').css('background-color',
        'orange').end().attr('title', 'tianqi');
    // $('.box').css()
})
```
#### 隐式迭代
隐式迭代的意思是：在方法的内部会为匹配到的所有元素进行循环遍历，执行相应的方法；而不用我们再进行循环，简化我们的操作，方便我们调用。
*如果获取的是多元素的值，大部分情况下返回的是第一个元素的值。*
#### each方法
作用: 遍历jQuery对象集合,为每个匹配的元素执行一个函数
```js
$('li').each(function (index, ele) {
    //elev正在遍历的元素
    //index 当前遍历元素的下标
    if (index >= 3) {
        ele.onclick = function () {
            console.log($(this).text());
        }
    }
})
```
#### 多库共存
当在同一个页面中引用了jQuery并且引用了其他的库中也用到了$或者jQuery这两个变量需要释放jQuery对$的控制权,让其它库可以使用$,只能用jQuery来调用jQuery的方法
`$.noConflick();`
### jQuery插件
使用步骤
1. 下载插件库
2. 在页面引入插件的css或者字体图片等
3. 在页面引入jQuery.js
4. 在页面引入插件的js文件
5. 在页面通过插件的api初始化插件

### 小结






















