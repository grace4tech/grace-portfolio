// TO-DO : My work 

// HOME : twitter , resume (dowload)
// ABOUT : (done ✔️ )
// PORTOFIOL : 
// SERVICES : (done ✔️)
// CONTACT : (done ✔️)

function navigation(){
 
const links = document.querySelectorAll("a[data-section]");
const pages = document.querySelectorAll("main .section");

links.forEach(link =>{
  link.addEventListener("click" , (e)=>{

    e.preventDefault();
  
    const id = link.dataset.section;

    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active"); 
  })
})
} navigation(); 

/* RANDOM WORD */
const wordsOutput = document.getElementById("wordsOutput");
const words = [
  "WEB DEVELOPER",
  "FUTURE SOFTWARE ENGINEER",
  "COLLEGE STUDENT",
  "CONTENT CREATOR",
  "PROBLEM SOLVER",
  "FRONTEND DEVELOPER",
  "TECH LEARNER",
  "JAVASCRIPT EXPLORER",
  "CREATIVE THINKER",
  "ASPIRING FULL-STACK ENGINEER",
  "PROJECT BUILDER",
  "TECH INNOVATOR",
  "FAST LEARNER",
  "CODING ENTHUSIAST",
  "SOFTWARE DEVELOPMENT STUDENT",
  "TECH CONTENT MAKER",
  "TEAM COLLABORATOR",
  "INNOVATIVE DEVELOPER"
];

setInterval(()=>{
  const randomWord = words[Math.floor(Math.random() * words.length)];
  wordsOutput.textContent = randomWord;
} , 4000)


/* DAR-LIGHT MODE */
const toggleBtn = document.getElementById("toggleBtn");
const icon = document.getElementById("themeIcon");
toggleBtn.addEventListener("click",()=>{

  const body = document.querySelector("body");
  body.classList.toggle("BodyDarkMode"); 

  const logoTitle = document.querySelector(".logoTitle");
  logoTitle.classList.toggle("darkMode"); 

    const name = document.querySelector(".home .homeContent h1");
  name.classList.toggle("darkMode"); 

  const changingWord = document.querySelector(".home .homeContent h5 span");
  changingWord.classList.toggle("darkMode"); 

    const socialLinks = document.querySelector(".home .socialLinks ");
  socialLinks.classList.toggle("darkMode"); 

    const homeBtn = document.querySelector(".home .home-buttons");
  homeBtn.classList.toggle("darkMode"); 

      const homeImages = document.querySelector(".home-images");
  homeImages.classList.toggle("darkMode"); 

      const navigation = document.querySelector(".navBar .navigationLinks");
  navigation.classList.toggle("darkMode"); 

  const navLinks = document.querySelector(".navBar .links");
  navLinks.classList.toggle("darkMode"); 

  toggleBtn.classList.toggle("darkMode"); 
  if(icon.classList.contains("fa-moon")){
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }else{
   icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
  }

  const abouth1 = document.querySelector(".about .about-left h1");
  abouth1.classList.toggle("darkMode"); 

 const aboutWord = document.querySelector(".about .about-left h4 span");
  aboutWord.classList.toggle("darkMode"); 

document.querySelectorAll(".language").forEach(l => l.classList.toggle("darkMode"));

document.querySelectorAll(".service-front").forEach(s => s.classList.toggle("darkMode"));
document.querySelectorAll(".service-front p").forEach(p => p.classList.toggle("darkMode"));
document.querySelectorAll(".service-back").forEach(p => p.classList.toggle("darkMode"));
document.querySelector("#services h1").classList.toggle("darkMode"); 

document.querySelectorAll(".contact-divs a").forEach(p => p.classList.toggle("darkMode"));
document.querySelector(".contact-form").classList.toggle("darkMode"); 
})


// ABOUT QUESTIONS 
const question1 = document.getElementById("question1");
const answer1 = document.getElementById("answer1");
const lock1 = document.getElementById("lock1");

const question2 = document.getElementById("question2");
const answer2 = document.getElementById("answer2");
const lock2 = document.getElementById("lock2");

const question3 = document.getElementById("question3");
const answer3 = document.getElementById("answer3");
const lock3 = document.getElementById("lock3");

const question4 = document.getElementById("question4");
const answer4 = document.getElementById("answer4");
const lock4 = document.getElementById("lock4");

question1.addEventListener("click",()=>{

  if(lock1.classList.contains("fa-lock")){
    lock1.classList.remove("fa-lock");
    lock1.classList.add("fa-lock-open");
    answer1.style.display="block";
  }else{
    lock1.classList.add("fa-lock");
    lock1.classList.remove("fa-lock-open");
    answer1.style.display="none";
  }
})
question2.addEventListener("click",()=>{

  if(lock2.classList.contains("fa-lock")){
    lock2.classList.remove("fa-lock");
    lock2.classList.add("fa-lock-open");
    answer2.style.display="block";
  }else{
    lock2.classList.add("fa-lock");
    lock2.classList.remove("fa-lock-open");
    answer2.style.display="none";
  }
})
question3.addEventListener("click",()=>{

  if(lock3.classList.contains("fa-lock")){
    lock3.classList.remove("fa-lock");
    lock3.classList.add("fa-lock-open");
    answer3.style.display="block";
  }else{
    lock3.classList.add("fa-lock");
    lock3.classList.remove("fa-lock-open");
    answer3.style.display="none";
  }
})
question4.addEventListener("click",()=>{

  if(lock4.classList.contains("fa-lock")){
    lock4.classList.remove("fa-lock");
    lock4.classList.add("fa-lock-open");
    answer4.style.display="block";
  }else{
    lock4.classList.add("fa-lock");
    lock4.classList.remove("fa-lock-open");
    answer4.style.display="none";
  }
})

const aboutMeWords = document.getElementById("aboutMeWords"); 
setInterval(()=>{
  const randomWord = words[Math.floor(Math.random() * words.length)];
  aboutMeWords.textContent = randomWord;
} , 4000)

