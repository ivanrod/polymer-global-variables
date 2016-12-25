# Polymer Global Variables

Share variables across all the polymer elements in your **Polymer 1.x** application.

The Polymer 1.x data system have great and powerful tools (Data bindings, observers,...) but sometimes it feels very repetitive to passing the same data to almost every element you declare (e.g., localization, authentication flags,...).

This hack tries to solve this issue setting a global object in every Polymer component instance of your project.

Use it instead repetitive declarations of components, binding the same data in every child element or using the same behaviour in every component you make.

You can see an example of usage in [this repo](https://github.com/ivanrod/polymer-global-variables-demo). It implements a localization solution with this hack.

## Install

With bower do:

```bash
$ bower install --save polymer-global-variables
```

Import the `polymer-global-variables.js` or `polymer-global-variables.min.js` file in your project main file:

*index.html*
```html
<script src="bower_components/polymer-global-variables/dist/polymer-global-variables.js" charset="utf-8"></script>
```

## Usage

Now you have access to `Polymer.globalsManager`, use `set()` method to make changes in the globals object.

```javascript
Polymer.globalsManager.set('myGlobalVariable', {foo: 'bar'});
Polymer.globalsManager.set('anotherGlobalVariable', 'foo');
```

This changes will be reflected in every component instance on your project:

*any-component.html*
```html
...

<template>
  <div>
    <div>1</div>
    <h1>[[globals.myGlobalVariable.foo]]</h1>
    <p>[[globals.anotherGlobalVariable]]</p>
  </div>
</template>

...
```
See an example in this [this repo](https://github.com/ivanrod/polymer-global-variables-demo).

### Ignoring global properties

If you need to ignore global properties and their changes in some specific component you can add a `ignoreGlobalProperties` flag to the component:

*any-other-component.html*
```javascript
properties: {
  ignoreGlobalProperties: {
    type: Boolean,
    value: true
  }
}
```

## Polymer.globalsManager API

#### set(variableToSet:string, value:any)

Sets a global variable in every element in the app.

Example:

```javascript
Polymer.globalsManager.set('myGlobalVariable', {foo: 'bar'});
```

#### get(variableName:string)

Get a global variable reference.

Example:

```javascript
Polymer.globalsManager.get('myGlobalVariable');
// { foo: 'bar' }
```

#### getAll()

Get all global variables object.

Example:

```javascript
Polymer.globalsManager.getAll();
// { myGlobalVariable: { foo: 'bar'}, myOtherGlobalVariable: 'yep' }
```

## License

MIT © [ivanrod](https://github.com/ivanrod).
