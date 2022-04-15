Webcam.set({
    height:300,
    width:300,
    png_quality:90,
    image_format:'png'
})

camera=document.getElementById("camera")

Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img id="cpature_image" src="'+data_uri+'"/>';

    });
}

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9FJV6MYlv/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}