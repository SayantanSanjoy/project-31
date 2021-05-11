class Particles{

constructor(x,y){

var options={

"isStatic":false,
"restitution":0.3
}
this.radius=10;
this.body= Bodies.circle(x,y,this.radius,options)

this.color=color(Math.round(random(0,225)))

World.add(world,this.body)
}
display(){

var pos= this.body.position;
var angle=this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
ellipseMode(RADIUS);
ellipse(0,0,this.radius,this.radius);


pop();
}






}