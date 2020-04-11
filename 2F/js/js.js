function clock_time() {
    var clock_time = new Date();
    var hour = clock_time.getHours();
    var min = clock_time.getMinutes();
    var sec = clock_time.getSeconds();
    var secDis = 180+sec*6;
    var minDis = 180+min*6+(secDis/60);
    var hourDis = -90+hour*30+(30/60*min);
    document.querySelector('.sec').setAttribute('style','transform: rotate('+secDis+'deg);');
    document.querySelector('.min').setAttribute('style','transform: rotate('+minDis+'deg);');
    document.querySelector('.hour').setAttribute('style','transform: rotate('+hourDis+'deg);');
    setTimeout('clock_time()',1000);
}

clock_time();