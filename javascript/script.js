var leftarrow=document.getElementById("leftarrow");
var rightarrow=document.getElementsByClassName("rightarrow")[0];
leftarrow.style.opacity = "0.5";
var catnumber=0;
var cats=["sonya", "ryzhyk", "felix", "soonie"];


function nextpage(){
    if (catnumber==0){
        window.location.href="sonya_photo.html";
    }
    else if (catnumber==1){
        window.location.href="ryzhyk_photo.html";
    }
    else if (catnumber==2){
        window.location.href="felix_photo.html";
    }
    else if (catnumber==3){
        window.location.href="soonie_photo.html";
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
    var catinfo=document.getElementById("catinfo"); 
    
    if (currentcat=="sonya"){
        catname.innerText="Sonya";
        catimg.src="../pictures/sonya.jpg";
        catdesc.innerText="Sonya was born on February 10th of the year 2023. She is a queen.";
        catinfo.innerText="Egyptians believed cats were magical creatures, capable of bringing good luck to the people who housed them.";
        
    }
    else if (currentcat=="ryzhyk"){
       catname.innerText="Ryzhyl'ka";
        catimg.src="../pictures/ryzhyk.jpg"; 
        catdesc.innerText="In the year 2022 she started living a home. Every evening she controls the cat restaurant. She doesnt like strangers.";
        catinfo.innerText="If you thought cats spent a lot of their lives sleeping, you’d be right. According to Veterinary Hub, Cats actually spend 70% of their lives sleeping, which works out to around 13-16 hours a day. It’s a cat’s life!";
    }
    
    else if (currentcat=="felix"){
       catname.innerText="Felix";
        catimg.src="../pictures/felix.jpg"; 
        catdesc.innerText="Felix 8 years old";
        catinfo.innerText="You’ve heard of monkeys and dogs in space, but did you know that a cat braved the great unknown too? On October 18th 1963 Felicette, also known as ‘Astrocat’ was the first and only cat to go to space.";
    }
    
    else if (currentcat=="soonie"){
       catname.innerText="Soonie";
        catimg.src="../pictures/soonie.jpg"; 
        catdesc.innerText="Soonie's born on 5th of August he likes running side ways and he gets angry at his litter box and like he has beef with my brother";
        catinfo.innerText="Cats can see spirits and according of its energy they can scare away them or to enhance their presence in our benefit.";
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