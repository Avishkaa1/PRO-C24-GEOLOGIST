class Rubber {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.radius = r;
      this.body = Bodies.circle(x, y, r, options);
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      stroke("red");
      fill("green");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };      