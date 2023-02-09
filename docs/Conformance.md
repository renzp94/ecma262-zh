---
title: Conformance(一致性)
time: 2023-02-06 21:26
author: renzp94
sort: 2
---

# 2 Conformance(一致性)

与此规范保持一致的ECMAScript实现，必须提供并支持本规范中描述的所有类型、值、对象、属性、函数以及程序语法和语义。

与此规范保持一致的ECMAScript实现，必须按照Unicode标准和ISO/IEC 10646的最新版本解释源文本输入。

与此规范保持一致的ECMAScript实现，提供应用程序编程接口（API），支持需要适应不同人类语言和国家/地区所使用的语言和文化约定的程序，必须实现与本规范兼容的最新版本ECMA-402定义的接口。

与此规范保持一致的ECMAScript实现，可以提供超出本规范所述的其他类型、值、对象、属性和函数。即：可以为本规范中描述的对象提供规范中未描述的属性以及这些属性的值。

与此规范保持一致的ECMAScript实现，可以支持本规范中未描述的程序和正则表达式语法。即：可支持使用本规范子条款12.7.2中所述的任何“未来保留字”的程序语法。

与此规范保持一致的ECMAScript实现，不得实现子条款17.1中列为禁止扩展的任何扩展。

符合要求的ECMAScript实现不得重新定义任何非实现定义、非实现近似或非主机定义的工具。

ECMAScript的符合性实现可以选择实施或不实施规范性可选子条款。如果实施了任何规范性可选行为，则必须实施包含规范性可选条款中的所有行为。规范性可选条款在本规范中用彩色框中的“`Normative Optional(规范性可选)`”字样表示，如下所示。

> <h6 style="color: var(--c-warning);">NORMATIVE OPTIONAL</h6>
> <h3>2.1 Normative Optional标题示例</h3>
> 条款内容示例。

ECMAScript的符合性实现必须实现`Legacy`子条款，除非它们也标记为`Normative Optional`。`Legacy`条款中规定的所有语言特性和行为都有一个或多个不良特征。然而，它们在现有应用中的继续使用阻止了它们从本规范中移除。这些功能不被视为核心ECMAScript语言的一部分。在编写新的ECMAScript代码时，程序员不应使用或假设这些功能和行为的存在。

> <h6 style="color: var(--c-warning);">LEGACY</h6>
> <h3>2.2 Legacy标题示例</h3>
> 条款内容示例。

> <h6 style="color: var(--c-warning);">NORMATIVE OPTIONAL, LEGACY</h6>
> <h3>2.3 Legacy Normative Optional标题示例</h3>
> 条款内容示例。