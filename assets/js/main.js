var data=[]
var n=""
var ferfiszam=0
var noszam=0
var ferfiatlag=0
var noatlag=0
var ferfieletkor=0
var noeletkor=0

function Katt()
{
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
    n=0
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
    ferfiat
    ferfiak.push(n)
    nok.push(data.length-n)
    ferfiak.push(ferfieletkor/n)
    nok.push(noeletkor/data.length-n)
    console.log(ferfiak)

}