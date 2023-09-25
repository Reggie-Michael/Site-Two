// Get references to DOM elements

const webPage = document.getElementById('full-page');
const landingPage = document.getElementById('landing-page');
const disciplePage = document.getElementById('disciple-page');

let bodyHeight = parseFloat(getComputedStyle(document.body).height);
let pageHeight = parseFloat(getComputedStyle(webPage).height);
let pageGap = parseFloat(getComputedStyle(webPage).gap);
let landPageHeight = parseFloat(getComputedStyle(landingPage).height);
let landPageMargin = parseFloat(getComputedStyle(landingPage).marginTop) + parseFloat(getComputedStyle(landingPage).marginBottom);
let disciplePageHeight = parseFloat(getComputedStyle(disciplePage).height);
let disciplePageMargin = parseFloat(getComputedStyle(disciplePage).marginTop) + parseFloat(getComputedStyle(disciplePage).marginBottom);

console.log(`Webpage height is ${bodyHeight} and ${pageHeight}(main-container) , Webpage gap is ${pageGap}, Landing Page height is ${landPageHeight}, Landing Page margin is top${parseFloat(getComputedStyle(landingPage).marginTop)}, bottom${parseFloat(getComputedStyle(landingPage).marginBottom)} and total${landPageMargin}
Disciple Page height is ${disciplePageHeight}, Landing Page margin is top${parseFloat(getComputedStyle(disciplePage).marginTop)}, bottom${parseFloat(getComputedStyle(disciplePage).marginBottom)} and total${disciplePageMargin} .` )
let welcomeView = document.getElementById('hero');
// Modals
const modalWrap = [];
const modalClose = [];
const modal = [];
const modalInner = [];
const modalBase = [] ;



// Modal Wraps, Base and Close Buttons
for (let i = 0; i < 13; i++) {
    modalWrap.push(document.getElementById(`${i === 0 ? 'modalWrap' : 'modalWrap' + i}`)); // Modal Wraps
    modalBase.push(document.getElementById(`${i === 0 ? 'disciple' :  'disciple' + i}`));  //Base to Open Modal
    modalClose.push(document.getElementById(`${i === 0 ? 'close' : 'close' + i}`)); //Modal Close Button
    modal.push(document.getElementById(`${i === 0 ? 'modalBox' : 'modalBox' + i}`)) ; // Modal
    modalInner.push(document.getElementById(`${i === 0 ? 'modalInside' : 'modalInside' + i}`)) ; // Modal Content
}


console.log(modalClose);
console.log(modalWrap);
console.log(modal);
console.log(modalInner);
console.log(modalBase);


// Functions



document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function() {
        welcomeView.classList.remove("animate");

    }, 800)

});

function revealing(switched) {
    switched.classList.toggle("revealed");
   
}

function modalDisplay(modalWrapVar) {
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

    modal[i].addEventListener('click', function() {
        modalInner[i].classList.toggle('revealed')
    })
};


let br = document.createElement('br');

const scrollValue = document.getElementById('scroll');

window.addEventListener('load', () => {
    document.body.addEventListener('scroll', () => {
        scrollValue.textContent = `scrollTop: ${document.body.scrollTop}`;
        console.log(document.body.scrollTop)
    });
})

const header = document.getElementById('header');
const scrollPosition = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY < 100) { // You can adjust the scroll threshold here
        console.log("y")
        scrollValue.textContent = `100`;
    }  else if (window.scrollY < 200) {
        scrollValue.textContent = `200`;
        console.log('a')
    } else if (window.scrollY < 300) {
        scrollValue.textContent = `300`;
        console.log('u')
    } else if (window.scrollY < 400) {
        scrollValue.textContent = `400`;
        console.log('window.scrollY')
    } else if (window.scrollY < 500) {
        scrollValue.textContent = `500`;
        console.log('window.scrollX')
    } else if (window.scrollY < 600) {
        scrollValue.textContent = `600`;
        console.log(window.scrollX)
    } else if (window.scrollY < 700) {
        scrollValue.textContent = `700`;
        console.log(window.scrollY)

    }else if (window.scrollY < 800) {
        scrollValue.textContent = `800`;
        console.log('u')
    } else if (window.scrollY < 900) {
        scrollValue.textContent = `900`;
        console.log('window.scrollY')
    } else if (window.scrollY < 1000) {
        scrollValue.textContent = `1000`;
        console.log('window.scrollX')
    } else if (window.scrollY < 1100) {
        scrollValue.textContent = `1100`;
        console.log(window.scrollX)
    } else if (window.scrollY < 1200) {
        scrollValue.textContent = `1200`;
        console.log(window.scrollY)

    } else {
        scrollValue.textContent = `0`;

    }
});

window.addEventListener('scroll', () => {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;

    // Define the start and end positions for the animation
    const fadeInStart = 0; // Start fading in at 700 pixels from the top
    const fadeOutEnd = landPageHeight + landPageMargin; // Start fading out at 1400 pixels from the top
    const fadeInStart1 = landPageHeight / 2; // Start fading in at 700 pixels from the top
    const fadeOutEnd1 = disciplePageHeight + pageGap + (disciplePageMargin / 1.5); // Start fading out at 1400 pixels from the top

    // Check if the current scroll position is within the range for fading in
    if (scrollPosition >= fadeInStart && scrollPosition < fadeOutEnd) {
        landingPage.style.animationName = 'fade-in'; // Make the element fully visible
    } else {
        landingPage.style.animationName = 'fade-out'; // Make the element fully visible
    }

    // Check if the current scroll position is within the range for fading in
    if (scrollPosition >= fadeInStart1 && scrollPosition < fadeOutEnd1) {
        disciplePage.style.animationName = 'fade-in'; // Make the element fully visible
    } else {
        disciplePage.style.animationName = 'fade-out'; // Make the element fully visible
    }
});




