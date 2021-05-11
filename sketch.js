var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 80; k <=160; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var k = 160; k<=240; k=k+80){

    divisions.push(new Divisions(k,height-divisionHeight/2, 10 , divisionHeight))

  }

  for(var k=240; k<=320; k=k+80){

    divisions.push(new Divisions(k,height-divisionHeight/2, 10, divisionHeight))

  }

  for(var k=320; k<=400; k=k+80){
     divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var k=400; k<=480; k=k+80){

    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))

  }

  for(var k=480; k<=560; k=k+80){

   divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))

  }

  for(var k=560; k<=640; k=k+80){

   divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight)) 

  }

  for(var k=640; k<=720; k=k+80){

    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight)) 
 
   }

   for(var k=720; k<=800; k=k+80){

    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight)) 
 
   }



  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
for(var j=50; j <=width-10; j=j+50){

plinkos.push(new Plinko(j,375))

}

  //create particle objects
  for(var j=width/2-100; j <=width/2+100; j=j+5){

    particles.push(new Particles(j,10))
    
    }
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  
  if(frameCount%10===0){

    particles.push(new Particles(Math.round(random(width/2-10,width/2+10),10,10)))
    
    }
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  for (var a = 0; a < plinkos.length; a++) {
    plinkos[a].display();   
  }
  for(var b=0; b < plinkos.length; b++){
    plinkos[b].display();
  }

   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var l = 0; l < divisions.length; l++) {
    divisions[l].display();
  }

  for(var c = 0; c < divisions.length; c++){
     divisions[c].display();
  }

  for(var d = 0; d < divisions.length; d++){
     divisions[d].display();
  }

  for(var e=0; e < divisions.length; e++){

     divisions[e].display();

  }

  for(f=0; f < divisions.length; f++){

     divisions[f].display();

  }

  for(g=0; g< divisions.length; g++){

    divisions[g].display();

  }

  for(h=0; h< divisions.length; h++){

    divisions[h].display();

  }

  for(i=0; i< divisions.length; i++){

    divisions[i].display();

  }

  for(j=0; j< divisions.length; j++){

    divisions[j].display();

  }

  //display the paricles 
  for(z=0; z<particles.length; z++){


   particles[z].display();


  }
}