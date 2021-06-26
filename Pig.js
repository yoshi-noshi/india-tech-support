class Pig extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255;//completley visible/transparent:D
  }

  show() {
    
    console.log(this.body.speed)
    if (this.body.speed < 2.2) {
      super.display()
    }
    else {
      World.remove(world, this.body);
      this.visibility = this.visibility - 5;//redusing visibility by 5 everytime:D
      push ()
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop ()
    }
  }
}
