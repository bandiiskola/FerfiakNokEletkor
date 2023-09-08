var data=[]
var n=""


function Katt()
{
    var ferfiszam=0
    var noszam=0
    var ferfiatlag=0
    var noatlag=0
    var ferfieletkor=0
    var noeletkor=0

    n=""
    if(document.getElementById("ferfi").checked)
    {
        n=document.getElementById("ferfi").value
    }
    else if(document.getElementById("no").checked)
    {
        n=document.getElementById("no").value
    }
    if (n!="" && document.getElementById("eletkor").value!=0 && document.getElementById("eletkor").value>=1)
    {
        var obj = {
            nem : n,
            eletkor : parseInt(document.getElementById("eletkor").value)
        }
        data.push(obj)
    }
    console.log(data)
    for(var i=0;i<data.length;i++)
    {
        if(data[i].nem=="ferfi")
        {
            ferfiszam++
            ferfieletkor+=data[i].eletkor
        }
        else
        {
            noszam++
            noeletkor+=data[i].eletkor
        }
    }

    if(ferfiszam!=0)
    ferfiatlag=ferfieletkor/ferfiszam
    if(noszam!=0)
    noatlag=noeletkor/noszam

    document.getElementById("kiir").innerHTML="<p>Férfiak száma: "+ferfiszam+", Átlag életkor: "+ferfiatlag+"</p>"
    document.getElementById("kiir").innerHTML+="<p>Nők száma: "+noszam+", Átlag életkor: "+noatlag+"</p>"

}