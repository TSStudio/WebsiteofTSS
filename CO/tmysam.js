function tmysam(SearchCode)
{
output=new Object();
switch(SearchCode)
{
case '00000000'://CODE
  output.name='t';
  output.type='e';
  output.url1='s';
  output.url2='t';
  output.url3='';
  break;
case '2'://CODE
  break;
default:
  alert("错误：该视频不存在");
}
}