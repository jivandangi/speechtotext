 
 function record(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang="ne-NP";
    recognition.onresult= function(event){
        console.log(event);
         document.getElementById('tex').value=event.results[0][0].transcript;

    }
    recognition.start();
   
};
// function voice(){

    
// }