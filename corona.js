function slideshow(){
    var x=document.getElementById('check');
    if(x.style.display==="none"){
        x.style.display="block";
    }else{ x.style.display="none";}
}

async function getcovidapi(){
 const jsonData=await fetch('https://api.covid19api.com/summary');
 //console.log(jsonData);
 const jsData=await jsonData.json();
 console.log(jsData.Countries[76].Country);
}
getcovidapi();