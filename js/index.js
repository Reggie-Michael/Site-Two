
let modalWrap = document.getElementById("modalWrap");
let modalWrap1 = document.getElementById("modalWrap1");
let modalWrap2 = document.getElementById("modalWrap2");
let modalWrap3 = document.getElementById("modalWrap3");
let modalWrap4 = document.getElementById("modalWrap4");
let modalWrap5 = document.getElementById("modalWrap5");
let modalWrap6 = document.getElementById("modalWrap6");
let modalWrap7 = document.getElementById("modalWrap7");
let modalWrap8 = document.getElementById("modalWrap8");
let modalWrap9 = document.getElementById("modalWrap9");
let modalWrap10 = document.getElementById("modalWrap10");
let modalWrap11 = document.getElementById("modalWrap11");
let modalWrap12 = document.getElementById("modalWrap12");


let modalWrapSecond = document.querySelectorAll('flip-box-wrap active');
let modal = document.getElementById("modalBox");
// let box = document.getElementById("flip-box");

// Modal Close Buttons 
let modalClose = document.getElementById("close")
let modalClose1 = document.getElementById("close1")
let modalClose2 = document.getElementById("close2")
let modalClose3 = document.getElementById("close3")
let modalClose4 = document.getElementById("close4")
let modalClose5 = document.getElementById("close5")
let modalClose6 = document.getElementById("close6")
let modalClose7 = document.getElementById("close7")
let modalClose8 = document.getElementById("close8")
let modalClose9 = document.getElementById("close9")
let modalClose10 = document.getElementById("close10")
let modalClose11 = document.getElementById("close11")
let modalClose12 = document.getElementById("close12")

// inner modal 
let modalInner = document.getElementById("modalInside");

// Modal Open Faces 
let modalBase = document.getElementById("firstDisciple");
let modalBase1 = document.getElementById("secondDisciple");
let modalBase2 = document.getElementById("thirdDisciple");
let modalBase3 = document.getElementById("fourthDisciple");
let modalBase4 = document.getElementById("fifthDisciple");
let modalBase5 = document.getElementById("sixthDisciple");
let modalBase6 = document.getElementById("seventhDisciple");
let modalBase7 = document.getElementById("eighthDisciple");
let modalBase8 = document.getElementById("ninthDisciple");
let modalBase9 = document.getElementById("tenthDisciple");
let modalBase10 = document.getElementById("eleventhDisciple");
let modalBase11 = document.getElementById("twelfthDisciple");
let modalBase12 = document.getElementById("twelfthDisciple2");


// Functions 

function revealing(switched) {
    switched.classList.toggle("revealed");
};

function modalDisplay (modalWrapVar) {
    modalWrapVar.classList.remove('d-none');
    modalWrapVar.classList.add("flex-center");
    modalWrapVar.classList.add("active");
    modalWrapVar.style.animationName = "fade-in";

}
function modalReClick (modalWrapBaseVar, ModalItself) {
    modalWrapBaseVar.addEventListener("click", function () {
        modalDisplay(ModalItself);
    });
}

function modalDisplayUnset (modalWrapVar2) {
    modalWrapVar2.style.animationName = "fade-out";
    setTimeout(function (){
        modalWrapVar2.classList.remove('active');
        modalWrapVar2.classList.remove("flex-center");
        modalWrapVar2.classList.add("d-none");

    }, 800);

}
function modalFade (modalWrapBaseVar2, ModalItself2) {
    modalWrapBaseVar2.addEventListener("click", function () {
        modalDisplayUnset(ModalItself2);
    });
}

// inner modal activate function

modalReClick(modalBase, modalWrap);
modalReClick(modalBase1, modalWrap1);
modalReClick(modalBase2, modalWrap2);
modalReClick(modalBase3, modalWrap3);
modalReClick(modalBase4, modalWrap4);
modalReClick(modalBase5, modalWrap5);
modalReClick(modalBase6, modalWrap6);
modalReClick(modalBase7, modalWrap7);
modalReClick(modalBase8, modalWrap8);
modalReClick(modalBase9, modalWrap9);
modalReClick(modalBase10, modalWrap10);
modalReClick(modalBase11, modalWrap11);
modalReClick(modalBase12, modalWrap12);

modalFade(modalClose, modalWrap);
modalFade(modalClose1, modalWrap1);
modalFade(modalClose2, modalWrap2);
modalFade(modalClose3, modalWrap3);
modalFade(modalClose4, modalWrap4);
modalFade(modalClose5, modalWrap5);
modalFade(modalClose6, modalWrap6);
modalFade(modalClose7, modalWrap7);
modalFade(modalClose8, modalWrap8);
modalFade(modalClose9, modalWrap9);
modalFade(modalClose10, modalWrap10);
modalFade(modalClose11, modalWrap11);
modalFade(modalClose12, modalWrap12);

modal.onclick = function(){revealing(modalInner)};


