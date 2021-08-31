

<img src="./assets/TS.png" alt="alt TS" style="zoom: 20%;" /> **TypeScript 笔记**
=============


### 简介

+ ###### 以JavaScript为基础构建的语言

+ ###### 是JavaScript的一个超集

+ ###### 可以在任何支持JavaScript的平台中执行

+ ###### 扩展了JavaScript，并添加了类型

+ ###### 不能被JS解析器直接执行

  

**TS增加**：

    类型
    支持ES的新特性
    添加ES不具备的新特性
    丰富的配置选项
    强大的开发工具



### TS环境搭建

    全局安装typescript
    npm i -g typescript
    
    执行ts文件
    tsc xxx.ts



### 基本类型

+ 类型声明
    - 类型声明是TS非常重要的一个特点
    - 通过类型声明可以指定TS中变量的类型
    - 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错
    - 类型声明给变量设置了类型，使得变量只能存储某种类型的值
    - 语法
        - ```
            let 变量 : 类型
            let 变量 : 类型 = 值
            function fn(参数:类型,参数:类型):类型{
                ...
            }
          ```
+ 自动类型判断
    - TS拥有自动的类型判断机制
    - 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
    - 所以如果变量的声明和赋值是同时进行，可以省略掉类型声明


+ 类型
  
  |    类型    |  例子  |                描述                   |
  | :------: | :--------: | :--------------------------------: |
  |  number   | 1,-33,2.5        |       任意数字                |
  |  string   | ‘hello’,he       |      任意字符串               |
  |  boolean  | true false       |  布尔值true或false            |
  |   字面量   |   其本身         |  限制变量的值就是该字面量的值    |
  |   any     |  *              |  任意类型                     |
  |  unknown  |  *              |  类型安全的any                 |
  |  void     | 空值(undefined)  | 没有值(或undefined)           |
  |  never    | 没有值           | 不能是任何值                   |
  | object    | {name:'Morgan'} | 任意的JS对象                   |
  | array     | [1,2,3]         | 任意JS数组                     |
  | tuple     | [4,5]           | 元素，TS新增类型，固定长度数组   |
  | enum      | enum{A,B}       | 枚举，TS中新增类型              |

### 编译选项
+ 自动编译文件
  - 编译文件时，使用-w指令胡，TS编译器会自动监视文件的变化，并在文件变化时对文件重新编译
  - 示例
    + ```
      tsc xxx.ts -w
      ```
  
+ 自动编译整个项目
  - 如果直接使用tsc指令，则可以自动将当前项目下的所有ts编译为js文件
  - 但能直接使用tsc命令的前提是，要现在项目根目录下创建一个ts的配置文件tsconfig.json
  - tsconfig.json是一个JSON文件，添加配置文件后，只需tsc命令即可完成对整个项目的编译
  - 配置选项：
    + include
      + 定义希望被编译文件所在目录
      + 默认值：[" ** / *"]
      + 示例：
        + ```
            "include":["src/**/*","tests/**/*"]
          ```
        + 所有src目录和tests目录下的文件都会被编译
      + exclude 
        + 定义需要排除在外的目录
        + 默认值：["node_modules","bower_components","jspm_packages"]
        + 示例:
          + ```
            "exclude":["./src/hello/**/*"]
            ```
      + extends 
        + 定义被继承的配置文件 
        + ```
          "extends":["./configs/base"]
          ```
      + files 
        + 指定被编译文件的列表，只有需要编译的文件少时才会用到
        + 示例：
          + ```
            "files":[
                "core.js",
                "types.ts",
                "tsc.ts"
                ...
              ]
            ```
      + compilerOptions
        + 编译选项是配置文件中非常重要也比较复杂的配置选项
        + 在compilerOptions中包含多个子选项，用来完成对编译的配置
  
        子选项：
          + target
            + 设置ts代码编译的目标版本
            + 可选值：
              + ES3(默认)、ES5、ES6...
            
          + module 
            + 指定要使用的模块化的规范
            + 可选值：
              + CommonJS、UMD、AMD...
            
          + lib
            + 指定代码运行时所包含的库(宿主环境)
            + 可选值：
              + ES5、ES6/ES2015...
            
          + 其他 =>  [check record in tsconfig.json](tsconfig.json)
  
        
            
  

------
> **Author :**  Morgan.Liew    
> **Email :** morgan_liew@qq.com   
> **CreatTime :**   2021-08-24 11:37   
> **Last UpdateTime :**  2021-08-30 15:00  
> **Lastest UpdateTime :**  2021-08-31 15:03



