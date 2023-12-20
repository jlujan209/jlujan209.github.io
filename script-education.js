var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });




// Function to check if a certain percentage of an element is in the viewport
function isPartialInViewport(element, percentage) {
    const rect = element.getBoundingClientRect();
    const viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
    const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    return (visibleHeight / element.clientHeight) >= percentage;
}

// Function to handle intersection and apply the appearance
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}

// Create an observer
const observer2 = new IntersectionObserver(handleIntersection, { threshold: 0.25 });

// Get the section element
const coursesSection = document.getElementById('courses');

// Observe the section
observer2.observe(coursesSection);


// Function to handle intersection and apply the appearance
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-left');
            observer.unobserve(entry.target);
        }
    });
}

// Create an observer
const observer3 = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Get the section element
const highschoolSection = document.getElementById('highschool');

// Observe the section
observer3.observe(highschoolSection);
