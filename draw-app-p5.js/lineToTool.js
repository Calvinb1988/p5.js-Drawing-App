function LineToTool(){
	
	//set an icon and a name for the object
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet. Also sets drawing to false as nothing 
	//yet drawn for the lin tool and we set to true on mouse press
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

		strokeWeight(this.strokeSizeSlider.value());
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they startMouseX and Y are -1. set them to the current
			//mouse X and Y if they are. Also sets the drawing of the line totrue
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//Loads the pixel data for the display window into the pixels[] array
				loadPixels();
			}

			else{
				//Updates the display window with the data in the pixels[] array. Used in conjunction with loadPixels().
				updatePixels();
				//Draw line based on Start mouse and current mouse
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
		//if the user has released the mouse we want to set the startMouse values 
		//back to -1.
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};

	//clear options
	this.unselectTool = function() {
		select("#sizeOfControl").html("");
		strokeWeight(1);
	};

	//create divs and sliders
    this.populateOptions = function() {
        this.strokeSizeText = createDiv('Stroke size: ');
        this.strokeSizeText.parent("#sizeOfControl");
        this.strokeSizeSlider = createSlider(1,20,1);
        this.strokeSizeSlider.parent("#sizeOfControl");
    };



}
