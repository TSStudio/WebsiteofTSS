function Search(){
	var str=leinput.word.value;
    var outpux=str;
    var outpux=outpux.replace(/R/g, "82;");
    document.getElementById("output").innerText=str + ":" + outpux;
}