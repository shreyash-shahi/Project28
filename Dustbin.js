class Dustbin{
    constructor(x,y,width,height) {
     var options = {
        isStattic: true,
        friction:10,
        density:10
     }
     this.body=Bodies.rectangle(x,y,width,height,options) ;
     this.width = width;
     this.height = height;
     this.image = loadImage("dustbin.png");
     World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      fill("blue");
      image(this.image,pos.x,pos.y,this.width,this.height+180);
      pop();
    }
     
}