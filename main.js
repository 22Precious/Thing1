function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/aWJMRMhfb/model.json');
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    var dog=0;
    var cat=0;
    var lion=0;
    var cow=0;


 if(error){
    console.error(error);
 }else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;

    document.getElementById("Detected_voice").innerHTML='Detected Voice is of - '+results[0].label;
    document.getElementById("Detected_animal_label").innerHTML='Detected Dog - '+(results[0].confidence*100).toFixed(2)+" %"+'Detected Cat - '+(results[0].confidence*100).toFixed(2)+" %"+'Detected Lion- '+(results[0].confidence*100).toFixed(2)+" %"+'Detected Cow- '+(results[0].confidence*100).toFixed(2)+" %"
    document.getElementById("id_of_element").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img=document.getElementById('cat');
    img1=document.getElementById('cow_gif.gif');
    img2=document.getElementById('dog_gif.gif');
    img3=document.getElementById('lion_gif.gif');

    if (results[0].label=="Dog"){
        dog=1;
        cat=0;
        lion=0;
        cow=0;
    } else if (results[0].label=="Cat"){
        dog=0;
        cat=1;
        lion=0;
        cow=0;
    } else if (results[0].label=="Lion"){
        dog=0;
        cat=0;
        lion=1;
        cow=0;
    } else if(results[0].label=="Cow"){
        dog=0;
        cat=0;
        lion=0;
        cow=1;
    }else{
        dog=0;
        cat=0;
        lion=0;
        cow=0;
 }
}