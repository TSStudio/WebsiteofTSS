function Search()
{
    var str=form.word.value;
    realcode=window.atob(str);
    by=realcode.substring(0,2)
    switch(by)
    {
        case'00':
        tmysam(realcode.substring(2));
        break;
        default:
        alert('查询码错误');
    }
    displaybox=document.getElementById('display');
    displaybox.innerHTML='<div id="display">'+output.name+'<br>'+output.type+'<br>'+output.url1+'<br>'+output.url2+'<br>'+output.url3+'</div>'
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