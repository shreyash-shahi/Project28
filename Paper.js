class Paper{
    constructor(x,y,radius,angle){
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:10,
          density:0.8
      } 
      this.body = Matter.Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world,this.body);
      this.image = loadImage("paper.png");
    }
    display(){
      var angle = this.body,angle;
      var pos = this.body.position;
      rotate(angle);
      fill("pink");
      imageMode(CENTER)
      image(this.image,pos.x,pos.y,this.radius);  
    }
}