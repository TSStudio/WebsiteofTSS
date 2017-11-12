var now = new Date();
var month = now.getMonth() + 1;     //月
var day = now.getDate();            //日
var Year = now.getFullYear();       //年
var dm = month + "-" + day;         //月-日
/*Get English Name*/
switch(month)
{
case 1:
	var EngMonth = "January";
break;
case 2:
	var EngMonth = "February";
break;
case 3:
	var EngMonth = "March";
break;
case 4:
	var EngMonth = "April";
break;
case 5:
	var EngMonth = "May";
break;
case 6:
	var EngMonth = "June";
break;
case 7:
	var EngMonth = "July";
break;
case 8:
	var EngMonth = "August";
break;
case 9:
	var EngMonth = "September";
break;
case 10:
	var EngMonth = "October";
break;
case 11:
	var EngMonth = "November";
break;
case 12:
	var EngMonth = "December";
break;
default:
	alert("出现故障！请联系TSS@mail.tmysam.top")
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