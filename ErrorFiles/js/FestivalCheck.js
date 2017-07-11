var now = new Date();
var month = now.getMonth() + 1;     //月
var day = now.getDate();            //日
var Year = now.getFullYear();       //年
var dm = month + "-" + day;         //月-日
/*Get English Name*/
if (month=="1")
    {
		var EngMonth = "January";
	}
else if (month=="2")
    {
		var EngMonth = "February";
	}
else if (month=="3")
    {
		var EngMonth = "March";
	}
else if (month=="4")
    {
		var EngMonth = "April";
	}
else if (month=="5")
    {
		var EngMonth = "May";
	}
else if (month=="6")
    {
		var EngMonth = "June";
	}
else if (month=="7")
    {
		var EngMonth = "July";
	}
else if (month=="8")
    {
		var EngMonth = "August";
	}
else if (month=="9")
    {
		var EngMonth = "September";
	}
else if (month=="10")
    {
		var EngMonth = "October";
	}
else if (month=="11")
    {
		var EngMonth = "November";
	}
else if (month=="12")
    {
		var EngMonth = "December";
	}

var n = day % 100; //加入后缀
var suffix = ['th', 'st', 'nd', 'rd', 'th'];
var ord = n < 21 ? (n < 4 ? suffix[n] : suffix[0]) : (n % 10 > 4 ? suffix[0] : suffix[n % 10]);
var Daywsuf = day + ord;

var Output = EngMonth + " " + Daywsuf + "," + Year

document.write("Today is ")

if (dm=="1-1")//元旦
    {
	    alert("New year's Day");
		document.write("New year's Day!!!");
	}
else if (dm=="3-8")//妇女节
    {
		alert("International Working Women's Day");
	    document.write("International Working Women's Day");
	}
else if (dm=="3-12")//植树节
    {
		alert("Arbor Day");
	    document.write("Arbor Day");
	}
else if (dm=="5-1")//劳动节
    {
		alert("International Labour Day");
	    document.write("International Labour Day");
	}
else if (dm=="6-1")//儿童节
    {
		alert("Children's Day");
	    document.write("Children's Day");
	}
else if (dm=="7-1")//建党节
    {
		alert("Party's Day");
	    document.write("Party's Day");
	}
else if (dm=="8-1")//建军节
    {
		alert("Army's Day");
	    document.write("Army's Day");
	}
else if (dm=="10-1")//国庆节
    {
		alert("The National Day");
	    document.write("The National Day");
	}
else
    {
		document.write(Output)
	}