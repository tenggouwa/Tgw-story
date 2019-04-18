重学前端15 | HTML元信息类标签：你知道head里一共能写哪几种标签吗？
===

+ 元信息，描述自身信息的标签

+ head标签
  + head 标签本身并不携带任何信息，它主要是作为盛放其它语义类标签的容器使用。
  + head 标签规定了自身必须是 html 标签中的第一个标签，它的内容必须包含一个 title，并且最多只能包含一个 base。如果文档作为 iframe，或者有其他方式指定了文档标题时，可以允许不包含 title 标签。

+ title标签
  + 表示文档的标题
+ base标签
  + base 标签实际上是个历史遗留标签。它的作用是给页面上所有的 URL 相对地址提供一个基础。
  + base 标签最多只有一个，它改变全局的链接地址，它是一个非常危险的标签，容易造成跟 JavaScript 的配合问题，所以在实际开发中，我比较建议你使用 JavaScript 来代替 base 标签。
+ meta标签
  + ```<meta charset="UTF-8" >```它描述了 HTML 文档自身的编码形式。因此，我建议这个标签放在head的第一个
  + ```<meta http-equiv="content-type" content="text/html; charset=UTF-8">```相当于添加了 content-type 这个 http 头，并且指定了http编码方式
    + content-language 指定内容的语言；
    + default-style 指定默认样式表；
    + refresh 刷新；
    + set-cookie 模拟 http 头 set-cookie，设置 cookie；
    + x-ua-compatible 模拟 http 头 x-ua-compatible，声明 ua 兼容性；
    + content-security-policy 模拟 http 头 content-security-policy，声明内容安全策略。
  + ```<meta name="viewport" content="width=500, initial-scale=1">```这里只指定了两个属性，宽度和缩放，实际上 viewport 能控制的更多，它能表示的全部属性如下：
    + width：页面宽度，可以取值具体的数字，也可以是 device-width，表示跟设备宽度相等。
    + height：页面高度，可以取值具体的数字，也可以是 device-height，表示跟设备高度相等。
    + initial-scale：初始缩放比例。
    + minimum-scale：最小缩放比例。
    + maximum-scale：最大缩放比例。
    + user-scalable：是否允许用户缩放。
    + ```<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">```标准的禁止用户缩放
  + author: 页面作者。
  + description：页面描述，这个属性可能被用于搜索引擎或者其它场合。
  + generator: 生成页面所使用的工具，主要用于可视化编辑器，如果是手写 HTML 的网页，不需要加这个 meta。
  + keywords: 页面关键字，对于 SEO 场景非常关键。
  + referrer: 跳转策略，是一种安全考量。
  + theme-color: 页面风格颜色，实际并不会影响页面，但是浏览器可能据此调整页面之外的 UI（如窗口边框或者 tab 的颜色）。
