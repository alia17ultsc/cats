var leftarrow=document.getElementById("leftarrow");
leftarrow.style.opacity = "0.5";
var catnumber=0;
var cats=["sonya", "ryzhyk", "felix", "soonie"];


function changecat(switchcat){
    if (catnumber + switchcat <0 || catnumber + switchcat>cats.length){
        return;
    }
    catnumber=catnumber+switchcat;
    var currentcat=cats[catnumber];
    var catname=document.getElementById("catname");
    var catimg=document.getElementById("catimg");
    
    
    if (currentcat=="sonya"){
        catname.innerText="Sonya";
        catimg.src="../pictures/sonya.jpg";
        
    }
    if (currentcat=="ryzhyk"){
       catname.innerText="Ryzhyk";
        catimg.src="../pictures/ryzhyk.jpg"; 
    }
}