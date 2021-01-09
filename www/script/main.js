var ButtonMenu = document.querySelector('#MENUIMg');

var menu = document.querySelector('#menu');

var info = document.querySelector('#InfoIn');

var divInfo = document.querySelector('#INFOin');
//unit1
var inkol = document.querySelector(".jopl");

var inp = document.querySelector(".dropMenu1");

var checkTop1 = document.querySelector("#checkTop1");
//unit2
var checkTop2 = document.querySelector('#checkTop2');

var inp2 = document.querySelector('.dropMenu2');

var inkol2 = document.querySelector('.Unit2Level2');
///units  class
var units2 = document.querySelector('.units');

//topics
var bodyText = document.querySelector('.body_content');

var btnfirst = document.querySelector("#unit1topic1");


var topic1 = document.querySelector('.topic1');

inp.style.borderLeftWidth = "none"
    //unit1

inkol.addEventListener('click', function() {
    if (inp.classList[1] === 'none') {
        checkTop1.style.transform = 'rotate(90deg)';
        inp.classList.remove('none');
        inp.style.display = 'block';

    } else {
        inp.style.display = 'none';
        inp.classList.add('none')
            // console.log('gero has work');
        checkTop1.style.transform = 'rotate(0deg)';

    }

    checkTop1.style.transition = '0s';
    units2.style.width = "98%";
})

//unit2

inkol2.addEventListener('click', function() {
    // inp2.classList.remove('none');
    // checkTop2.style.transform = "rotate(90deg)";
    // checkTop2.style.transition = "0.1s";
    units2.style.width = "98%";
    // return inp2.style.display = "block";
    if (inp2.classList[1] === 'none') {
        checkTop2.style.transform = 'rotate(90deg)';
        inp2.classList.remove('none');
        inp2.style.display = 'block';

    } else {
        inp2.style.display = 'none';
        inp2.classList.add('none')
            // console.log('gero has work');
        checkTop2.style.transform = 'rotate(0deg)';

    }

    checkTop1.style.transition = '0s';


});


ButtonMenu.addEventListener('click', function() {

    divInfo.classList.add('none');

    let classMenu = menu.classList;

    if (classMenu[1] == "none") {

        classMenu.remove('none')
        inp.style.display = "none"
        inp2.style.display = 'none'
        checkTop1.style.transform = 'rotate(0deg)';
        checkTop2.style.transform = 'rotate(0deg)';
    } else {

        classMenu.add('none')

    }


});



info.addEventListener('click', function() {

    menu.classList.add('none');


    var ClassInfo = divInfo.classList;

    if (ClassInfo[1] == "none") {

        ClassInfo.remove("none")

    } else {
        ClassInfo.add("none")
    }

});
//vbbfjivk 
btnfirst.addEventListener('click', function() {
    bodyText.innerHTML = topic1.innerHTML;

    menu.classList.add('none');


})

//lopp

var topic2 = document.querySelector('.topic2');

var topic2Unit = document.querySelector('#unit1topic2');

topic2Unit.addEventListener('click', function() {

    bodyText.innerHTML = topic2.innerHTML;

    menu.classList.add('none');
});

var sinta = document.querySelector(".sintaxsis");

var topic3 = document.querySelector("#unit1topic3");

topic3.addEventListener('click', function() {
        bodyText.innerHTML = sinta.innerHTML;

        menu.classList.add('none');
    })
    // 3 youm mavzu;

var topic4 = document.querySelector("#unit1topic4");

var coments = document.querySelector(".comments");
topic4.addEventListener('click', function() {
    bodyText.innerHTML = coments.innerHTML;
    menu.classList.add('none');
});


//tagiryobands; 

var topic5 = document.querySelector('#unit1topic5');
var tagiryobanda = document.querySelector('.tagiryobands');

topic5.addEventListener("click", function() {
    bodyText.innerHTML = tagiryobanda.innerHTML;
    menu.classList.add('none');
});

// operator

var topic6 = document.querySelector('#unit1topic6');

var operator = document.querySelector('.operator');

topic6.addEventListener('click', function() {
    bodyText.innerHTML = operator.innerHTML;
    menu.classList.add('none');
});

// arifmetica

var topic7 = document.querySelector('#unit1topic7');

var arifmetica = document.querySelector('.arifmetica');


topic7.addEventListener('click', function() {
    bodyText.innerHTML = arifmetica.innerHTML;
    menu.classList.add('none');
});

//,uqoisavi

var topic8 = document.querySelector("#unit1topic8");

var muqoisa = document.querySelector(".muqoisai");

topic8.addEventListener('click', function() {
    bodyText.innerHTML = muqoisa.innerHTML;
    menu.classList.add('none');
});
// typeof  ma'lumotho
var topic9 = document.querySelector("#unit1topic9");

var typeofm = document.querySelector(".typeOf");

topic9.addEventListener('click', function() {

    bodyText.innerHTML = typeofm.innerHTML;

    menu.classList.add('none');
});
//function tojiki;

var topic10 = document.querySelector("#unit1topic10");

var func = document.querySelector('.funcsiya');

topic10.addEventListener('click', function() {

    bodyText.innerHTML = func.innerHTML;

    menu.classList.add('none');
});
//jsArray;

var topic11 = document.querySelector("#unit1topic11");

var jsArray = document.querySelector('.JsArray');
topic11.addEventListener('click', function() {

    bodyText.innerHTML = jsArray.innerHTML;
    menu.classList.add('none');
});



// methodArray

var topic12 = document.querySelector("#unit1topic12");

var thodArray = document.querySelector('.masivmetod');


topic12.addEventListener('click', function() {

    bodyText.innerHTML = thodArray.innerHTML;

    menu.classList.add('none');

});


//object;

var topic13 = document.querySelector("#unit1topic13");

var obyect = document.querySelector('.obyect');

topic13.addEventListener('click', function() {
    bodyText.innerHTML = obyect.innerHTML;

    menu.classList.add('none');
});

// unit2topic1;

var unit2top1 = document.querySelector('#unit2topic1');

var jsquery = document.querySelector('.Jquery');

unit2top1.addEventListener('click', function() {
    bodyText.innerHTML = jsquery.innerHTML;

});
//unit2topic2;

var unit2top2 = document.querySelector('#unit2topic2');

var veujs = document.querySelector('.vuejs');

unit2top2.addEventListener("click", function() {

    bodyText.innerHTML = veujs.innerHTML;
    menu.classList.add('none');
})