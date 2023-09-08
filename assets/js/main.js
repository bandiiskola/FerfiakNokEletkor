var data=[]
var varakozo=[]

function Katt()
{
    if(document.getElementById("ferfi").checked)
    {
        varakozo.push(document.getElementById("ferfi").value)
    }
    else if(document.getElementById("no").checked)
    {
        varakozo.push(document.getElementById("no").value)
    }
    if (document.getElementById("eletkor").value!=0&&document.getElementById("eletkor").value>=1)
    {
        varakozo.push(document.getElementById("eletkor").value)
    }
    data.push(varakozo)
    varakozo.Clear
}