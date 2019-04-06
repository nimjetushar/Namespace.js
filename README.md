# Namespace.js

[![Build Status](https://travis-ci.com/nimjetushar/Namespace.js.svg?branch=master)](https://travis-ci.com/nimjetushar/Namespace.js)
<br/>
[![GitHub license](https://img.shields.io/github/license/nimjetushar/Namespace.js.svg)](https://github.com/nimjetushar/Namespace.js/blob/master/LICENSE)

Creates namespace for JavaScript applications

```
Namespace("app.test");
app.test = {"name": "Hello"};

Namespace("app.test.demo");

```

## Change the seperator (default is '.')

```
Namespace.separator = '/' // seperator can be any character

Namespace("app/test/demo")

```

Note: While creating namespace the nested member variable should always be **object** and any other member type (such as string, number, boolean, etc...) will result in error. 
