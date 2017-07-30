if (hide=="0")
{
    switch(type){
        case "0":
            var type="Normal";
            var color="#CCCC00";//yellow
            break;
        case "1":
            var type="Important";
            var color="#FF9900";//orange
            break;
        case "2":
            var type="Serious";
            var color="#FF3300";//RED-OR
            break;
        case "3":
            var type="Emergency";
            var color="FF0000";//RED!
    }
    var output='<font style="color:' + color + ';">[' + type + '] ' + inside + '</font>';
    var HTML=document.getElementById("status");
    HTML.innerHTML=output;
}
else
{
    var output='<font style="display:none;"></font>';
    var HTML=document.getElementById("status");
    HTML.innerHTML=output;
}