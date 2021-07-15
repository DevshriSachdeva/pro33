class snow{
    constructor(x,y,r){
        var options={
           restitution:0,
           friction:1.0,
          // density:1.0,
           isStatic: false
        }
     this.x=x;
          this.y=y;
       this.r=r
       this.image = loadImage("images/snow5.webp");
       this.body=Bodies.circle(x,y,r,options)
       World.add(world, this.body);
    }display(){
     
       push();
       translate(this.body.position.x, this.body.position.y);
    
       imageMode(CENTER);
       image(this.image, 0, 0,this.r,this.r);
       pop();
    }
   }