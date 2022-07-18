function HelperFunctions() {
	//p5.dom click click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
		background(255);

		//call loadPixels to update the drawing state
		//this is needed for the mirror tool
		loadPixels();
	});

	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function() {
		saveCanvas('myCanvas', 'jpg');
	});

}

//make sure mouse is on canvas for links in Options and not have it draw on cavnas
function mousePressedOnCanvas(){
	if(mouseX > 0 && mouseY < (0 + width) && 
	mouseY > 0 && mouseY < (0 + height) ){
		return true;
	}
	return false;
}



