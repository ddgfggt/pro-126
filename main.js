leftwristX=0;
rightwristX=0;
leftwristY=0
rightwristY=0;
song="";
function preload() {
    // song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("poseNetisloaded")
}
function gotposes(results){
        console.log(results);
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        console.log("rightWristX="+rightwristX+"rightwristY="+rightwristY+"leftWristX="+leftwristX+"leftwristY"+leftwristY);
        
}
function draw(){
    image(video,0,0,600,500);
    fill("red");
    stroke("red");
    circle(leftwristX,leftwristY,20);
    leftwristY=Number(leftwristX);
    remove=floor(leftwristY);
    volume=remove/500;
    document.getElementById("volume").innerHTML="Volume="+volume;
    song.setVolume(volume);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}