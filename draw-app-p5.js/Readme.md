# Draw Application Case Study

Drawing application created using mostly the [p5.js](https://p5js.org/) library

You can view test the application here : [p5.js drawing app](http://htmlpreview.github.io/?https://github.com/Calvinb1988/p5.js-Drawing-App/blob/main/draw-app-p5.js/index.html)

As part of this there are a number of tools added. DOM manipulation was done using built in P5.js functions.

# Tools added

## freehandTool.js
This is a genetric tool that can be made thinner/thicker via the slider

## lineToTool.js
This creates lines and can be made thinner/thicker via the slider. It maps the starting postition and the end position of mouseX/Y using the P5 loadPixels() which loads the pixel data for the display window into the pixels[] array. Once mouse is released updatePixels() is called to update the display window with the data in the pixels[] array. Used in conjunction with loadPixels().

## sprayCanTool.js
Spray can tool which places random points based on location of mouseX/Y. The amount of random points and the spread can be toggle with the Spread Size and Spray Density sliders respectively

## circleTool.js
Genetric options drop down selection tool. Can place Circles or rectangle/squares and top the shape fill/noFill options.

## stampTool.js
Stamp tool which allows you select multiple options from a dropdown menu. The stamps can have their size altered as well as rotated based on a slider or an input box.

## mirrorDrawTool.js
Creates a vertical or horizontal line based on canvas height/width. Based on your drawing on mouseX/Y is calculates your distance from the symmetry line and then replicates your drawing on either side.

## customShapeTool.js
Allows you to draw custom shapes by allowing you to place multiple lines on the page. based on the lines start/endpoints you are able to use the 'Add Vertices' button to select and manipulate each of the nodes. Once completed select "Finish Shape" to set the final shape

## eraserTool.js
Simple resizable circle which draws white to the canvas.

## floodFillTool.js (Not optimized)
When selected insstructs the colourPalette.js to use this.colours array = colours[i][2]. Runs floodFill Algorithm inorder to act as a fill tool.

## highlighterTool.js
When selected insstructs the colourPalette.js to use this.colours array = colours[i][1]. this is in essence the same as freehandTool.js using strokeCap(SQUARE); and the colourPalette.js to use a colour scheme with additional opacity.

## clone.js
Relies on the [copy() function](https://p5js.org/examples/image-copy-method.html) within P5.js. Allows a user to hold down ctrl and select a starting area. Then the user can draw at a separate location and it will copy the pixels/art from the initial location to the new mouseX/Y location.

## kaleidoscope.js
Based on [Kaleidoscope example](https://p5js.org/examples/interaction-kaleidoscope.html) on P5.js examples. used DOM manipulation and toggle top increase the symmetry lines within the kaleidoscope allowing for 6/8 branches.

## Future additions 

TBD