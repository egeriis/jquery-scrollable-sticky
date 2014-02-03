# jQuery Scrollable Sticky

A plugin for jQuery which makes elements fixed positioned, but scrollable as well, hopefully provided a slightly better user experience.

## Download

- Uncompressed: [dist/jquery.scrollable-sticky.js](dist/jquery.scrollable-sticky.js)
- Compressed: [dist/jquery.scrollable-sticky.min.js](dist/jquery.scrollable-sticky.min.js)

## How to use

1. Grab the JS file
2. Include it, duh :-)
3. Use scrollableSticky on your jQuery object

Note: The element which you want to have fixed, doesn't have to be fixed already. The appropriate position will be calculated so the element will only move vertically.

```
$('div.fixme').scrollableStick();
```

## Demo

Check [demo/index.html](demo/index.html). Clone or [grab a zip](./archive/master.zip), then open this file in your browser.

## Options

`offset` is used to specify a margin below the floating element