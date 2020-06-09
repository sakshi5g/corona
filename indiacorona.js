const searchstate=()=>{
    let filter =document.getElementById('myinput').value.toUpperCase();
    let mytable=document.getElementById('tval');
    let row=mytable.getElementsByTagName('tr');
    for(var i=0;i<row.length;i++){
        let cell=row[i].getElementsByTagName('td')[0];
        if(cell){
            let textvalue=cell.textContent || cell.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter)> -1){
                 row[i].style.display="";
            }else{
                row[i].style.display="NONE"; 
            }
        }
    }

}



async function getcovidapi(){
    const jsonData=await fetch('https://api.covid19india.org/data.json');
    //console.log(jsonData);
    const jsData=await jsonData.json();
   console.log(jsData.statewise.length);
    var tval=document.getElementById('tval')
    for(var i=1;i<jsData.statewise.length;i++){
        var x=tval.insertRow();
        x.insertCell(0);
       // console.log(jsData.statewise[i]);
       tval.rows[i].cells[0].innerHTML=jsData.statewise[i].state;
       x.insertCell(1);
       tval.rows[i].cells[1].innerHTML=jsData.statewise[i].active;
       x.insertCell(2);
       tval.rows[i].cells[2].innerHTML=jsData.statewise[i].confirmed;
       x.insertCell(3);
       tval.rows[i].cells[3].innerHTML=jsData.statewise[i].deaths;
       x.insertCell(4);
       tval.rows[i].cells[4].innerHTML=jsData.statewise[i].recovered;
       x.insertCell(5);
       tval.rows[i].cells[5].innerHTML=jsData.statewise[i].lastupdatedtime;
    }
   }
   getcovidapi();