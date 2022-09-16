function fun1(){
    //при двиге ползунка увел квадрат
    var rng = document.getElementById('r1');//range -> this input
    var div = document.getElementById('test');
    div.style.width = rng.value + 'px';
    // var p = document.getElementById('one');
    // i1.value = rng.value;
    // p.innerHTML = rng.value;
}

//#select
// function fun1(){
//     var sel = document.getElementById('mySelect').selectedIndex; //проверка выбранной опции
//     var options = document.getElementById('mySelect').options;
//     alert("Выбрана опция " + options[sel].text);
// }




















//№1: input

// function fun1(){
//     var chbox;
//     chbox = document.getElementById('one');

//     //проверка на галочку
//     if(chbox.checked){
//         alert('Выбран');
//     } else{
//         alert('Не выбран'); 
//     }
// }

// function fun1(){
//     var radi = document.getElementsByName('r1');//содержить массив эл радиобаттон
//     for(var i = 0; i < radi.length; i++){//проверка выбран ли
//         if(radi[i].checked){//если не выбран:
//             alert('Выбран ' + i + ' элемент');
//         }
//     }
// }
