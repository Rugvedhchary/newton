class Bob{
    constructor(x,y,r){
     var options = {
         isStatic : false,
         restitutuion : 0.3,
         friction : 0.5,
         density : 1.2
         }
         
        this.x=x;
		this.y=y;
		this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        this.bob = Constraint.create(options)
        
        World.add(world, this.body); 
        
    }
    display(){
		var pos = this.body.position;
  var angle=this.body.angle;
  push()
  translate(pos.x,pos.y);
  rotate(angle);
  ellipseMode(CENTER)
  stroke("green");
  strokeWeight(3);
  fill("black");
  ellipse(0,0,this.r,this.r);
  pop();
}
}	
			