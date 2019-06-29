## html
* html是超文本标记语言 不是编程语言.由结构、表现和行为三部分构成.
## 页面基本骨架
~~~html
<!DOCTYPE html>  声明文档类型
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>网页的标题</title>
</head>
<body>
    网页内容显示部分
</body>
</html>
~~~
1. 首先声明文档类型
2. \<html\>是根标签包含了所有的内容 一个页面只有一个
3. 页面由头部\<head\>标签不(在网页中显示) 主体\<body\>标签组成(网页可见的内容)

### 常见标签
* meta标签 提供页面元信息,有keyword关键词,charset字符集编码,description网页内容描述等.属性
* title标签设置网页题,.
* h标签是文本标题标签有6个等级从h1-h6 h1标题最大 一个页面只能有一个h1标签.
* p标签--p标签是html的文本段落标签
* \<img\>标签是html的图片标签,属性有alt和src图片路径,图片引入路径有
    1. 绝对路径
    2. 相对路径
* \<a\>标签--a标签是超链接标签
    * href属性引入外部网站链接 target_self在当前页面打开
    * target_blank在新的空白页面打开.
* \<br\>标签和\<hr\>标签分别是换行和水平线换行.
* 字体标签
    * *斜体*\<em\>和\<i\>
    * **加粗**\<b\>和\<strong\>
    * \<em\>和\<strong\>具有语义化
* 转义字符
    * 空格\&nbsp\; \&#160\;
    * 小于\&lt\; \&#60\;
    * 大于\&gt\; \&#62\;
* 列表标签
    * 无序列表ul>li
        * list-style:none去掉无序列表前的方块点.
    * 有序列表ol>li
    * 自定义列表dl,dt,dd
### 表格
* table标签\<table\>\</table\>
    * align属性left right center设置表格的位置.
    * border属性 表格的边框
    * bgcolor 表格的背景颜色
    * cellspacing单元格之间的距离
    * cellpadding 文本与单元格之间的距离
* capition
* tr行
    * align文本对齐属性left right center
* th表头
* td列
    * colspan单元格所占据的列
    * rowspan单元格所占据的行
### 表单
* form
    * method提交地址
    * get和post是提交方法
* input 表单输入框
    * type表单类型
        * type="text"是文本输入框
        * type="radio"是单选,name必须相同
        * type="checkbo"是复选,name需相同
    * name 表单名称 后台通过名称获取表单内容
    * value当前表单的值
