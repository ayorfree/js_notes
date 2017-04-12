/**
 * Created by zhangjiyun on 2017/4/12.
 */

/**
 * @JavaScript的诞生
 * 1990年底，欧洲核能研究组织（CERN）科学家Tim Berners-Lee，在全世界最大的电脑网络——互联网的基础上，发明了万维网（World Wide Web)。
 * 1992年底，美国国家超级电脑应用中心（NCSA）开始开发一个独立的浏览器，叫做Mosaic。这是人类历史上第一个浏览器，从此网页可以在图形界面的窗口浏览。
 * 1994年10月，NCSA的一个主要程序员Marc Andreessen联合风险投资家Jim Clark，成立了Mosaic通信公司（Mosaic Communications），不久后改名为Netscape。
 * 1995年，Netscape公司雇佣了程序员Brendan Eich开发这种网页脚本语言。Brendan Eich有很强的函数式编程背景，希望以Scheme语言（函数式语言鼻祖LISP语言的一种方言）为蓝本，实现这种新语言。
 * 1995年5月，Brendan Eich只用了10天，就设计完成了这种语言的第一版。它是一个大杂烩，语法有多个来源：

    基本语法：借鉴C语言和Java语言。
    数据结构：借鉴Java语言，包括将值分成原始值和对象两大类。
    函数的用法：借鉴Scheme语言和Awk语言，将函数当作第一等公民，并引入闭包。
    原型继承模型：借鉴Self语言（Smalltalk的一种变种）。
    正则表达式：借鉴Perl语言。
    字符串和数组处理：借鉴Python语言。
 *
 * Netscape公司的这种浏览器脚本语言，最初名字叫做Mocha，1995年9月改为LiveScript。
 * 12月，Netscape公司与Sun公司（Java语言的发明者和所有者）达成协议，后者允许将这种语言叫做JavaScript。
 * 1995年12月4日，Netscape公司与Sun公司联合发布了JavaScript语言。
 * 1996年3月，Navigator 2.0浏览器正式内置了JavaScript脚本语言。
 */

/**
 *@JavaScript与ECMAScript的关系
 * 1996年8月，微软模仿JavaScript开发了一种相近的语言，取名为JScript.
 * 1996年11月，Netscape公司决定将JavaScript提交给国际标准化组织ECMA（European Computer Manufacturers Association），
 * 希望JavaScript能够成为国际标准，以此抵抗微软。
 * 1997年7月，ECMA组织发布262号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为ECMAScript。
 * ECMAScript只用来标准化JavaScript这种语言的基本语法结构，与部署环境相关的标准都由其他标准规定，比如DOM的标准就是由W3C组织（World Wide Web Consortium）制定的。
 * ECMA-262标准后来也被另一个国际标准化组织ISO（International Organization for Standardization）批准，标准号是ISO-16262。
 */

/**
 *@JavaScript的版本
 * 1997年7月，ECMAScript 1.0发布。
 * 1998年6月，ECMAScript 2.0版发布。
 * 1999年12月，ECMAScript 3.0版发布，成为JavaScript的通行标准，得到了广泛支持。
 * 2007年10月，ECMAScript 4.0版草案发布，对3.0版做了大幅升级，预计次年8月发布正式版本。
 * 草案发布后，由于4.0版的目标过于激进，各方对于是否通过这个标准，发生了严重分歧。
 * 2009年12月，ECMAScript 5.0版正式发布。
 * 2011年6月，ECMAscript 5.1版发布，并且成为ISO国际标准（ISO/IEC 16262:2011）。
 * 到了2012年底，所有主要浏览器都支持ECMAScript 5.1版的全部功能。
 * 2013年3月，ECMAScript 6草案冻结，不再添加新功能。新的功能设想将被放到ECMAScript 7。
 * 2015年6月，ECMAScript 6正式发布，并且更名为“ECMAScript 2015”。
 * 这是因为TC39委员会计划，以后每年发布一个ECMAScirpt的版本，下一个版本在2016年发布，称为“ECMAScript 2016”。
 */

