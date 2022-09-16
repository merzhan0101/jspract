function myMove(){
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);//(функ, интервал в мс) вып много раз, через разные пром вр, пока он не будет останов
    function frame(){
        if(pos == 350){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + 'px';//знач в пикс будет увел
            elem.style.left = pos + 'px';
        }
    }
}