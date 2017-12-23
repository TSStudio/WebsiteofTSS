<?php
ignore_user_abort(false);
set_time_limit(0);
$interval = 0.5;
$temp_key = 0;
do {
$str = shell_exec('more /proc/stat');
$pattern = "/(cpu[0-9]?)[\s]+([0-9]+)[\s]+([0-9]+)[\s]+([0-9]+)[\s]+([0-9]+)[\s]+([0-9]+)[\s]+([0-9]+)[\s]+([0-9]+)/";
preg_match_all($pattern, $str, $out);
echo "CPU利用率如下：<br>";
for($n=0;$n<count($out[1]);$n++)
{
echo $out[1][$n]."=".round(100*($out[1][$n]+$out[2][$n]+$out[3][$n])/($out[4][$n]+$out[5][$n]+$out[6][$n]+$out[7][$n]),3)."%<br>";
}
echo '//////////////////////////////////////////////////////////////////////<br>';
$str = shell_exec('more /proc/meminfo');
$pattern = "/(.+):\s*([0-9]+)/";
preg_match_all($pattern, $str, $out);
//计算内存占用百分比
$memall = $out[2][0];
$memused = $out[2][1];
$memusage = ($memused / $memall * 100);
$memusage = round($memusage,2);//四舍五入
echo "物理内存总量：".round($memall / 1024 ,2)."MB<br>";
echo "已使用的内存：".round($memused / 1024 ,2)."MB<br>";
echo "-----------------------------------------<br>";
echo "内存使用率：".$memusage."%<br>";
echo '//////////////////////////////////////////////////////////////////////<br>';
$str = shell_exec('more /proc/net/dev');
$pattern = "/(eth[0-9]+):\s*([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)\s+([0-9]+)/";
preg_match_all($pattern, $str, $out);
echo "网络接口利用率如下：<br>";
for($n=0;$n<count($out[1]);$n++)
{
echo $out[1][$n]."：收到 ".$out[3][$n]." 个数据包，发送 ".$out[11][$n]." 个数据包<br>";
}
echo "<script>document.body.innerHTML = \"\";</script>";
    sleep($interval); // 等待*秒钟
} while (true);
?>