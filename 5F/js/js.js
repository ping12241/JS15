var xhr = new XMLHttpRequest();
xhr.open('get','https://script.google.com/macros/s/AKfycbzl6KKgb4v2-F3SCVxVaXjnMwM_XQvnk2A08nw7NjmGfuRVmak0/exec?url=http://opendata2.epa.gov.tw/AQI.json', true);

xhr.send(null);
xhr.onload=county;

function county () {
    var CallBackData = JSON.parse(xhr.responseText);
    var CountyAry = [];
    var CountyList = document.querySelector('.countylist');
    var County = document.querySelector('.content_title');
    var PublishTime = document.querySelector('.content_datatime');
    var table_list = document.querySelector('.content_city_item'); //右方偵測站內容資料
    var optionValue;
    var timeAry;
    var data = [];
    var SiteNameValue;

    for(var i=0; i<CallBackData.length; i++) {
        CountyAry.push(CallBackData[i].County); // 縣市資料 JSON內的County
        timeAry = CallBackData[i].PublishTime; // 更新時間
        data.push(CallBackData[i]); //所有資料
    }

    var select = CountyAry.filter(function(item,key,arr) {
        return arr.indexOf(item) === key; // 抓到共22個縣市
    }); 

    for(var i=0; i<select.length; i++) { //select下拉選單內容
        var option = document.createElement('option');
        option.value = select[i];
        option.innerText = select[i];
        CountyList.appendChild(option);
    }

  var datalist = () => {
        if(!optionValue) {
            optionValue = '基隆市';
            County.innerText = optionValue;
            PublishTime.innerText = timeAry + ' 更新';
        }
        var str = '';
        var selectStr = '';
        for(var i=0; i<data.length; i++) {
            if(optionValue === data[i].County) {
                var AQI = data[i].AQI;
                if (AQI !== '') {
                    str += `
                        <thead>
                            <tr>
                                <td class="content_city">${data[i].SiteName}</td>
                                <td class="content_county_num">${data[i].AQI}</td>
                            </tr>
                        </thead>
                        `;
                } else {
                    str += `
                        <thead>
                            <tr>
                                <td class="content_city">${data[i].SiteName}</td>
                                <td class="content_county_num">${data[i].Status}</td>
                            </tr>
                        </thead>
                        `;
                }
                table_list.innerHTML = str;
                var AQIcolor = document.querySelectorAll('.content_county_num');
                for(var j=0; j<AQIcolor.length; j++) {
                    var AQIText = AQIcolor[j].innerText; //判斷AQI數字範圍改背景顏色
                   if(AQIText <= 50) {
                    AQIcolor[j].setAttribute('style','background: #95F084;');
                   } else if (AQIText >= 51 && AQIText <= 100) {
                    AQIcolor[j].setAttribute('style','background: #FFE695;');
                   } else if (AQIText >= 101 && AQIText <= 150) {
                    AQIcolor[j].setAttribute('style','background: #FFAF6A;');
                   } else if (AQIText >= 151 && AQIText <= 200) {
                    AQIcolor[j].setAttribute('style','background: #FF5757;');
                   } else if (AQIText >= 201 && AQIText <= 300) {
                    AQIcolor[j].setAttribute('style','background: #9777FF;');
                   } else if (AQIText >= 301 && AQIText <= 400) {
                    AQIcolor[j].setAttribute('style','background: #AD1774;');
                   }
                }
            }
        }
    };
    datalist();

    var selectList = (e) => {
        optionValue = e.target.value;
        if ( optionValue === '請選擇地區') {return}
        County.innerText = optionValue;
        PublishTime.innerText = timeAry + '更新';
        datalist();
    };

    CountyList.addEventListener('click',selectList,false); //清單中被點即時監聽執行selecctList

    var SiteName_select = document.querySelector('.content_city');
    var AQI_select = document.querySelector('.content_county_num');
    var O3 = document.querySelector('.O3');
    var PM10 = document.querySelector('.PM10');
    var PM2 = document.querySelector('.PM2');
    var CO = document.querySelector('.CO');
    var SO2 = document.querySelector('.SO2');
    var NO2 = document.querySelector('.NO2');

    let dataSiteName = () => {
        if(!SiteNameValue) {
            SiteNameValue = '基隆';
        }
        for(var i=0; i<data.length; i++) {
            if(SiteNameValue === data[i].SiteName) {
                SiteName_select.innerText = data[i].SiteName;
                if(data[i].AQI === '') {
                    AQI_select.innerHTML = '';
                    O3.innerHTML = '';
                    PM10.innerHTML = '';
                    PM2.innerHTML = '';
                    CO.innerHTML = '';
                    SO2.innerHTML = '';
                    NO2.innerHTML = '';
                    AQI_select.setAttribute('style','background: none;');
                } else  {
                    AQI_select.innerHTML = data[i].AQI;
                    O3.innerHTML = data[i].O3;
                    PM10.innerHTML = data[i].PM10;
                    PM2.innerHTML = data[i]['PM2.5'];
                    CO.innerHTML = data[i].CO;
                    SO2.innerHTML = data[i].SO2;
                    NO2.innerHTML = data[i].NO2;

                    var AQIText = AQI_select.innerText;
                    if(AQIText <= 50) {
                     AQI_select.setAttribute('style','background: #95F084;');
                    } else if (AQIText >= 51 && AQIText <= 100) {
                     AQI_select.setAttribute('style','background: #FFE695;');
                    } else if (AQIText >= 101 && AQIText <= 150) {
                     AQI_select.setAttribute('style','background: #FFAF6A;');
                    } else if (AQIText >= 151 && AQIText <= 200) {
                     AQI_select.setAttribute('style','background: #FF5757;');
                    } else if (AQIText >= 201 && AQIText <= 300) {
                     AQI_select.setAttribute('style','background: #9777FF;');
                    } else if (AQIText >= 301 && AQIText <= 400) {
                     AQI_select.setAttribute('style','background: #AD1774;');
                    }
                }
            }

        }
    }
    dataSiteName();

    var Select_SiteName = (e) => {
        SiteNameValue = e.target.textContent; //和下拉式選單選項文字一樣
        dataSiteName();
    }

    table_list.addEventListener('click', Select_SiteName, false);
}