

window.addEventListener('scroll', () => {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;

    // Define the start and end positions for the animation
    const fadeInStart = 0; // Start fading in at 700 pixels from the top
    const fadeOutEnd = landPageHeight + landPageMargin; // Start fading out at 1400 pixels from the top
    const fadeInStart1 = 400; // Start fading in at 700 pixels from the top
    const fadeOutEnd1 = 1900; // Start fading out at 1400 pixels from the top

    // Check if the current scroll position is within the range for fading in
    if (scrollPosition >= fadeInStart && scrollPosition < fadeOutEnd) {
        landingPage.style.animationName = 'fade-in'; // Make the element fully visible
    } else {
        landingPage.style.animationName = 'fade-out'; // Make the element fully visible
    }

    // Check if the current scroll position is within the range for fading in
    // if (scrollPosition >= fadeInStart1 && scrollPosition < fadeOutEnd1) {
    //     disciplePage.style.animationName = 'fade-in'; // Make the element fully visible
    // } else {
    //     disciplePage.style.animationName = 'fade-out'; // Make the element fully visible
    // }
});

