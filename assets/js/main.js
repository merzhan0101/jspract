document.getElementById('nav').onmouseover = function(event){
    var target = event.target;//отслеживает клик мыши
    if(target.className == 'menu-item'){
        var s = target.getElementsByClassName('submenu');
        closeMenu();//вскрывает закр меню
        s[0].style.display = 'block';//s -> будет массив
    }
}

//функ отслеж курсор в меню или в подменю ли она
document.onmouseover = function(event){
    var target = event.target;
    console.log(event.target);
    if(target.className != 'menu-item' && target.className != 'submenu'){
        closeMenu();
    }
}


function closeMenu(){
    var menu = document.getElementById('nav');
    var subm = document.getElementsByClassName('submenu');
    for(var i = 0; i < subm.length; i++){
        subm[i].style.display = "none";
    }
}