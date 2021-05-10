var reasons=[
    "Dad","Mom","me"
    ]
    var images=[
    "Dad.png","Mom.png","boy.jpg"
    ]
    var i =0;
    function nextslide(){
    document.getElementById("reasons").innerHTML=reasons[i];
    document.getElementById("album").src=images[i];
    i++;
    if(i>2){
    i=0;
    }
    }