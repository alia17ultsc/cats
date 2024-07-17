var leftarrow=document.getElementById("leftarrow");
var rightarrow=document.getElementsByClassName("rightarrow")[0];
leftarrow.style.opacity = "0.5";
var catnumber=0;
var cats=["sonya", "ryzhyk", "felix", "soonie"];


function nextpage(){
    if (catnumber==0){
        window.location.href="allphoto.html";
    }
}

function returnpage(){
    window.location.href="index.html";
}

function changecat(switchcat){
    if (catnumber + switchcat <0 || catnumber + switchcat>cats.length){
        return;
    }
    catnumber=catnumber+switchcat;
    var currentcat=cats[catnumber];
    var catname=document.getElementById("catname");
    var catimg=document.getElementById("catimg");
    var catdesc=document.getElementById("catdesc");
    
    if (currentcat=="sonya"){
        catname.innerText="Sonya";
        catimg.src="../pictures/sonya.jpg";
        catdesc.innerText="Sonya was born on February 10th of the year 2023. She is a queen.";
        
    }
    if (currentcat=="ryzhyk"){
       catname.innerText="Ryzhyk";
        catimg.src="../pictures/ryzhyk.jpg"; 
        catdesc.innerText="In the year 2022 he started living a home. Every evening he controls the cat restaurant. He doesnt like strangers.";
    }
    if (catnumber==0){
        leftarrow.style.opacity="0.5";
        rightarrow.style.opacity="1";
    }
    
    else if (catnumber==cats.length-1){
        leftarrow.style.opacity="1";
        rightarrow.style.opacity="0.5";
    }
    else
        {
            leftarrow.style.opacity="1";
            rightarrow.style.opacity="1";
        }
}