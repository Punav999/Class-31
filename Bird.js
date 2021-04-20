class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.traj = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.position.x > 220 && this.body.velocity.x > 10){
      var position = [this.body.position.x,this.body.position.y]
      this.traj.push(position);
    }
    for(var p=0;p<this.traj.length;p++){
      image(this.smoke,this.traj[p][0],this.traj[p][1]);
    
    }
  }
}
