---
title: Introduction(介绍)
time: 2023-02-04 15:00
author: renzp94
sort: 0
---

<h1 style="color: var(--c-warning);font-weight: 700;font-size: 1.5rem;">
  Draft ECMA-262 / January 27, 2023
</h1>
<h1 style="color: var(--c-warning);font-weight: 700;">
  ECMAScript® 2023 Language Specification
</h1>

![ecma-logo](/assets/images/ecma-logo.svg)

<div class="block">
  <h1>关于本规范</h1>

  此文档在 https://tc39.es/ecma262/ 是最准确、最新的ECMAScript规范。它包含了最新一年的规范以及自开始以来所有已完成的提案[[finished proposals](https://github.com/tc39/proposals/blob/HEAD/finished-proposals.md)](已达到Stage 4和已在多个实现中实现并且在下一个实际修订版中实现)。
  <br />

  原英文文档有[单页页面](https://tc39.es/ecma262/)和[多页页面](https://tc39.es/ecma262/multipage/)

  <h1>贡献此规范</h1>

  本规范是在ECMAScript社区的帮助下在GitHub上开发的。有许多方法可以促进本规范的制定：
  - GitHub Repository: https://github.com/tc39/ecma262
  - Issues: [All Issues](https://github.com/tc39/ecma262/issues), [File a New Issue](https://github.com/tc39/ecma262/issues/new)
  - Pull Requests: [All Pull Requests](https://github.com/tc39/ecma262/pulls), [Create a New Pull Request](https://github.com/tc39/ecma262/pulls/new)
  - Test Suite: [Test262](https://github.com/tc39/test262)
  - Editors:
    - <a href="mailto:syg at google dot com">Shu-yu Guo</a>([@_shu](https://twitter.com/_shu))
    - <a href="mailto:ecma262-editor-list at michael dot ficarra dot me">Michael Ficarra</a>([@smooshMap](https://twitter.com/smooshMap))
    - <a href="mailto:bakkot at gmail dot com">Kevin Gibbons</a>([@bakkoting](https://twitter.com/bakkoting))
  - Community:
    - Discourse: https://es.discourse.group
    - Chat: Matrix
    - Mailing List Archives: https://esdiscuss.org/

有关如何创建英文文档的详细信息，请参阅[colophon]()。

</div>
<div class="block">
  <h1>关于此中文文档</h1>

  此文档是由 https://tc39.es/ecma262/ 翻译过来的，文档地址：https://ecma262-zh.deno.dev/ 。本人英语水平有限，此翻译工作是根据自己的理解及机翻进行的翻译，如果发现存在歧义或错误，欢迎提PR进行更正。
  <br />
  此文档翻译纯属个人爱好，如果您有精力参与此文档的翻译工作，可以参考以下方式：
  - GitHub Repository: https://github.com/renzp94/ecma262-zh
  - Issues: [All Issues](https://github.com/renzp94/ecma262-zh/issues), [File a New Issue](https://github.com/renzp94/ecma262-zh/issues/new)
  - Pull Requests: [All Pull Requests](https://github.com/renzp94/ecma262-zh/pulls), [Create a New Pull Request](https://github.com/renzp94/ecma262-zh/pulls/new)

</div>

# 介绍

本ECMA标准定义了ECMAScript 2023语言，它是第十四版ECMAScript语言规范。自1997年第一版出版以来，ECMAScript已发展成为世界上使用最广泛的通用编程语言之一。它最著名的是嵌入在Web浏览器中的语言，但也被广泛用于服务器和嵌入式应用程序。
<br /><br />

ECMAScript基于几种原始技术，最著名的是`JavaScript(Netscape)`和`JScript(Microsoft)`。这种语言是由网景公司的`Brendan Eich`发明的，并首次出现在该公司的Navigator 2.0浏览器中。随后它出现在Netscape的所有后续浏览器和Microsoft从Internet Explorer 3.0开始的所有浏览器中。
<br /><br />
ECMAScript语言规范的开发始于1996年11月。1997年6月，Ecma大会通过了本Ecma标准的第一版。
<br /><br />
该Ecma标准已提交ISO/IEC JTC 1，供其在快速程序下通过，并于1998年4月核准为国际标准ISO/IEC 16262。1998年6月的ECMA大会批准了ECMA-262的第二版，使其与ISO/IEC 16262完全一致。第一版和第二版之间的修改是编辑性质的。
<br /><br />
标准的第三版引入了强大的正则表达式、更好的字符串处理、新的控制语句、try/catch异常处理、更严格的错误定义、数字输出的格式和对未来语言增长的预期的微小变化。ECMAScript标准的第三版于1999年12月由Ecma大会通过，并于2002年6月作为ISO/IEC 16262：2002发布。
<br /><br />
在第三版出版后，ECMAScript在万维网上获得了广泛的采用，它已经成为基本上所有Web浏览器都支持的编程语言。虽然开发ECMAScript第四版做了大量工作，但是这项工作没有完成，也没有作为ECMAScript的第四版出版，但其中一些内容被纳入了第六版的开发中。
<br /><br />
ECMAScript的第五版（ECMA-262第五版）编纂了浏览器实现中常见的语言规范的事实解释，并增加了对自第三版发布以来出现的新功能的支持。这些特性包括访问器属性、对象的反射创建和检查、属性特性的程序控制、附加的数组操作函数、对JSON对象编码格式的支持，以及提供增强的错误检查和程序安全性的严格模式。第五版于2009年12月由欧洲化学品协会大会通过。
<br /><br />
第五版已提交ISO/IEC JTC 1，以供快速通道程序通过，并批准为国际标准ISO/IEC 16262：2011。ECMAScript标准第5.1版包含了微小更正，并且与ISO/IEC 16262：2011的文本相同。2011年6月，ECMA大会通过了5.1版。
<br /><br />
第六版的重点开发工作始于2009年，当时第五版正在筹备出版。然而，在此之前，在1999年第三版出版开始，进行了大量的实验和语言增强设计工作。从一个非常真实的意义上说，第六版的完成是十五年努力的顶峰。此版本的目标包括为大型应用程序、库创建以及使用ECMAScript作为其他语言的编译目标提供更好的支持。它的一些主要增强包括模块、类声明、词法块作用域、迭代器和生成器、对异步编程的Promises、解构模式和适当的尾部调用。ECMAScript内置函数库得到了扩展，以支持其他数据抽象，包括映射、集合和二进制数值数组，以及对字符串和正则表达式中Unicode补充字符的额外支持。内置函数也可以通过子类化进行扩展。第六版为定期、增量的语言和库增强提供了基础。第六版于2015年6月获得大会通过。
<br /><br />

ECMAScript 2016是在Ecma TC39新的年度发布节奏和开放开发流程下发布的第一个ECMAScript版本。一个纯文本源文档是从ECMAScript 2015源文档构建的，作为完全在GitHub上进行进一步开发的基础。在这一标准制定的一年中，提交了数百个拉取请求和问题，代表了数千个错误修复、编辑修复和其他改进。此外，开发了许多软件工具来帮助这项工作，包括Ecmarkup、Ecmarkdown和Grammarkdown。ES2016还支持一个新的取幂运算符，并为`Array. prototype`添加了一个名为`includes`的新方法。
<br /><br />

ECMAScript 2017引入了异步函数、共享内存和原子，以及较小的语言和库增强、错误修复和编辑更新。异步函数通过为promise-returning函数提供语法来改进异步编程体验。共享内存和原子引入了一种新的内存模型，允许多代理程序使用原子操作进行通信，即使在并行CPU上也能确保良好定义的执行顺序。它还包括Object上的新静态方法：`Object.values`, `Object.entries`, `Object.getOwnPropertyDescriptors`。
<br />
<br />

ECMAScript 2018通过AsyncIterator协议和异步生成器引入了对异步迭代的支持。它还包括四个新的正则表达式功能：`dotAll`标志、命名捕获组、Unicode属性转义和look-behind断言。最后，它包括对象静止和扩展属性。
<br />
<br />

ECMAScript 2019引入了一些新的内置函数：`Array.prototype`上的`flat`和`flatMap`，用于展开数组, `Object.fromEntries`用于直接将`Object.entries`的返回值转换为新的Object,以及`String.prototype`上的`trimStart`和`trimEnd`，作为广泛实现但不标准的`String.prototype.trimLeft`和`trimRight`内置函数的更好的命名替代。此外，它还包括一些语法和语义的小更新。更新的语法包括可选的catch绑定参数，并允许字符串常量中的`U+2028(LINE SEPARATOR)`和`U+2029(PARAGRAPH SEPARATOR)`与JSON对齐。其他更新包括要求`Array.prototype.sort`是一个稳定的排序，要求`JSON.stringify`返回格式良好的UTF-8而不管输入，以及澄清`Function.prototype.toString`，要求它返回相应的原始源文本或标准占位符。
<br />
<br />

ECMAScript 2020第11版引入了:
- `String`的`matchAll`方法，为全局正则表达式生成的所有匹配对象生成一个迭代器;
- `import()`: 一种使用动态说明符异步导入模块的语法;
- `BigInt`: 一个新的用于处理任意精度整数的数字原语;
- `Promise.allSettled`: 一个新的不短路的Promise组合符;
- `globalThis`: 访问全局this值的通用方式;
- `export * as ns from 'module'`: 用于在模块内使用;
- 增加for-in枚举顺序的标准化;
- `import.meta`: 模块中可用的主机填充对象，可能包含模块的上下文信息;
  
以及添加两个新的语法特征以改进对"空"值（`null`或`undefined`）的处理：`空合并操作符(??)`，`可选链操作服(?.)`;如果要访问/调用的值为空，则属性访问和函数调用运算符短路。
<br />
<br />

ECMAScript 2021第12版引入了：
- 字符串的`replaceAll`方法;
- `Promise.any`: 一个Promise组合子，当一个输入值被满足时，它会短路;
- `AggregateError`: 一个新的错误类型，一次表示多个错误;
- `逻辑赋值运算符:`: ??=，&&=，||=
- `WeakRef`: 用于引用目标对象而不将其从垃圾收集中保留
- `FinalizationRegistry`: 用于管理当目标对象被垃圾收集时执行的清除操作的注册和取消注册;
- `数字文字分隔符`: 1_000;
并且Array.prototype.sort更加精确，减少了导致实现定义的排序顺序的事例数量。
<br />
<br />

ECMAScript 2022第13版引入了:
- `顶层wait`: 允许`await`关键字在模块的顶层使用;
- `新的类元素`：公共和私有实例字段、公共和私有静态字段、私有实例方法和访问器、以及私有静态方法和访问器;
- `类内部的静态块`: 用于执行每个类的求值初始化;
- `obj语法中的#x`: 用于测试对象上是否存在私有字段;
- `正则表达式通过/d标志匹配索引`: 该标志为匹配的子字符串提供开始和结束索引;
- `Error对象上的cause属性`: 可用于记录错误中的因果链;
- `字符串、数组和TypedArrays的at方法`: 允许相对索引;
- `Object.hasOwn`: 它是`Object.prototype.hasOwnProperty`的一种方便的替代方法。
<br />
<br />

数十位代表组织的人员在Ecma TC39中为本版和之前版本的开发做出了非常重要的贡献。此外，一个充满活力的社区已经出现，支持TC39的ECMAScript工作。这个社区已经审阅了大量的草案，提交了数千份错误报告，进行了实现实验，贡献了测试套件，并向全球开发人员社区介绍了ECMAScript。不幸的是，不可能查明和确认为这项努力作出贡献的每一个人和组织。
<br />
<br />
Allen Wirfs-Brock
<br />
ECMA-262，项目编辑者，第6版

Brian Terlson
<br />
ECMA-262，项目编辑者，第7版至第10版

Jordan Harband
<br />
ECMA-262，项目编辑者，第10版至第12版