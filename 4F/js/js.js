function worldtime() {
    var country = ["NEW YORK", "LONDON", "BANGKOK", "TAIWAN", "SYDNEY"];
    var timeZone = ['America/New_York','Europe/London','Asia/Bangkok','Asia/Taipei','Australia/Sydney']; //設定各國時區
    var month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    var str ="";

    for (var i=0;i<country.length;i++){
        var date="";
        var country_time = new Date().toLocaleString("en-GB", { // en-us為顯示語言
            timeZone:timeZone[i], 
            hour12:false, // 顯示24小時制度
        });
        //原為 XX/XX/XXXX, XX:XX:XX
        country_time = country_time.split(','); // 以 , 分開
        date = country_time[0].split('/'); // 以 / 分開
        date = `${date[0]} ${month[date[1]-1]}. ${date[2]}`;
        country_time = country_time[1].slice(0,-3);

        var clock_list = document.querySelector(".clock_list");
        str += `
        <div class="clock_list_item">
            <div class="clock_list_left">
                <div class="clock_list_area">${country[i]}</div>
                <div class="clock_list_date">${date}</div>
            </div>
            <div class="clock_list_right">
                <div class="clock_list_time">${country_time}</div>
            </div>
        </div>
        `;
    }
    clock_list.innerHTML = str; 
    setTimeout('worldtime()',1000);   
}

worldtime();