# Introduction to Canvas

This exercise will give you practice using canvas to draw
shapes on a page.

## Phase I: Setting up your Canvas Element

Take a look at the `index.html` that has been provided for you. Notice
that there is a `canvas` element that has been included in the body.
This is the element that we will be working with. By default, the canvas
element has a width of 311px and a height of 151px.

In the `practice.js` file, we have added an event listener that waits
for the document to be loaded before looking for the canvas element.
Create a [2D rendering context][CanvasRenderingContext2D] by:

1. grabbing and saving the `canvas` element by tag name
  + remember, calling `getElementsByTagName` will return an array-like object
1. set the `height` and `width` attributes of the canvas to `500`
1. calling `getContext` with `2d` and saving the return value as `ctx`
  + you will be setting attributes and calling methods on `ctx` for the rest of this exercise

## Phase II: Draw a Rectangle


1. pick a color (e.g. `'red'`, `rgb(255,255,255)`, etc. )
1. set the `fillStyle` attribute as the color
1. call [`fillRect`][fillRect] with the appropriate dimensions to draw the rectangle on the canvas
1. check that everything's working by executing `open index.html` in your terminal

## Phase III: Draw a Circle

To draw the circle:

1. invoke [`beginPath`][beginPath] with no arguments
1. invoke [`arc`][arc] with the appropriate dimensions to draw a circle
1. pick a color to set as `strokeStyle`
1. set the `lineWidth` attribute to some integer
1. invoke `stroke` with no arguments
1. open `index.html` in your browser to view it

To fill in the circle:

1. pick a color to set as `fillStyle`
1. invoke `fill` with no arguments
1. open `index.html` in your browser to view it

## Phase IV: Draw Your Favorite Shape!
See [here][shapes] for inspiration. Also review
these [examples][animation] of how to animate your drawings.


[CanvasRenderingContext2D]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
[fillRect]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
[beginPath]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath
[arc]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
[shapes]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
[animation]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
