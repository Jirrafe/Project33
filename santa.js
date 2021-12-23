class santa{
    constructor(x,y,width,height){
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width 
        this.height = height
        this.image = loadImage("Santa.png")
        World.add(world,this.body)

    }
    display(){
        push(); 
        translate(this.body.position.x,this.body.position.y); 
        //rotate(angle); 
        imageMode(CENTER) 
        image(this.image,0,0,this.width,this.height);
         pop();
    }
}