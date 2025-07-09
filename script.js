// ON LOAD
window.addEventListener("load", function () {
 document.body.classList.add("show");

 const sections = document.querySelectorAll(".load");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("loaded");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

});


// IMAGE SLIDE
function imageSlide(){
const images = [
    'https://blackgirlai.com/wp-content/uploads/apollo13_images/Why-AI-Needs-Your-Unique-Voice-7m4g1bvzikwin40i1d6olr0e33kdoenddi.png',
    'me6.png',
    'https://blackgirlai.com/wp-content/uploads/apollo13_images/How-Parents-and-Teachers-Can-Introduce-Kids-to-AI-Header-7m40gmvz92mc5x1ryw2i12qpak7qnvmid2.png',
    'https://static.vecteezy.com/system/resources/previews/035/190/952/large_2x/ai-generated-ai-woman-innovation-female-science-robot-future-tech-technology-concept-human-person-photo.jpg',
        ];
let imageIndex = 0;
const imageOutput = document.querySelector(".myImage");

setInterval(() => {
  imageOutput.src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
}, 2000);
} imageSlide();

//TYPING 
function typingEffect() {
  const words = [
    "I'm a Web Developer",
    "I'm a Future Software Engineer",
    "I'm a Creative Thinker",
    "I'm a Dream Chaser",
    "I'm a Tech Girl",
    "I'm a Lifelong Learner",
    "I'm a Future Entrepreneur",
    "I'm a Digital Problem Solver",
    "I'm a Independent Woman",
    "I'm a Future Business Owner",
    "I'm a Future Visionary Leader",
    "I'm a Code Lover",
    "I'm a College Student",
    "I'm a God-Fearing Woman",
    "I'm a Future Full-Stack Developer",
    "I'm a Self-Taught Coder",
    "I'm a Problem Solver",
     "I'm a Hardworking Woman",
    "I'm a Future Millionaire",
    "I'm a Future House Owner",
    "I'm a App Creator",
    "I'm a Fashion Lover",
    "I'm a Bold and Focused",
    "I'm a Future Successful Black Woman"
  ];

  const output = document.querySelector('.typing');
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);
    output.textContent = currentText;

    if (!isDeleting) {
      charIndex++;
      if (charIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000); // wait after typing
        return;
      }
    } else {
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(type, isDeleting ? 60 : 100);
  }

  type();
}

typingEffect();

