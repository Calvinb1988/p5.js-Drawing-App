//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var hexStamp;

function preload() {
	stampOne = loadImage("assets/new/Dog2.png");
	stampTwo = loadImage("assets/new/Cat2.png");
	stampThree = loadImage("assets/new/Bunny2.png");
}

function setup() {

	//loadPixels();
	//noFill();

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");
	
	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new CircleTool());
	toolbox.addTool(new StampTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new CustomShapeTool());
	toolbox.addTool(new EraserTool());
	toolbox.addTool(new BucketFillTool(c));
	toolbox.addTool(new HighlighterTool());
	toolbox.addTool(new Clone(c));
	toolbox.addTool(new Kaleidoscope());	
	
	background(255);	
}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
	
}

//Needed for various keypressed functions
function keyPressed(keyCode){
    if (toolbox.selectedTool.hasOwnProperty("keyPressed")){
        toolbox.selectedTool.keyPressed(keyCode)
    }
}

function keyReleased(keyCode){
    if (toolbox.selectedTool.hasOwnProperty("keyPressed")){
        toolbox.selectedTool.keyReleased(keyCode)
    }
}

function mousePressed(){
    if (toolbox.selectedTool.hasOwnProperty("mousePressed")){
        toolbox.selectedTool.mousePressed()
    }
}

function mouseReleased(){
    if (toolbox.selectedTool.hasOwnProperty("mouseReleased")){
        toolbox.selectedTool.mouseReleased()
    }
}

function mouseClicked(){
    if (toolbox.selectedTool.hasOwnProperty("mouseClicked")){
        toolbox.selectedTool.mouseClicked()
    }
}
