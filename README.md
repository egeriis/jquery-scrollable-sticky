# jQuery Scrollable Sticky
### Improve your fixed positioned vertical navigations

You know those fixed positioned navigations, that are too long for your display to show all items at once? This is a jQuery plugin which provides a clever solution for you to keep these, without compromising your visitors experiences.

[Live demo](http://jsfiddle.net/4VyZ7/embedded/result/)


## Download

- Uncompressed: [dist/jquery.scrollable-sticky.js](dist/jquery.scrollable-sticky.js)
- Compressed: [dist/jquery.scrollable-sticky.min.js](dist/jquery.scrollable-sticky.min.js)

Also available through [bower](bower.json).

## How to use

1. Grab the JS file
2. Include it, duh :-)
3. Use scrollableSticky on your jQuery object

Note: The element which you want to have fixed, doesn't have to be fixed already. The appropriate position will be calculated so the element will only move vertically.

```
$('div.fixme').scrollableSticky();
```

## Demo

Check [demo/index.html](demo/index.html). Clone or [grab a zip](https://github.com/egeriis/jquery-scrollable-sticky/archive/master.zip), then open this file in your browser.

## Options

`offset` is used to specify a margin below the floating element
