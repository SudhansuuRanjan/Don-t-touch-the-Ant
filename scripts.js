var ready = 0
window.onload = function(){
    alert("⚠️Keep your volume full :)\nto witness the magic. ")
    aud1 = new Audio();
    aud1.src = "https://www.dropbox.com/s/s7dzkufi7p9d3gi/kaisi%20hai%20ye%20anhoni%20%28mp3cut.net%29.mp3?dl=1";
        document.getElementById("im").addEventListener("click",function(){
            var element = document.querySelector("#im");
            element.classList.add("mystyle");
        this.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMb3J5FZmh7AXg9vN06p6iWcCEj_Poddq32A&usqp=CAU";
        document.querySelector("#text").innerHTML = "Oops! You bloody criminal, <br>you killed her 🥺.";
        aud1.play();
        if(ready == 0){
            try{
                navigator.vibrate(1000);
            }
            catch(err){
                console.log(err)
            }
            ready = 1;
            setTimeout(function(){
                alert("ha ha ha how was that ?")
            },4000)
        }
    });
}