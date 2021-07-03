class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.01,
        'density':1.0,
        'isStatic': true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(0, 0);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3)
    rect(0, 0, this.width, this.height);
    pop();
  }
};
