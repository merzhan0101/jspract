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

function fun1(){
    var radi = document.getElementsByName('r1');//содержить массив эл радиобаттон
    for(var i = 0; i < radi.length; i++){//проверка выбран ли
        if(radi[i].checked){//если не выбран:
            alert('Выбран ' + i + ' элемент');
        }
    }
}



