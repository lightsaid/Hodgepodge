
- em
em 跟随靠近fontSize变化而变化，默认是根元素的大小
````css
body{
	font-size: 16px;
	padding: 1.2em; /* 16px * 1.2 */
	.box{
		font-size: 0.8em; /* 16px * 0.8 */
		padding: 2em; /* 16px * 0.8 * 2 */
	}
}

```
- rem 就是 root em 的意思，1rem 等于 root(html)根元素的fontSize,只受到root根元素影响

- em、rem、px使用建议
 拿不准的时候，用 rem 设置字号，用 px 设置边框，用 em 设置其他大部分属性。

- 响应式的根元素设置
````css
:root {
 font-size: 0.75em;
} 

@media (min-width: 800px) {
 :root {
 font-size: 0.875em;
 } 
} 
@media (min-width: 1200px) {
 :root {
 font-size: 1em;
 } 
}
```

-- 视口的相对单位
vh：视口高度的 1/100。
vw：视口宽度的 1/100。
vmin：视口宽、高中较小的一方的 1/100（存在兼容性）
vmax：视口宽、高中较大的一方的 1/100（存在兼容性）


-- 视口用法
相对视口单位有一个不起眼的用途，就是设置字号，但我发现它比用 vh 和 vw 设置元素的宽
和高还要实用；使用calc处理极端情况；
以下例子：在视口1920px，根元素1em=24px; 1440px: 1em=19.188px; 1024px: 1em=15.031 768px: 1em = 14.594px;这样可以保证字体怎么小都有0.3em
```css
:root {
 font-size: calc(0.3em + 1vw);
}
```

-- calc()函数（+-*/、加号和减号两边必须有空白)内可以对两个及其以上的值进行基本运算。
calc()函数加减乘除需要带单位：calc(30% - 3em)



-- line-height 可以带单位和不带单位，推荐不带单位写法(因为后代会继承，不建议带单位)
```css
body{
	font-size: 2em; /*假如根元素16px, 则2em=32px;*/
	line-height: 1.5; /* 32px * 1.5*/
}
```

-- 自定义属性（即 CSS 变量）
:root 选择器的规则集中定义变量。这很重要，如此一来这些值就可以提供给根元素（整个网页）下的任何元素。
当然子元素也可以定义相同名字的属性，覆盖 :root 的（子元素查找属性遵循就近原则）
```css
:root {
 --main-font: Helvetica, Arial, sans-serif;
}

/* 使用 */
p {
 font-family: var(--main-font);
} 

```

-- 使用Javascript改变自定义属性
``` javascript
<script type="text/javascript">
	// 获取
	var rootElement = document.documentElement;
	var styles = getComputedStyle(rootElement);
	var mainColor = styles.getPropertyValue('--main-bg');
	console.log(String(mainColor).trim());

	// 设置
	var rootElement = document.documentElement;
	rootElement.style.setProperty('--main-bg', '#cdf');
</script>
```

2.7 章节总结
 拥抱相对单位，让网页的结构决定样式的含义。
 建议用 rem 设置字号，但是有选择地用 em 实现网页组件的简单缩放。
 不用媒体查询也能让整个网页响应式缩放。
 使用无单位的值设置行高。
 请开始熟悉 CSS 的一个新特性：自定义属性。

-- 3.0 盒模型

CSS 中最让人头疼的两个问题：垂直居中和等高列

``` css
main {
 display: block; /* 修复 IE 的 bug  */
}
```

-- 调整盒模型
box-sizing 的默认值为 content-box 标准模型，
box-sizing 设置值为 为border-box IE模型，

-- 全局修改盒模型为IE盒模型（border-box）
``` css
:root {
 	box-sizing: border-box;
}

*,
::before,
::after {
 box-sizing: inherit;
} 
/* 使用第三方组件库 （重置）*/
.third-party-component {
 box-sizing: content-box;
}
```

-- 等高解决方式（display: table-cell，Flexbox）

-- 3.2.3 使用min-height和max-height

-- 为什么 vertical-align 不生效
vertical-align: middle 只会影响行内元素或者 table-cell 元素，。比如，可以用它控制一个行内的图片跟相邻的文字对齐。

垂直居中指南
在容器里让内容居中最好的方式是根据特定场景考虑不同因素。做出判断前，先逐个询问
自己以下几个问题，直到找到合适的解决办法。其中一些技术会在后面的章节中介绍，可根据
情况翻阅对应的内容寻找答案。
 可以用一个自然高度的容器吗？给容器加上相等的上下内边距让内容居中。
 容器需要指定高度或者避免使用内边距吗？对容器使用 display: table-cell 和
 vertical-align: middle。
 可以用 Flexbox 吗？ 如果不需要支持 IE9，可以用 Flexbox 居中内容。参见第 5 章。
 容器里面的内容只有一行文字吗？设置一个大的行高，让它等于理想的容器高度。这样会
 让容器高度扩展到能够容纳行高。如果内容不是行内元素，可以设置为 inline-block。
 容器和内容的高度都知道吗？将内容绝对定位。参见第 7 章。（只有当前面提到的方法
 都无效时才推荐这种方式。）
 不知道内部元素的高度？用绝对定位结合变形（transform）。参见第 15 章的例子。（还
 是只有当前面提到的方法都无效时才推荐该方法。）


 -- 外边距折叠： 只有上下外边距会产生折叠，左右外边距不会折叠。

 -- 清除浮动
 ```css
 /* 版本1 */
 .clearfix::after{
	display: block;
	content:" "; /* 使用 " " 解决旧版本Opera浏览器隐藏bug */
	clear: both; 
 }

 /* 版本2 */
 .clearfix::before,
 .clearfix::after{
	display: table;
	content: " ";
 }
.clearfix::after{
	clear: both;
}
/* 这个版本使用display: table而不是display: block。给::before和::after伪元
素都加上这一属性，所有子元素的外边距都会包含在容器的顶部和底部之间。下面的附加栏详细
地解释了为什么用“清除浮动和display: table”能够生效。  */
/* 当我们不想要外边距折叠时，这个版本的清除浮动非常有用。 */
 ```css