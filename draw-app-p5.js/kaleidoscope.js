function Kaleidoscope(){
    //set an icon and a name for the object
    this.icon = "assets/new/Kaleido.png"
    this.name = "Kaleidoscope"
    
    //sets the number of sections the page will be divided into 
    this.symmetry = 8; 
    this.angle = 360/this.symmetry;
    
    var self = this;

    this.draw = function(){
        //sets angle mode from radians to degrees so rotation happens around it's self and not in a full circle 
        angleMode(DEGREES);
        strokeCap(ROUND);
        translate(width/2, height/2);
        strokeWeight(this.strokeSizeSlider.value());
        
        if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
            let mousex = mouseX - width/2;
            let mousey = mouseY - height/2;
            //pmouseX and pmouseY is mouseX and Y from the previous frame
            let pmousex = pmouseX - width/2; 
            let pmousey = pmouseY - height/2;
            
            if(mouseIsPressed){
                //for loop which reflects drawing in all sections 
                for(var i = 0; i < self.symmetry; i++){
                    rotate(this.angle);
                    line(mousex, mousey, pmousex, pmousey);
                    push();
                    scale(1, -1);
                    line(mousex, mousey, pmousex, pmousey);
                    //pop restores settings to before translate so other tools can be used 
                    pop();
                }
            }
        }
    }

      //made options so the number of sections can be switched from 8 to 6 
      this.populateOptions = function(){
        select("#sizeOfControl").html("<button id = 'symmetryButton'> 6 Reflections </button> &nbsp;&nbsp;");
        select("#symmetryButton").mouseClicked(function(){
            var button = select("#"+this.elt.id);
            if(self.symmetry == 8){
                self.symmetry = 6;
                self.angle = 360 / self.symmetry;
                button.html("8 Reflections");
            } else{
                self.symmetry = 8;
                self.angle = 360 / self.symmetry;
                button.html('6 Reflections')
            }
        })

        //set divs and slider options
        this.strokeSizeText = createDiv('Stroke size: ');
        this.strokeSizeText.parent("#sizeOfControl");
        this.strokeSizeSlider = createSlider(1,20,1);
        this.strokeSizeSlider.parent("#sizeOfControl");
    }
    
    //When the tool is changed, the amount of symmetrical lines will change back to 8 and the button will be 
    //removed, also set angle mode back toi radians as stamp tool requires this
    this.unselectTool = function() {
        self.symmetry = 8
        self.angle = 360 / self.symmetry;
        angleMode(RADIANS);
        select("#sizeOfControl").html("");
        strokeWeight(1);
	} 
}