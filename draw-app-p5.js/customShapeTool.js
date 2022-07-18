function CustomShapeTool(){
    //set an icon and a name for the object
    this.icon = "assets/new/Customshape.png";
    this.name = "customShapeTool";

    var c = c;
    var editButton;
    var finishButton;
    var editMode = false;
    var currentShape = [];

    editButton = createButton('Edit Shape');
    //hides the button when no on this tool
    //editButton.hide();
    finishButton = createButton('Finish Shape');
    //hides the button when no on this tool
    //finishButton.hide();

    //enable edit button and change edit mode to true when selected
    editButton.mousePressed(function(){
        if(editMode){
            editMode = false;
            editButton.html('Edit Shape');
        }
        else{
            editMode = true;
            editButton.html('Add Vertices');
        }
    })
    //dont fill the shape and stop editing shape when finish button is selected
    noFill();
    finishButton.mousePressed(function(){
        editMode = false;
        draw();
        loadPixels();
        currentShape = [];
    })

    this.draw = function(){
        noFill();
        updatePixels();

        //push mousex/y into an array
        if(mousePressedOnCanvas(c) && mouseIsPressed){
            if(!editMode){
                currentShape.push({
                    x: mouseX,
                    y: mouseY
                });
            }
            else{
                for(var i = 0; i < currentShape.length; i++){
                   if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15 ){
                       currentShape[i].x = mouseX;
                       currentShape[i].y = mouseY;
                   }
                }
            }
        }

        //draw elipses for editing shape and also draw lines using vertex
        beginShape();
        for (var i = 0; i < currentShape.length; i++) {
            vertex(currentShape[i].x, currentShape[i].y);
            if(editMode){
                fill('blue');
                ellipse(currentShape[i].x, currentShape[i].y, 5);
                noFill();
            }
        }
        endShape();  
    }

    this.populateOptions = function()
    {
        //adds te buttons to the div with the id options
        editButton.parent("#sizeOfControl");
        finishButton.parent("#sizeOfControl");
        //shows the buttons as soon as the icon is clicked
        editButton.show();
        finishButton.show();
    }
    //Clear options
    this.unselectTool = function()
    {
        select("#sizeOfControl").html("");
        
    }
};

