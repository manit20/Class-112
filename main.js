Webcam.set({
    height: 300,
    width: 310,
    Image_format: 'png',
    png_quality: 90,
    
    constraints: {
        facingMode: "enviorment"
    }
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img src="' + data_uri + '" id="captured_image"/>';
    })
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}