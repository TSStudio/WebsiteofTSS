window.onload=function(){
//定时器每秒调用100次fnDate()
setInterval(function(){
fnDate();
},10);
}
//js 获取当前时间
function fnDate(){
var oDiv=document.getElementById("Time");
var date=new Date();
var year=date.getFullYear();//当前年份
var month=date.getMonth();//当前月份
var data=date.getDate();//天
var hours=date.getHours();//小时
var minute=date.getMinutes();//分
var second=date.getSeconds();//秒
var time=fnW(hours)+":"+fnW(minute)+":"+fnW(second);
oDiv.innerHTML=time;
}
//补位 当某个字段不是两位数时补0
function fnW(str){
var num;
str>9?num=str:num="0"+str;
return num;
} 