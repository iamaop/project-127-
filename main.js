bones_song = "bones.mp3";
baby_song = "bayby.mp3";
function setup(){
    canvas = createCanvas(600,530);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    // bones_song = loadSound("bones.mp3");
    // baby_song = loadSound("baby.mp3");
}

function draw(){
    image(video,0,0,600,530);
}
