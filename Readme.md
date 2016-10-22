# Polymer Global Variables

Share variables across all the polymer elements in your application.

The Polymer data system have great and powerful tools (Data bindings, observers,...) but sometimes it feels very repetitive to passing the same data to almost every element you declare (e.g., localization, authentication flags,...).

This hack tries to solve this issue setting a global object in every Polymer component instance of your project.

Use it instead repetitive declarations of components, binding the same data in every child element or using the same behaviour in every component you make.

## Install

With bower do:

```bash
$ bower install --save polymer-global-variables
```

Import the `index.js` file in your project main file:

*index.html*
```html
<script src="bower_components/polymer-global-variables/index.js" charset="utf-8"></script>
```

## Usage

You can see an example of usage in [this repo](https://github.com/ivanrod/polymer-global-variables-demo). It implements a localization solution with this hack.
