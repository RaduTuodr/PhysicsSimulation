let Engine = Matter.Engine;
let Render = Matter.Render;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Mouse = Matter.Mouse;

let engine;
let world;

let surfaces = [];
let boxes = [];

function setup() {

    createCanvas(1000, 1100);

    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);
}

function mousePressed() {

    boxes.push(new Box(40, 40, 20, 20));
}

function draw() {
    background(50);

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
}