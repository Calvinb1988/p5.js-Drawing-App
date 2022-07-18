function HighlighterTool(){
	
	//set an icon and a name for the object
	this.icon = "assets/new/Highlight.png";
	this.name = "highlighter";

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function(){
		strokeWeight(this.strokeSizeSlider.value());
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
				
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				strokeCap(SQUARE);
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};

	//clear options
    this.unselectTool = function() {
		select("#sizeOfControl").html("");
		strokeWeight(1);
		strokeCap(ROUND);
    }
	//create dics and sliders
    this.populateOptions = function() {
        this.strokeSizeText = createDiv('Stroke size: ');
        this.strokeSizeText.parent("#sizeOfControl");
        this.strokeSizeSlider = createSlider(5,20,10);
        this.strokeSizeSlider.parent("#sizeOfControl");
    }
}