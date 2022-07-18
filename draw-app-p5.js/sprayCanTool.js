function SprayCanTool(){
    //set an icon and a name for the object
    //also declare the points and spread
    this.name = "sprayCanTool";
    this.icon = "assets/new/Spraycan.png";
    this.points = 0;
    this.spread = 0;

    this.draw = function(){
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if(mouseIsPressed){

            this.spread = this.spreadSizeSlider.value();
            this.points = this.pointsNumSlider.value();

            for(var i = 0; i < this.points; i++){
                point(random(mouseX-this.spread, mouseX+this.spread), 
                    random(mouseY-this.spread, mouseY+this.spread));
            }
        }
    }

    this.unselectTool = function() {
		select("#sizeOfControl").html("");
		strokeWeight(1);
	};

    this.populateOptions = function() {
        this.spreadSizeText = createDiv('Spread size: ');
        this.spreadSizeText.parent("#sizeOfControl");
        this.spreadSizeSlider = createSlider(10,100,20);
        this.spreadSizeSlider.parent("#sizeOfControl");

        this.pointsNumText = createDiv('Spray density: ');
        this.pointsNumText.parent("#sizeOfControl");
        this.pointsNumSlider = createSlider(10,80,20);
        this.pointsNumSlider.parent("#sizeOfControl");
    };
};