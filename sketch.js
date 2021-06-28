const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var ampm;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour < 12 && hour > 0){
        ampm = "AM";
    }
    else {
        ampm = "PM";
    };

    textSize(35);
    text("TIME : " + hour + ampm,50,50);

}

async function getBackgroundImg(){
   // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var daytime = responseJSON.datetime;

    // write code slice the datetime
    var hour = daytime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour <= 8 && hour >= 6){
        var bg = "sunrise1.png";
    }
    else if(hour <= 10 && hour >= 8){
        var bg = "sunrise2.png";
    }
    else if(hour <= 12 && hour >= 10){
        var bg = "sunrise4.png";
    }
    else if(hour <= 14 && hour >= 12){
        var bg = "sunrise5.png";
    }
    else if(hour <= 15 && hour >= 14){
        var bg = "sunset7.png";
    }
    else if(hour <= 17 && hour >= 15){
        var bg = "sunset10.png";
    }
    else if(hour <= 20 && hour >= 17){
        var bg = "sunset11.png";
    }
    else {
        var bg = "sunset12.png";
    }
       backgroundImg = loadImage(bg);

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