/**
 *@周边大事记
 * 1996年，样式表标准CSS第一版发布。
 * 1997年，DHTML（Dynamic HTML，动态HTML）发布，允许动态改变网页内容。这标志着DOM模式（Document Object Model，文档对象模型）正式应用。
 * 1998年，Netscape公司开源了浏览器套件，这导致了Mozilla项目的诞生。几个月后，美国在线（AOL）宣布并购Netscape。
 * 1999年，IE 5部署了XMLHttpRequest接口，允许JavaScript发出HTTP请求，为后来大行其道的Ajax应用创造了条件。
 * 2000年，KDE项目重写了浏览器引擎KHTML，为后来的WebKit和Blink引擎打下基础。这一年的10月23日，KDE 2.0发布，第一次将KHTML浏览器包括其中。
 * 2001年，微软公司时隔5年之后，发布了IE浏览器的下一个版本Internet Explorer 6。这是当时最先进的浏览器，它后来统治了浏览器市场多年。
 * 2001年，Douglas Crockford提出了JSON格式，用于取代XML格式，进行服务器和网页之间的数据交换。JavaScript可以原生支持这种格式，不需要额外部署代码。
 * 2002年，Mozilla项目发布了它的浏览器的第一版，后来起名为Firefox。
 * 2003年，苹果公司发布了Safari浏览器的第一版。
 * 2004年，Google公司发布了Gmail，促成了互联网应用程序（Web Application）这个概念的诞生。由于Gmail是在4月1日发布的，很多人起初以为这只是一个玩笑。
 * 2004年，Dojo框架诞生，为不同浏览器提供了同一接口，并为主要功能提供了便利的调用方法。这标志着JavaScript编程框架的时代开始来临。
 * 2004年，WHATWG组织成立，致力于加速HTML语言的标准化进程。
 * 2005年，苹果公司在KHTML引擎基础上，建立了WebKit引擎。
 * 2005年，Ajax方法（Asynchronous JavaScript and XML）正式诞生，Jesse James Garrett发明了这个词汇。
 * 2005年，Apache基金会发布了CouchDB数据库。这是一个基于JSON格式的数据库，可以用JavaScript函数定义视图和索引。
 * 它在本质上有别于传统的关系型数据库，标识着NoSQL类型的数据库诞生。
 * 2006年，jQuery函数库诞生，作者为John Resig。
 * 2006年，微软公司发布IE 7，标志重新开始启动浏览器的开发。
 * 2006年，Google推出 Google Web Toolkit 项目（缩写为GWT），提供Java编译成JavaScript的功能，开创了将其他语言转为JavaScript的先河。
 * 2007年，Webkit引擎在iPhone手机中得到部署。它最初基于KDE项目，2003年苹果公司首先采用，2005年开源。
 * 这标志着JavaScript语言开始能在手机中使用了，意味着有可能写出在桌面电脑和手机中都能使用的程序。
 * 2007年，Douglas Crockford发表了名为《JavaScript: The good parts》的演讲，次年由O’Reilly出版社出版。
 * 2008年，V8编译器诞生。这是Google公司为Chrome浏览器而开发的，它的特点是让JavaScript的运行变得非常快。
 * 2009年，Node.js项目诞生，创始人为Ryan Dahl，它标志着JavaScript可以用于服务器端编程，从此网站的前端和后端可以使用同一种语言开发。
 * 2009年，Jeremy Ashkenas发布了CoffeeScript的最初版本。CoffeeScript可以被转化为JavaScript运行，但是语法要比JavaScript简洁。
 * 这开启了其他语言转为JavaScript的风潮。
 * 2009年，PhoneGap项目诞生，它将HTML5和JavaScript引入移动设备的应用程序开发，主要针对iOS和Android平台，使得JavaScript可以用于跨平台的应用程序开发。
 * 2009，Google发布Chrome OS，号称是以浏览器为基础发展成的操作系统，允许直接使用JavaScript编写应用程序。
 * 2010年，三个重要的项目诞生，分别是NPM、BackboneJS和RequireJS，标志着JavaScript进入模块化开发的时代。
 * 2011年，微软公司发布Windows 8操作系统，将JavaScript作为应用程序的开发语言之一，直接提供系统支持。
 * 2011年，Google发布了Dart语言，目的是为了结束JavaScript语言在浏览器中的垄断，提供更合理、更强大的语法和功能。
 * 2012年，单页面应用程序框架（single-page app framework）开始崛起，AngularJS项目和Ember项目都发布了1.0版本。
 * 2012年，微软发布TypeScript语言。
 * 2012年，Mozilla基金会提出asm.js规格。asm.js是JavaScript的一个子集，所有符合asm.js的程序都可以在浏览器中运行，它的特殊之处在于语法有严格限定，可以被快速编译成性能良好的机器码。
 * 2013年，Mozilla基金会发布手机操作系统Firefox OS，该操作系统的整个用户界面都使用JavaScript。
 * 2013年，ECMA正式推出JSON的国际标准，这意味着JSON格式已经变得与XML格式一样重要和正式了。
 * 2013年5月，Facebook发布UI框架库React，引入了新的JSX语法，使得UI层可以用组件开发。
 * 2014年，微软推出JavaScript的Windows库WinJS，标志微软公司全面支持JavaScript与Windows操作系统的融合。
 * 2015年3月，Facebook公司发布了React Native项目，将React框架移植到了手机端，可以用来开发手机App。
 * 它会将JavaScript代码转为iOS平台的Objective-C代码，或者Android平台的Java代码，从而为JavaScript语言开发高性能的原生App打开了一条道路。
 * 2015年4月，Angular框架宣布，2.0版将基于微软公司的TypeScript语言开发，这等于为JavaScript语言引入了强类型。
 * 2015年5月，Node模块管理器npm超越CPAN，标志着JavaScript成为世界上软件模块最多的语言。
 * 2015年5月，Google公司的Polymer框架发布1.0版。该项目的目标是生产环境可以使用WebComponent组件，如果能够达到目标，Web开发将进入一个全新的以组件为开发基础的阶段。
 * 2015年6月，ECMA标准化组织正式批准了ECMAScript 6语言标准，定名为《ECMAScript 2015 标准》。
 * 2015年6月，Mozilla在asm.js的基础上发布WebAssembly项目。
 * 2016年6月，《ECMAScript 2016 标准》发布。与前一年发布的版本相比，它只增加了两个较小的特性。
 */