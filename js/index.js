// Get references to DOM elements

const webPage = document.getElementById('full-page');
const landingPage = document.getElementById('landing-page');
const disciplePage = document.getElementById('disciple-page');

const mainBox = document.getElementById('mainBox');
let bodyHeight = parseFloat(getComputedStyle(document.body).height);
let pageHeight = parseFloat(getComputedStyle(webPage).height);
let pageGap = parseFloat(getComputedStyle(webPage).gap);
let landPageHeight = parseFloat(getComputedStyle(landingPage).height);
let landPageMargin = parseFloat(getComputedStyle(landingPage).marginTop) + parseFloat(getComputedStyle(landingPage).marginBottom);
let disciplePageHeight = parseFloat(getComputedStyle(disciplePage).height);
let disciplePageMargin = parseFloat(getComputedStyle(disciplePage).marginTop) + parseFloat(getComputedStyle(disciplePage).marginBottom);

console.log(`Webpage height is ${bodyHeight} and ${pageHeight}(main-container) , Webpage gap is ${pageGap}, Landing Page height is ${landPageHeight}, Landing Page margin is top${parseFloat(getComputedStyle(landingPage).marginTop)}, bottom${parseFloat(getComputedStyle(landingPage).marginBottom)} and total${landPageMargin}
Disciple Page height is ${disciplePageHeight}, Landing Page margin is top${parseFloat(getComputedStyle(disciplePage).marginTop)}, bottom${parseFloat(getComputedStyle(disciplePage).marginBottom)} and total${disciplePageMargin} .`)
let welcomeView = document.getElementById('hero');
// Modals
const modalWrap = [];
const modalClose = [];
const modal = [];
const modalInner = [];
const modalBase = [];



// Modal Wraps, Base and Close Buttons
for (let i = 0; i < 13; i++) {
    modalWrap.push(document.getElementById(`${i === 0 ? 'modalWrap' : 'modalWrap' + i}`)); // Modal Wraps
    modalBase.push(document.getElementById(`${i === 0 ? 'disciple' : 'disciple' + i}`));  //Base to Open Modal
    modalClose.push(document.getElementById(`${i === 0 ? 'close' : 'close' + i}`)); //Modal Close Button
    modal.push(document.getElementById(`${i === 0 ? 'modalBox' : 'modalBox' + i}`)); // Modal
    modalInner.push(document.getElementById(`${i === 0 ? 'modalInside' : 'modalInside' + i}`)); // Modal Content
}


console.log(modalClose);
console.log(modalWrap);
console.log(modal);
console.log(modalInner);
console.log(modalBase);


// Functions



document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        welcomeView.classList.remove("animate");

    }, 800)

});

function revealing(switched) {
    switched.classList.toggle("revealed");

}

function modalDisplay(modalWrapVar) {
    // mainBox.classList.add('activate')
    modalWrapVar.classList.remove('d-none');
    modalWrapVar.classList.add("flex-center");
    modalWrapVar.classList.add("active");
    modalWrapVar.style.animationName = "fade-in";
    document.body.classList.add("modal-open");
    webPage.classList.add("modal-open");
}

function modalReClick(modalWrapBaseVar, ModalItself) {
    modalWrapBaseVar.addEventListener("click", function () {
        modalDisplay(ModalItself);
    });
}

function modalDisplayUnset(modalWrapVar2) {
    modalWrapVar2.style.animationName = "fade-out";
    setTimeout(function () {
        modalWrapVar2.classList.remove('active');
        modalWrapVar2.classList.remove("flex-center");
        modalWrapVar2.classList.add("d-none");
        // mainBox.classList.remove('activate')
        document.body.classList.remove("modal-open");
        webPage.classList.remove("modal-open");

    }, 800);
}


function modalFade(modalWrapBaseVar2, ModalItself2) {
    modalWrapBaseVar2.onclick = function () {
        modalDisplayUnset(ModalItself2);
    }
}


// Inner modal activate function
for (let i = 0; i < 13; i++) {
    // Modal Activate 
    modalReClick(modalBase[i], modalWrap[i]);

    // Modal De-activate 
    modalFade(modalClose[i], modalWrap[i]);

    // Flipping Modal

    modal[i].addEventListener('click', function () {
        modalInner[i].classList.toggle('revealed')
    })
};


