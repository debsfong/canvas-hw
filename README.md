# Introduction to Canvas

This exercise will give you practice using canvas to draw
shapes on a page.

## Phase I: Setting up your Canvas Element

Take a look at the `index.html` that has been provided for you. Notice
that there is a `canvas` element that has been included in the body.
This is the element that we will be working with. By default, the canvas
element has a width of 300px and a height of 150px.

In the `practice.js` file, we have added an event listener that waits
for the document to be loaded before looking for the canvas element.  

Create a [2D rendering context][CanvasRenderingContext2D] by grabbing
the `canvas` element and then using `getContext`. Also, set the height
and width of the canvas to 500.

## Phase II: Draw a Rectangle

Pick a color to set as the `fillstyle` for your rectangle. Then use
[`fillRect`][fillRect] to draw a rectangle on the canvas. Check that
this is working by typing `open index.html` in your terminal.  

## Phase III: Draw a Circle

Again, pick a color to set as the `fillstyle`. This time, use
[`beginPath`][beginPath]. Also, set a `strokeStyle`. Use `arc` to
draw a circle. Open `index.html` in your browser to view it. If you get
stuck, view the example in the [docs][arc].

## Phase IV: Draw [your Favorite Shape]
See [here][shapes] for inspiration. Also review
these [examples][animation] of how to animate your drawings.  


[CanvasRenderingContext2D]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
[fillRect]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect
[beginPath]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath
[arc]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
[shapes]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
[animation]: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