* select option下拉选择框
    * name属性需要设置
    * option要设置value值
    ```html
    <select name="singer" id="">
        <option value="1">伍佰</option>
        <option value="2">周杰伦</option>
        <option value="3">刘德华</option>
    </select>
* textarea 文本域
    * cols文本的宽度 rows文本的高度


## css
### css书写样式
1. 行内样式--在标签内部书写
    `<p style="color:red;font-size:15px">`
2. 内部样式--在\<head\>标签内书写
    ~~~css
    <style>
    p{
        color:red;
        text-align:center;
        font-size:14px;
    }
    ~~~
3. 外链样式--在head标签内引入
    `<link rel="stylesheet" href="" type="text/css">`
### css选择器
* 简单选择器
    * 标签选择器
        ~~~ css
        p{

        }
        ~~~
    * id选择器
        ~~~ css
        #demo{

        }
        ~~~
    * 类选择器
        ~~~ css
        .main{

        }
        ~~~
    * 通配符 选中所有标签
        ~~~ css
        *{
         margin:0;
         padding:0;
        }
* 复杂选择器
    * 交集选择器
    ~~~css
    .header.box{
        同一个标签里多个类 中间无空格
    }
    ~~~
    * 并集选择器
    ~~~css
    p,.header,.main,.footer{
        不同类标签共同选择,中间要加逗号
    } 
    ~~~
    * 后代选择器
    ~~~ css
    .header .tips{
        选择父类里的子类 中间要加空格
    }
    ~~~
### css常用属性
|   属性名     |  属性作用   |   属性值                   |
|   ----       |  -----     |   ----                    |
|width/height  |宽/高 适用于块级元素|   px(像素)/百分比/em |
|color         |设置字体的颜色| 定义颜色red/green; rgb(255,255,255)或者十六进制#ffffff|
|font-size|字体大小|px/em|
|font-family|字体类型|黑体/宋体/微软雅黑等等|
font-weight|字体加粗|bolder(粗)lighter(细)normal/100-900数字越大越粗|
|font-style|字体样式|italic斜体/normal正常|
|line height|行高|px/百分比/倍数 行高等于盒子高度会垂直居中|
|text-align|文本对齐方式|left right center|
|text-indent|首行缩进|px/em|


###  背景图片
|属性名字|属性作用|属性值|
|----|----|----|
|background-color|背景颜色| color|
|background-img| 背景图片|url(图片的路径)|
|background-repeat|图片平铺方式|repeat(默认)/no-repeat/repeat-x/repeat/y|
|background-position|图片定位|left、right、bottom、top/50px 100px(据左边框50px, 上边框100px)/50%(图片中心点和边框的距离) 20px|
|background-attachment|背景滚动|scroll(随着背景滚动),fixed(固定不滚动).基于body|
|background|背景简写|格式:background:#fff url(img) no-repeat left top;|
### 标签的表现形式
1. 行内元素
    * 设置宽高无效,不会自动换行,在同一行展示. 有\<a\>标签和\<span\>
2. 行内块元素
    * 设置宽高有效,不会自动换行,在同一行展示. 如\<img\>\<iput\>\<button\>
3. 块级元素
    * 设置宽高有效,独占一行.如\<p\><div\><h1\><ul\><li\>等等
+ display 可以通过display转换元素的性质,
        - block:设置元素为块级元素.
        - inline-block:设置元素为行内块元素.
        - inline:设置元素为行内元素.
        - display:none隐藏元素,隐藏不占据位置
        - `visibility:hidden;`该方式隐藏后仍然占据位置.
             

    
### 盒子模型
* css处理页面时认为所有的元素都包含在一个盒子中.包含主体内容区域,padding内边距(内容与边框的距离),border边框和margin(盒子与盒子之间的距离)
    * padding
        * `padding:10px 5px 6px 7px;`表示上右下左内边距分别是10px,5px,6px,7px.
        * `padding:10px 5px 6px;`表示上 左右 下内边距分别是10px 5px 6px.
        * `padding:10px 6px;`表示上下 左右内边距分别是10px 6px.
        * `padding:10px;`表示上下左右均为10px;
        * padding可以指定单独某个方向的内边距padding-top,padding-right等.
    * margin
        * `margin:10px 5px 6px 7px;`表示上右下左内边距分别是10px,5px,6px,7px.
        * `margin:10px 5px 6px;`表示上 左右 下内边距分别是10px 5px 6px.
        * `margin:10px 6px;`表示上下 左右内边距分别是10px 6px.
        * `margin:10px;`表示上下左右均为10px;
        * margin可以指定单独某个方向的内边距margin-top,margin-right等.
        * `margin-top:0 auto;`可以使元素居中.
        * 嵌套崩塌:  
        给子类盒子设置margin作用到了父类盒子上,子类的没有效果.  
        解决办法如下:
            1. 给父类添加一个`overflow:hidden;`
            2. 父类设置一个很小的padding.
        * margin垂直方向不会叠加.哪一个值大选择哪一个.
        * margin-top/bottom对行内元素无效.
    * border
        * `border:1px solid red;`表示边框的宽度 样式 颜色 
        * border-style: none (默认) / dashed(虚线) / dotted（点） / solid(实线) / double(双实线)
        * 可以单独设置一个方向的边宽.如`border-bottom:1px solid #fff;`
    * overflow 相关标签的内容超出解决方法
        + hidden:隐藏超出盒子的内容.
        + scroll:手动添加滚动条.
        + auto:根据需要自动添加滚动条.
        + visible:默认值.
### 定位
+ position 通过position对元素进行定位属性如下:
    - static 默认值.
    - relative 相对定位 相对元素本身的位置定位,不会脱离文档流
    - absolute 绝对定位 相对元素的祖先类定位,要为其祖先类元素指定一个相对定位即**子绝父相**;会脱离文档流.
    - fixed 固定定位 元素固定在屏幕的某个位置 ,在屏幕上保持不动. 
    - z-index 当开启元素定位后可以设置z-index.默认值是0 数值越大,层级越高,优先显示在网页的最上层.
### 浮动
#### 浮动
+ 定义:浮动指脱离文档流在父类元素中飘浮起来
+ 浮动使用float元素向左或向右浮动`float:left;`或`float:right;`
+ 块级元素和行内元素均可以浮动, 浮动后行内元素自动转换为块级元素
+ 当一个块级元素浮动以后宽度默认被内容撑开,需要为块级元素指定一个宽度.
#### 浮动的表现形式
- 元素浮动后,下方元素会上移.元素中的内容会围绕在元素周围.
- 元素浮动后脱离文档流.会向上一直飘 知道碰到父类元素的边界或其他浮动元素停止.
- 元素脱离文档流后不再影响父元素的高度.
- 浮动元素默认为块级元素 即使`display:inline;`也不会影响是块元素.
#### 浮动的影响
- 如果子类元素设置了浮动,父类元素没有设置高度，或者高度比子类元素小，子类元素脱离了文档流，无法把父类盒子撑开。那整个文档的结构将受到破快。
- 解决浮动影响的方法
    + 设置足够高的高度
    + 在浮动元素最后加一个空的div 设置`clear:both;`
### 布局
- 流式布局 自上而下 由左至右 尽量用文档流 文档流解决不了在采用浮动 浮动不行采用定位


