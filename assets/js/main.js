var tab;
var tabContent;

window.onload = function(){//получаем массивы с таб, табКонтент
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);//вскрытие вкладок
}

function hideTabsContent(a){
    for(var i = a; i < tabContent.length; i++){//запус цикл от пар при вызове функ до оконч массива табКонт
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick = function(event){//отслеж все клики внутри облс с id-tabs
    var target = event.target;
    if(target.className == 'tab'){
        for(var i = 0; i < tab.length; i++){
            if(target == tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b){
    if(tabContent[b].classList.contains('hide')){//пров на клик hide
        hideTabsContent(0);//откр табс
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}