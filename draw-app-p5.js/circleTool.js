function CircleTool(){
	//set an icon and a name for the object
    this.name = "circleTool";
    this.icon = "assets/new/Shapes.png";

    //to smoothly draw we'll draw a ellipse from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet. Also sets drawing to false as nothing 
	//yet drawn for the ellipse tool and we set to true on mouse press
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
	var noFillButton;

	this.populateOptions = function() {
		//Created a button for a no fill option
		select("#sizeOfControl").html(
			"<button id = 'noFillButton'> No Fill </button>");

		select("#noFillButton").mouseClicked(function(){
			noFillButton = select("#" + this.elt.id);

			//Starts off with the button saying "no fill", and draws a shape with a fill colour.
			if(colourP.fillMode == true) {
				fill(colourP.selectedColour)
				colourP.fillMode = false;
				noFillButton.html("&nbsp;&nbsp;No Fill&nbsp;&nbsp;");
			//When the no fill button is pressed, the button will change to say "fill" instead and have no fill when drawing a shape
			} else {
				noFill();
				colourP.fillMode = true;
				noFillButton.html("&nbsp;&nbsp;Fill&nbsp;&nbsp;");
			}

		});

		//create divs and option drop down
		this.optionTextProperty = createDiv('&nbsp;&nbsp;Shapes: ');
		this.optionTextProperty.parent("#sizeOfControl");
		this.selectionToolForOptions = createSelect();
		this.selectionToolForOptions.parent("#sizeOfControl");
		
		//add shapes to the selections options drop down
		var shapes = ['Circle','Rectangle'];
		for (var i = 0; i < shapes.length; i++)
			{
				this.selectionToolForOptions.option(shapes[i]);
			}
	
	}

	this.unselectTool = function() {
            //clears the options section
            select("#sizeOfControl").html("");
            //Reset the mode for the button to work correctly after switching tools
            colourP.fillMode = false;
        }

	this.draw = function(){
		//if the mouse is pressed
			if(mouseIsPressed){
				//check if they startMouseX and Y are -1. set them to the current
				//mouse X and Y if they are. Also sets the drawing of the ellipse to true
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
					//Draw ellipse/rect based on Start mouse and current mouse and dropdown selection
					if(this.selectionToolForOptions.selected()=='Circle'){
						ellipseMode(CENTER);
						ellipse(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
					}
					else if(this.selectionToolForOptions.selected()=='Rectangle'){
						rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);

					}
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
}