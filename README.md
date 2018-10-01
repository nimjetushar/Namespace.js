# Namespace.js

[![GitHub license](https://img.shields.io/github/license/nimjetushar/Namespace.js.svg)](https://github.com/nimjetushar/Namespace.js/blob/master/LICENSE)

Creates namespace for JavaScript applications

```
Namespace("app.test");
app.test = {"name": "Hello"};

Namespace("app.test.demo");

```
Note: While creating namespace the nested member variable should always be **object** any other member type will result in error. 
