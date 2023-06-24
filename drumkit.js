let a=document.querySelectorAll("button");
a.forEach((value)=>{
    value.addEventListener("click",function(){
        makesound(this.innerHTML);
    })
})
document.addEventListener("keypress",function(e){
    makesound(e.key);
})
function makesound(key){
    switch (key) {
        case "w":
            var sound= new Audio("audio/1.mp3")
            sound.play()
            break;
            case "a":
            var sound= new Audio("audio/2.mp3")
            sound.play()
            break;
            case "s":
            var sound= new Audio("audio/3.wav")
            sound.play()
            break;
            case "d":
            var sound= new Audio("audio/3.wav")
            sound.play()
            break;
            case "j":
            var sound= new Audio("audio/5.wav")
            sound.play()
            break;
            case "l":
            var sound= new Audio("audio/6.wav")
            sound.play()
            break;
              
        default:
            console.log(this.innerHTML);
            break;
    }
   

}