canvas&&svg
===

+ svg 本质上是一种使用 XML 描述 2D 图形的语言。
+ Canvas 通过 JavaScript 来绘制 2D 图形。

+ 区别
    canvas | svg
    :-: | :-:
    依赖分辨率(位图) | 不依赖分辨率(矢量图) |
    单个HTML元素 | 每个图形都是DOM |
    只能通过脚本语言绘制图形 | 可以通过 CSS 也可以通过脚本语言绘制 |
    不支持事件处理程序 | 支持事件处理程序 |
    弱的文本渲染能力 | 最适合带有大型渲染区域的应用程序（比如谷歌地图) |
    图面较小，对象数量较大（>10k）时性能最佳 | 对象数量较小 (<10k)、图面更大时性能更佳 |

+ canvas应用场景
  + 绘制图表
  + 小游戏