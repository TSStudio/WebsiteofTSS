function Search()
{
    var str=form.word.value;
    realcode=window.atob(str);
    by=realcode.substring(1,2)
    searchDB(realcode.substring(2),by);
    displaybox=document.getElementById('display');
    displaybox.innerHTML='<div id="display">'+output.by+'<br>'+output.videoname+'<br>'+output.videourl+'</div>'
}
function Add()
{
    var str=form.word.value;
    if(str.length==10)
    {
        var output=window.btoa(str);
    }
    else
    {
        alert('error');
    }
    displaybox=document.getElementById('display');
    displaybox.innerHTML='<div id="display">'+output+'</div>'
}