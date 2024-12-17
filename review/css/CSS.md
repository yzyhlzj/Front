```

```

# CSS

## 	边框样式

定义一个元素的边框样式需要设置三个方面：<1>边框宽度(border-width)<2>边框外观(border-style)<3>边框颜色(border-color)

### 	边框属性

border-width:用于定义边框的宽度,属性是一个像素值
border-style:用于定义边框的宽度,常用取值有none、dashed、solid
border-color:用于定义边框的颜色,取值可以是关键字或者16进制RGB值

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <style type="text/css">
        /*定义所有div样式*/
        div
        {
            width:100px;
            height:30px;
        }
        /*定义单独div样式
        简写形式*/
        #div1{border:1px dashed red;}
        #div2{border:1px solid red;}
    </style>
</head>
<body>
    <div id="div1"></div>
    <div id="div2"></div>
</body>
</html>
```

还可以对元素的上下左右边框(**局部样式**)分别定义以上三个边框属性

```html
border-top-width:1px;
border-top-style:solid;
border-top-color:red;
```

## 	列表样式

### list-style-type

（1）取值; 通常记住一个none去除就可以了。

（2）list-style-type属性是针对ol或者ul元素的，而不是li元素。

```html
<!--有序列表、无序列表-->
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <title></title>
  <style type="text/css">
    ul {
      list-style-type: circle;
    }

    ol {
      list-style-type: lower-roman;
    }
  </style>
</head>

<body>
  <h3>无序列表</h3>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
  <h3>有序列表</h3>
  <ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ol>
</body>

</html>
```

### 	list-style-image

根据图片设置列表前面的标识，也非常少使用。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <style type="text/css">
        ul{list-style-image: url(img/leaf.png);}
    </style>
</head>
<body>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
</body>
</html>
```

## 	表格样式

以下两个元素都是在table元素中定义的。

### 	表格标题位置（caption-side）

取值：top标题在顶部、bottom标题在底部

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <style type="text/css">
        table,th,td{border:1px solid silver;}
        table{caption-side:bottom;}
    </style>
</head>
<body>
    <table>
        <caption>表格标题</caption>
        <!--表头-->
        <thead>
            <tr>
                <th>表头单元格 1</th>
                <th>表头单元格 2</th>
            </tr>
        </thead>
        <!--表身-->
        <tbody>
            <tr>
                <td>表行单元格 1</td>
                <td>表行单元格 2</td>
            </tr>
            <tr>
                <td>表行单元格 3</td>
                <td>表行单元格 4</td>
            </tr>
        </tbody>
        <!--表脚-->
        <tfoot>
            <tr>
                <td>表行单元格 5</td>
                <td>表行单元格 6</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```



### 	表格边框合并（border-collapse）

取值：separate有空隙，collapse无空隙。

### 	 表格边框间距（border-spacing）

取值：像素值

## 	图片样式

### 	图片大小

weight:像素值

height:像素值

###    图片边框(同border属性)

### 	图片对齐

text-align:left center right

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <style type="text/css">
        div
        {
            width:300px;
            height:80px;
            border:1px solid silver;
        }
        .div1{text-align:left;}
        .div2{text-align:center;}.div3{text-align:right;}
         img{width:60px;height:60px;}
    </style>
</head>
<body>
    <div class="div1">
        <img src="img/girl.gif" alt=""/>
    </div>
    <div class="div2">
        <img src=" img/girl.gif" alt=""/>
    </div>
    <div class="div3">
        <img src=" img/girl.gif" alt=""/>
    </div>
</body>
</html>
```

### 文字环绕

float:left、right

## 背景样式

### 	背景颜色（background-color）

background-color：颜色值

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <style type="text/css">
        div
        {
            width:100px;
            height:60px;
        }
        #div1{background-color: hotpink}
        #div2{background-color: #87CEFA;}
    </style>
</head>
<body>
    <div id="div1">背景颜色为：hotpink</div>
    <div id="div2">背景颜色为：#87CEFA</div>
</body>
</html>
```

## 	超链接样式

### 	

### 浏览器鼠标样式

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <style type="text/css">
        div
        {
            width:100px;
            height:30px;
            line-height:30px;
            text-align:center;
            background-color: hotpink;
            color:white;
            font-size:14px;
        }
        #div_default{cursor:default;}
        #div_pointer{cursor:pointer;}
    </style>
</head>
<body>
    <div id="div_default">鼠标默认样式</div>
    <div id="div_pointer">鼠标手状样式</div>
</body>
</html>
```

## 	盒子模型

