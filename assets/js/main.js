var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

//закрывание мод окна
var span = document.getElementsByClassName("class")[0];
span.onclick = function(){
    modal.style.display = "none";
}
