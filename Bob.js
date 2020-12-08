class Bob{
  constructor(x,y,r){
    var options = {
      isStatic: true
    }

    this.body = Bodies.circle(x,y,r,options);
    this.x = x;
    this.y = y;
    this.r = r;

    World.add(world,this.body);
  }

  display(){
    //bn = this.body.position;
    //angle = this.body.angle;
    
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    fill(255,0,254);
    ellipseMode(CENTER);
    ellipse(0,0,this.r);
    pop();
  }
}