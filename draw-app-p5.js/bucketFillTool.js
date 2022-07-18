function BucketFillTool(c) {
    this.name = "bucketFillTool";
    this.icon = "assets/new/Bucket.png";
    
    var targetColour = [0,0,0,0]; 
    var pixelColour = [0,0,0,0];
    var queue = [];
	
	//declare the pixel variables to be used to get the colours and be replaced
    var pixelXY;
    var newPixelX;
    var newPixelY;
    var newPixel;
	
	
    var newColour = colourP.fillToolColour
    var modeOn = true
    var self = this
    
	//clears options Div as tool has no options
    this.populateOptions = function() {
		select("#sizeOfControl").html("");
	};
    
	//sets the mode for the tool to false
    this.unselectTool = function(){
        modeOn = false
    }
 
    //Click on the canvas to get the colour of the area that you want to be changed. Value only changes 
    //when on the bucketFillTool tool
    var mouseClickedOnCanvas = function(){
        c.mousePressed(function(){
            if(modeOn == true){
                targetColour = get(mouseX, mouseY)
                pixelColour = get(mouseX, mouseY)
                floodFill();
            }
        })
    }
    
    //Compares 2 colours. If count == 4, the colours are the same.
    var compare = function(colour1, colour2){
        var count = 0
        for(var i = 0; i < 4; i++){
            if(colour1[i] == colour2[i]){
                count += 1;
            }
        }
        return count
    }
    
    //If the comparison of the 2 pixels were the same, replace the pixel with the replacement colour and enqueue 
    //the pixel
    var updateColour = function(compareNodes, xCoord, yCoord){
        if(compareNodes == 4){
            set(xCoord, yCoord, newColour)
            queue.push([xCoord, yCoord])
            updatePixels();
        }
    }
    
    var floodFill = function(){
        
        //Assigns the initial start point of the pixel to where the mouse is.
        pixelXY = [mouseX, mouseY]
        
        //Compares the target colour and replacement colour
        var compTcRc = compare(targetColour,newColour)
        
        //If the target colour and replacement colour is the same, return
        if(compTcRc == 4){
            return
        }
        
        //Compares the pixel colour and target colour
        var compPcTc = compare(pixelColour,targetColour)
        
        //If the pixel colour and target colour is not the same, return
        if(compPcTc != 4){
            return
        }
        
        //Set the colour of pixel to replacement colour
        set(pixelXY[0], pixelXY[1], newColour)
        
        //Enqueue the pixel to the queue
        queue.push(pixelXY)
    }
    
    //Gets the colour of the pixel from one of the directions from newPixel and compares it to the target colour. 
    //If they are the same colour, replace the pixel with the replacement colour and enqueue the pixel position
    this.directions = function(xDirection, yDirection){
        var getColour = get(xDirection, yDirection)
        var comp = compare(getColour, targetColour)
        updateColour(comp, xDirection, yDirection)
    }

    this.draw = function(){
        modeOn = true
        newColour = colourP.fillToolColour;
        mouseClickedOnCanvas();
        
        //While the queue is not empty
        while(queue.length != 0){
            
            //newPixel is the first element of the queue
            newPixel = queue[0]
            
            //Assigning the x and y value of the new node to new variables
            newPixelX = newPixel[0]
            newPixelY = newPixel[1]
            
            //Dequeue the first element of the queue
            queue.shift()
            
            //Going to the left
            self.directions(newPixelX - 1, newPixelY)
            
            //Going to the right
            self.directions(newPixelX + 1, newPixelY)
            
            //Going up
            self.directions(newPixelX, newPixelY - 1)
            
            //Going down
            self.directions(newPixelX, newPixelY + 1)
        }
    }
}