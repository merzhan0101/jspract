var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

//при клике откр мод окно
btn.onclick = function(){
    modal.style.display = "block";//стили блок
}

//закрытие мод окно
span.onclick = function(){
    modal.style.display = "none";//не показ эл
}

//кликает вокруг окна
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}