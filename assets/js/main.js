// var screen = window.innerHeight; //получаем через размер окна
// var screen = document.body.clientWidth;//размер док
//var screen = document.documentElement.clientWidth;//получ через размер док
// console.log(screen);


//#2
// var screen = window.matchMedia("(max-width: 768px)");
// if(screen.matches){ //проверка ширины экрана, matches(true, false)
//     console.log("<768px");
// }
// else{
//     console.log(">768px");
// }

//создаем обработчик событ, котор сраб при обнаруж событии
if(matchMedia){
    var screen = window.matchMedia("(max-width: 768px)");
    screen.addListener(changes);
    changes(screen);
}

function changes(screen){
    var message = (screen.matches ? "less" : "more") + " than 768px";
    document.getElementById("now").firstChild.nodeValue = message;

    
    // if(screen.matches){
    //     console.log("<768px");
    // }
    // else{
    //     console.log(">768px");
    // }
}