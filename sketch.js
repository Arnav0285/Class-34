const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9
var backgroundImg,ground;
var ball, rope;
function setup(){
    createCanvas(3000,1000);
    engine = Engine.create();
    world = engine.world

    //Ground creation
    ground  = new Ground(1500,950,3000,50);

    box1 = new Box(1500,900,100,100);
    box2 = new Box(1500,800,100,100);
    box3 = new Box(1500,700,100,100);
    box4 = new Box(1600,900,100,100);
    box5 = new Box(1600,800,100,100);
    box6 = new Box(1600,700,100,100);
    box7 = new Box(1700,900,100,100);
    box8 = new Box(1700,800,100,100);
    box9 = new Box(1700,700,100,100);

    ball = new Ball(1000,700,100,100)
    rope = new Rope(ball.body,{x:1200,y:400});
}

function draw(){
background(180);
Engine.update(engine);

 ground.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();

 ball.display();

 rope.display();

 mouseDragged();

}

 function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
