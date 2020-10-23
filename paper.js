class PaperBall {
  constructor(x, y,r) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:0.7
    }
    this.body = Bodies.circle(x, y,(r-20)/2,options);
  this.r=r;
    World.add(world, this.body);
    this.image = loadImage("paper.png");
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
  

   
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
}
