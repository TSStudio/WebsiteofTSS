var time = new Date();
var month = time.getMonth() + 1;
var day = time.getDate();
if (month==7)
{
    var doing=0;
    var dayLast = 31-day+4;
}
else if (month==8 && day<4)
{
    var doing=0;
    var dayLast = 4-day;
}
else if (month==8 && day>=4 && day<=15)
{
    var doing=1;
    switch(day)
    {
    case 4:
    var dayLast="第一天";
    break;
    case 5:
    var dayLast="第二天";
    break;
    case 6:
    var dayLast="第三天";
    break;
    case 7:
    var dayLast="第四天";
    break;
    case 8:
    var dayLast="第五天";
    break;
    case 9:
    var dayLast="第六天";
    break;
    case 10:
    var dayLast="第七天";
    break;
    case 11:
    var dayLast="第八天";
    break;
    case 12:
    var dayLast="第九天";
    break;
    case 13:
    var dayLast="第十天";
    break;
    case 14:
    var dayLast="第十一天";
    break;
    case 15:
    var dayLast="第十二天";
    break;
    default:
    var dayLast="Error!";
    }
}
else
{
    var doing=2;
    var dayLast="";
}
if (doing==0)
{
    var output = "距离出发还有" + dayLast + "天！<br>";
}
else if (doing==1)
{
    var output = "今天是" + dayLast + "！";
}
else
{
    var output = "行程已结束 ";
}
document.write(output);
//Part 2
var hrs = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
function process()
{
    var time = new Date();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    if (month==7)
    {
        var daylast7month = 31-day;
        var secondslast7month = daylast7month*86400;
        var secondstoday = hrs*3600;
        var secondstoday = min*60+secondstoday;
        var secondstoday = sec+secondstoday;
        var secondslasttoday = 86400-secondstoday;
        var secondslast7month = secondslasttoday+secondslast7month;
        var secondslast = secondslast7month+306600;
    }
    else
    {
        switch(day)
        {
            case 1:
            var secondstoday = hrs*3600;
            var secondstoday = min*60+secondstoday;
            var secondstoday = sec+secondstoday;
            var secondslasttoday = 86400-secondstoday;
            var secondslast = secondslasttoday+172800+47400;
            break;
            case 2:
            var secondstoday = hrs*3600;
            var secondstoday = min*60+secondstoday;
            var secondstoday = sec+secondstoday;
            var secondslasttoday = 86400-secondstoday;
            var secondslast = secondslasttoday+86400+47400;
            break;
            case 3:
            var secondstoday = hrs*3600;
            var secondstoday = min*60+secondstoday;
            var secondstoday = sec+secondstoday;
            var secondslasttoday = 86400-secondstoday;
            var secondslast = secondslasttoday+47400;
            break;
            case 4:
            var hrslast = 13-hrs;
            var secondslast = hrslast*3600;
            var minslast = 50-min;
            var secondslast = hrslast*60+secondslast;
            var seclast = 0-sec;
            var secondslast = seclast+secondslast;
            break;
        }
    }
    var gmtMins = 0-time.getTimezoneOffset();
    var gmtMinsdif = gmtMins-480;
    var gmtSecsdif = gmtMinsdif*60;
    var secondslast = secondslast-gmtSecsdif;
    var secon = document.getElementById("seconds");
    seconds.innerHTML="还剩" + secondslast + "秒出发。";
}
if (month==7 || month==8)
{
    if (month==8 && day>=5 && day<16)//main 13:10 go
    {
        document.write("正在行程当中！");
    }
    else if (month==8 && day==4)//第一天，摘取
    {
        if (hrs<13)
        {
            setInterval("process()",1000);
        }
        else if (hrs==13)//第一天的起飞小时
        {
            if (min<10)
            {
                setInterval("process()",1000);
            }
            else//>=10
            {
                document.write("正在行程当中！");
            }
        }
        else //第一天，行程中
        {
            document.write("正在行程当中！");
        }
    }
    else if (month==8 && day<4)
    {
        setInterval("process()",1000);
    }
    else if (month==8 && day<=15)//行程中
    {
        document.write("正在行程当中！");
    }
    else if (month==7)
    {
        setInterval("process()",1000);
    }
    else//行程结束
    {
        document.write("请查看历史文章");
    }
}
else
{
    document.write("请查看历史文章");
}