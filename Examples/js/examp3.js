var cubo= document.getElementById("cube1");
var cube= document.getElementById("cube2");
function jump (){
    cubo.classList.add("animate");
    if(cube.classList != "animate")
    setTimeout(function(){cubo.classList.remove("animate")},500)
    KeyboardEvent("top")
}

function move (){
    cube.classList.add ("anime")
    if(cube.classList != "anime")
    setTimeout(function(){cube.classList.remove("anime")}, 500)
    KeyboardEvent("left")
}