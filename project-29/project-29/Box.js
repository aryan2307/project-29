class Box{
    constructor(x, y, color) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 30, 40, this.color, options);
      this.width = 30;
      this.height = 40;
      this.color = color;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      rect(0, 0, this.width, this.height, this.color);
      pop();
    }
  }
  