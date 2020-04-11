window.onload=num;

function num() {
    var wrap = document.querySelector('.content');
    for (var i = 2; i < 10; i++) {   
        var box = document.createElement("div");
        box.setAttribute("class", "box formula");
        wrap.appendChild(box);
        var list = document.createElement("ul");
        list.classList.add("list");
        box.appendChild(list);
        var list__title = document.createElement("li");
        list__title.classList.add("list__title");
        list__title.textContent = i;
        list.appendChild(list__title);
        for (var j = 1; j <= 9; j++) {
            var list__num = document.createElement("li");
            list__num.classList.add('list__item');
            list__num.textContent = `${i} * ${j} = ${i * j}`;
            list.appendChild(list__num);
        }
    }
}
