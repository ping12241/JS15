var text_num=document.getElementById("text_num").innerHTML;

function key(num) {
    if (text_num.length<8) {
        text_num=text_num+num;
        var parts = text_num.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');      
        document.getElementById("text_num").innerHTML= parts.join('.');
    }
}

function square(num) {
    text_num = document.getElementById("text_num").innerHTML.replace(/[,]+/g,"");
    document.getElementById("operation").innerHTML = text_num+num;
    text_num = document.getElementById("text_num").innerHTML="";
}

function result() {
    var operation = document.getElementById("operation").innerHTML;
    if (text_num == "") {
        document.getElementById("text_num").innerHTML="";
    }
    else {
        var ans = eval(operation+text_num);
        var parts = ans.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        document.getElementById("text_num").innerHTML=parts.join('.');
        operation = document.getElementById("operation").innerHTML="";
        text_num="";
    }
}

function back() {
    text_num=text_num.substring(0,text_num.length-1);
    var parts = text_num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.getElementById("text_num").innerHTML= parts.join('.');
}

function clean() {
    text_num = document.getElementById("text_num").innerHTML="";
    document.getElementById("operation").innerHTML = "";
}

/*
function removeTransition(e) {
    if (e.propertyName !== "transform") return; //略掉其他 propertyName 不是 transform 的物件
    e.target.classList.remove("box_click"); //指向觸發
}

function key_in(e) {
    var box = document.querySelector(`div[data-key="${e.keyCode}"]`);
    text_num = document.getElementById("text_num").innerHTML;
    var num=String.fromCharCode(e.keyCode);
    document.getElementById("text_num").innerHTML=text_num+num;
    box.classList.add("box_click");
    var boxs = document.querySelectorAll(".box"); 
    boxs.forEach(box => box.addEventListener("transitionend", removeTransition));
}

window.addEventListener('keydown', key_in);
*/
