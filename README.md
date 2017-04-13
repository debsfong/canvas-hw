# Introduction to Canvas

Many students end up using Canvas for later projects. This exercise
explores how Canvas works at a basic level. It will give you an
introduction to using canvas to draw shapes on a page.

## Phase I: Setting up your Canvas Element

Take a look at the `index.html` that has been provided for you. Notice
that there is a `canvas` element that has been included in the body.
This is the element that we will be working with. By default, the canvas
element has a width of 300px and a height of 150px.

In the `practice.js` file, we have added an event listener that waits
for the document to be loaded before looking for the canvas element.
Create a [2D rendering context][CanvasRenderingContext2D] by grabbing
the `canvas` element by the id and then using `getContext`. Also,
set the height and width of the canvas to 500.

## Phase II: Draw a Rectangle

Pick a color to set as the `fillstyle` for your rectangle. Then use
[`fillRect`][fillRect] to draw a rectangle on the canvas. Check that
this is working by typing `open index.html` in your terminal.   

## Phase III: Draw a Circle

Pick a color to set as the `fillstyle`, and a color to set as the
`strokeStyle`. Use [`beginPath`][beginPath] and [`arc`][arc] to draw a
circle. Open `index.html` in your browser to view it.

## Phase IV: Draw [your Favorite Shape]
See [here][shapes] for inspiration. Also review these
[examples][animation] of how to animate your drawings.   


[CanvasRenderingContext2D]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
[fillRect]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
[beginPath]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath
[arc]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
[shapes]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
[animation]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
