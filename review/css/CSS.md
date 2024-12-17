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

