function EraserTool(){
	//set an icon and a name for the object
    this.name = "eraserTool";
    this.icon = "assets/new/Eraser.png";
	
	this.eraserSelected = false; //initialize to false as its not selected

	this.draw = function(){
		//if the mouse is pressed paint on the canvas
		//spread describes how far to spread the paint from the mouse pointer
		//points holds how many pixels of paint for each mouse press
		if(mouseIsPressed){
			this.eraserSelected = true
			if (this.eraserSelected){
					push();
					fill(255);
					stroke(255);
					ellipseMode(CENTER);
					ellipse(mouseX, mouseY, this.eraserSizeSlider.value());
					pop();
			}	//when mouse not pressed set is selected to false 
			else {
				this.eraserSelected = false;
			}
		} 		
	}
	
	//clear options
	this.unselectTool = function() {
		select("#sizeOfControl").html("");
		strokeWeight(1);
	};

	//create div and slider options
	this.populateOptions = function() {
		this.eraserSizeText = createDiv('Eraser size: ');
		this.eraserSizeText.parent("#sizeOfControl");
		this.eraserSizeSlider = createSlider(10,150,10);
		this.eraserSizeSlider.parent("#sizeOfControl");
	};
}