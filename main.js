function startClassification ()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fVdbOhVVs/model.json',modelReady);
}

function modelReady ()
{
    classifier.classify(gotResults);
}

var gato = 0 ;
var perro = 0 ;

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
   
   
      document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = 'perro:  '+ perro+'gato: '+gato;
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
   
   
      img = document.getElementById('animal_image');
   
   
      if (results[0].label == "ladrido") 
      {
        img.src = '43901-cute-dog.gif';
        perro = perro + 1;
      } 
      else if (results[0].label == "maullido") 
      {
        img.src = '65619-happy-cat.gif';
        gato = gato + 1 ;
      }
      else
      {
        img.src = '6778-siri-style-loading.gif';
      }
    }
   }   