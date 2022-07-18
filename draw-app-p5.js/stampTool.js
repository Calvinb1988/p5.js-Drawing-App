function StampTool(){
    //set an icon and a name for the object
    this.icon = "assets/new/Stamp.png";
    this.name = "stampTool";

    //rotation angle
    var angle;

    var self = this;

    // initialise mouse position to off-canvas
	var startMouseX = -1;
	var startMouseY = -1;
    // initialise drawing as false
	var drawing = false;

    //section to add stamps using a function that allows them to be rotated and placed at mouseX/Y
    this.stampOne = function(img_x, img_y, img_width, img_height, img_angle){
        //function to rotate image before placing it. Angle will be defined based on
        //the slider rotSlider
        imageMode(CENTER);
        translate(img_x+img_width/2, img_y+img_width/2);
        rotate(PI/180*angle);
        image(stampOne, 0, 0, img_width, img_height);
        rotate(-PI / 180 * img_angle);
        translate(-(img_x+img_width/2), -(img_y+img_width/2));
        imageMode(CENTER);
    }
    this.stampTwo = function(img_x, img_y, img_width, img_height, img_angle){
        //function to rotate image before placing it. Angle will be defined based on
        //the slider rotSlider
        imageMode(CENTER);
        translate(img_x+img_width/2, img_y+img_width/2);
        rotate(PI/180*angle);
        image(stampTwo, 0, 0, img_width, img_height);
        rotate(-PI / 180 * img_angle);
        translate(-(img_x+img_width/2), -(img_y+img_width/2));
        imageMode(CENTER);
    }
    this.stampThree = function(img_x, img_y, img_width, img_height, img_angle){
        //function to rotate image before placing it. Angle will be defined based on
        //the slider rotSlider
        imageMode(CENTER);
        translate(img_x+img_width/2, img_y+img_width/2);
        rotate(PI/180*angle);
        image(stampThree, 0, 0, img_width, img_height);
        rotate(-PI / 180 * img_angle);
        translate(-(img_x+img_width/2), -(img_y+img_width/2));
        imageMode(CENTER);
    }

    // draw function to draw shape from image in preload()
    this.draw = function(){
        //set mouse pressed and make sure stamp only shown when mouse i pressed on the canvas
        if(mouseIsPressed && mousePressedOnCanvas()){     
            if(startMouseX == -1){
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels();
            }
            else{
                updatePixels()
                //set rotation angle based on the slider
                angle = this.rotSlider.value();
                if(this.selectionToolForOptions.selected()=='Dog'){
                    //first stamp placed based on rotateImage funtion and mouse pointer
                    this.stampOne(mouseX, mouseY, this.sizeSlider.value(), this.sizeSlider.value(), angle);  
                } 
                if(this.selectionToolForOptions.selected()=='Cat'){
                    //second stamp placed based on rotateImage funtion and mouse pointer
                    this.stampTwo(mouseX, mouseY, this.sizeSlider.value(), this.sizeSlider.value(), angle);      
                } 
                if(this.selectionToolForOptions.selected()=='Bunny'){
                    //third stamp placed based on rotateImage funtion and mouse pointer
                    this.stampThree(mouseX, mouseY, this.sizeSlider.value(), this.sizeSlider.value(), angle);      
                } 
            }
        }
        else if(drawing){
            //save the pixels with the most recent line and reset the
            //drawing bool and start locations
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }

        
    };

    //create divs and sliders
    this.populateOptions = function() {

        //size and rotation sliders
        this.textProperty = createDiv('Size: ');
        this.textProperty.parent("#sizeOfControl");
        this.sizeSlider = createSlider(100,300,100);
        this.sizeSlider.parent("#sizeOfControl");
        this.textProperty2 = createDiv('Rotation degrees (0 to 360): ');
        this.textProperty2.parent("#sizeOfControl");
        this.rotSlider = createSlider(0,360,0);
        this.rotSlider.parent("#sizeOfControl");
        this.rotSlider.mouseMoved(this.updateValue); //update text box based on rotSlider.value()

        //set text box and button for Rotation value manual entry
        this.textBox = createInput('');
        this.textBox.parent("#sizeOfControl");
        this.textBox.size(40);
        this.textBox.value(this.rotSlider.value());
        this.button = createButton('submit');
        this.button.parent("#sizeOfControl");
        //update rotSlider.value() based on input from the text box
        this.button.mousePressed(function() {self.rotSlider.elt.value = parseInt(self.textBox.value()) });
        
        //options drop down
        this.optionTextProperty = createDiv('&nbsp;&nbsp;&nbsp;options: ');
        this.optionTextProperty.parent("#sizeOfControl");
        this.selectionToolForOptions = createSelect();
        this.selectionToolForOptions.parent("#sizeOfControl");

        //add stamp names to the selections options drop down
        var stamps = ['Dog','Cat','Bunny'];
        for (var i = 0; i < stamps.length; i++)
            {
                this.selectionToolForOptions.option(stamps[i]);
            }
    }

    this.unselectTool = function() {
		//clear options
		select("#sizeOfControl").html("");
	};

    this.updateValue = function (){
        //update the this.rotSlider.changed value
        self.textBox.value(self.rotSlider.value());
    }


}