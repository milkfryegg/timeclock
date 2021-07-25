function worktime(){
    //從系統給的函數去抓時間
    var time= new Date();
    var dname = time.getDay(),
        mo = time.getMonth(),
        yr = time.getFullYear(),
        dnum = time.getDate(),
        hr = time.getHours(),
        min = time.getMinutes(),
        sec= time.getSeconds(),

    //如果小時超過12 就是下午pm 低於12 就是早上am
     pe="AM";
    if(hr >= 12){
        pe="PM";
    }
    else{
        pe="AM"
    }
    //轉換兩位數字
    Number.prototype.pad = function(digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
        }

    var months=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
    var week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values=[week[dname],months[mo],dnum.pad(2),yr,hr.pad(2),min.pad(2),sec.pad(2),pe];

    for  (var i=0; i<ids.length;i++) 
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}

function startTime(){
    worktime();
    window.setInterval("worktime()",1);
}
