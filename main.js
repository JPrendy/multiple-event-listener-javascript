var array = [0, 1, 3, 5, 10, 11, 12, 13];
var answer = [];
var page;

window.onload = function(){
page = 1;



addNumbers(page);

var theParent = document.querySelector(".container");
theParent.addEventListener("click", nextBus, false);
document.getElementById("next").addEventListener("click", newPage);
document.getElementById("back").addEventListener("click", backPage);
}


function newPage(){
    page = 2;
    addNumbers(page);
    getcolor(1);
}

function backPage(){
    page = 1;
    addNumbers(page);
    getcolor(0);
}




function addNumbers(page){
    if(page == 1){
    document.getElementById("test").innerHTML = array[0];
    document.getElementById("test2").innerHTML = array[1];
    document.getElementById("test3").innerHTML = array[2];
    document.getElementById("test4").innerHTML = array[3];
    }
    else{
        document.getElementById("test").innerHTML = array[4];
        document.getElementById("test2").innerHTML = array[5];
        document.getElementById("test3").innerHTML = array[6];
        document.getElementById("test4").innerHTML = array[7]; 
    }
}

function getcolor(value){
    var x = document.getElementsByTagName("button");
    for(i=0; i<x.length; i++){
    x[i].style.color = "white";
    }
    var color = answer[value][1];
    document.getElementById(color).style.color = "red";
}


function nextBus(e){
    // var list = $(this).attr("id");
    console.log(e.target.id);
    var value = e.target.id;
    var answerb = document.getElementById(value).innerHTML; 
    var x = document.getElementsByTagName("button");
    for(i=0; i<x.length; i++){
    x[i].style.color = "white";
    }
    document.getElementById(value).style.color = "red";
    if(page == 1){
    answer[0] = [answerb, value];
    }
    else{
    answer[1] = [answerb, value];   
    }
    console.log(answer);
}