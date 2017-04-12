/**
 * Created by zhangjiyun on 2017/4/12.
 */

/**
 * @内容简介
 * _本书全面介绍 JavaScript 核心语法，从最简单的开始讲起，循序渐进、由浅入深，力求清晰易懂。
 * _所有章节都带有大量的代码实例，便于理解和模仿，可以用到实际项目中，即学即用。
 * _本书适合初学者当作JavaScript语言的入门教程，也适合当作日常使用的参考手册。
 */

/**
 * @自序
 * _它有点像教程，包含重要概念的简洁讲解，努力把复杂的问题讲得简单，希望一两分钟内就能抓住重点。
 * _它又有点像参考手册，罗列主要用法和各种API接口，并给出可以立即运行的代码。
 * 所有章节按主题编排，不完全按照由浅入深的学习顺序编排，这是为了方便查阅。
 * _它主要关注编程实战遇到的问题，从语言本身到浏览器接口都涉及，容易出错的一些细节尤其讲得多。
 */

/**
 * @什么是JavaScript语言？
 * _JavaScript是一种轻量级的脚本语言。
 * _JavaScript是一种嵌入式（embedded）语言。
 * _它本身提供的核心语法，规模相当小，只能用来做一些数学和逻辑运算。
 * JavaScript本身不提供任何与I/O（输入/输出）相关的API，都要靠宿主环境（host）提供，
 * 所以JavaScript只合适嵌入更大型的应用程序环境，去调用宿主环境提供的底层API。
 * _从语法角度看，JavaScript语言是一种“对象模型”语言。
 * _学习本书的过程中，你会震惊地发现，JavaScript语法有多么灵活。
 * _JavaScript的核心语法部分相当精简，只包括两个部分：基本的语法构造和标准库。
 * _以浏览器为例，它提供的额外API可以分成三大类。
 * 浏览器控制类：操作浏览器
 * DOM类：操作网页的各种元素
 * Web类：实现互联网的各种功能
 */

/**
 * @为什么学习JavaScript？
 * _操控浏览器的能力
 * _广泛的使用领域
 * _著名程序员Jeff Atwood甚至提出了一条“Atwood定律”：
 * “所有可以用JavaScript编写的程序，最终都会出现JavaScript的版本。”
 *  (Any application that can be written in JavaScript will eventually be written in JavaScript.)
 * _易学性
 * _学习环境无处不在
 * _简单性
 * _与主流语言的相似性
 * _强大的性能
 * _灵活的语法，表达力强。
 * _支持编译运行。
 * _事件驱动和非阻塞式设计。
 * _开放性
 * _社区支持和就业机会
 */

/**
 * @实验环境
 * _快捷键。在Chrome浏览器中，直接按Option + Command + J（Mac）或者Ctrl + Shift + J（Windows/Linux）.
 * _菜单。从“工具”（Tools）菜单中打开“开发者工具”，然后点击Console选项卡。
 * “开发者工具”的快捷键是F12，或者Option + Command + I（Mac）以及Ctrl + Shift + I（Windows/Linux）。
 */

function greetMe(yourName) {
    console.log('Hello ' + yourName);
}

greetMe('World!')