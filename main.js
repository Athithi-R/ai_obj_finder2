objects=[];
video="";
status="";

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();

}

function start(){
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status- Detecting objects";
    obj_name=document.getElementById("obj_name").value;
}

function modelLoaded(){
    console.log("model loaded!");
    status=true;
}

function draw(){
    image(video,0,0,480,380);
}

