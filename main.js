
/* Add javascript to add active class and scroll to top on link click */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
    document.querySelector(event.target.hash).scrollIntoView({
      behavior: 'smooth'
    });
  });
});



let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');
let links = document.querySelectorAll('.navbar a');

links.forEach(link => {
  link.addEventListener('click', function () {
    navbar.classList.add('move');
    section.classList.add('move');
  });
});



// Get the button
const topIcon = document.querySelector("#top-icon");

// Listen for scroll events
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollY = window.scrollY;

  // If the scroll position is 40cm or more, show the button
  if (scrollY > 400) {
    topIcon.classList.remove("hidden");
    topIcon.classList.add("visible");
  } else {
    topIcon.classList.remove("visible");
    topIcon.classList.add("hidden");
  }
});

// Listen for click events on the button
topIcon.addEventListener("click", () => {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// pop-up box for workexperience more button
function showMessage1() {
  alert("Additional information about this job experience.");
}








// page refresh go back to top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}





// var text2 = "I'm Vinod Yedla";
var text2 = " Vinod Yedla";
var delay = 150; // delay between characters, in milliseconds
var hello_name = document.querySelector(".hello_name span");

function type2() {
  if (text2.length > 0) {
    hello_name.innerHTML += text2.charAt(0);
    text2 = text2.substring(1);
    setTimeout(type2, delay);
  }
}
setTimeout(type2, 1500);
// type2();




// Typing text tech-obsessed1,2,3
// const texts = ['Tech-obsessed', 'TroubleShooter', 'Google-Ling' , 'Tech-Maven' , 'Tech-addict' , 'Surfing', 'Debugger'];
const texts = ['Tech-Maven' , 'Tech-addict' , 'Surfing', 'Debugger'];
  let index = 0;

  setInterval(() => {
    const typingText = document.querySelector('.typing-text');
    if (index === texts.length) {
      index = 0;
    }
    typingText.textContent = texts[index];
    index++;
  }, 2000);




// EmailJS function 

const contactForm = document.querySelector("#contact-form");
const submitButton = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneNumberInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");


const publicKey = "fDzG0x_HkPMrtvMFg";
const serviceID = "service_cbbf4ra";
const templateID = "template_0ps3qfo";


emailjs.init(publicKey);
contactForm.addEventListener("submit", e => {

  e.preventDefault();
  submitButton.innerText = "Just A Moment...";

  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    phoneNumber: phoneNumberInput.value,
    message: messageInput.value,
  }
  emailjs.send(serviceID,templateID,inputFields)
  .then(() => {
    submitButton.innerText = "Message Sent Successfully";
    nameInput.value = "",
    emailInput.value = "",
    phoneNumberInput.value = "",
    messageInput.value = "";

     // Refresh the page after 3 seconds
     setTimeout(() => {
      window.location.reload();
    }, 3000);


  }, (error) => {
    submitButton.innerText = "Something went wrong";
  });
});



  

// nav bar

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
// let searchBtn = document.querySelector(".bx-search");
let navLinks = document.querySelectorAll(".nav-list a");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
    menuBtnChange(); //calling the function(optional)
  });
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-x"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-x", "bx-menu"); //replacing the iocns class
  }
}

// Close sidebar when clicking outside
document.addEventListener("click", (event) => {
  const targetElement = event.target;
  if (!sidebar.contains(targetElement) && !targetElement.matches("#btn")) {
    sidebar.classList.remove("open");
    menuBtnChange(); // calling the function (optional)
  }
});





// Work-experience container

// Your existing JavaScript code


const serviceItems = document.querySelector(".service-items");
const popup = document.querySelector(".popup-box")
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

serviceItems.addEventListener("click",function(event){
  if(event.target.tagName.toLowerCase() == "button"){
     const item =event.target.parentElement;
     const h3 = item.querySelector("h3").innerHTML;
     const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
     popup.querySelector("h3").innerHTML = h3;
     popup.querySelector(".popup-body").innerHTML = readMoreCont;
     popupBox();
  }

})

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
   if(event.target == popup){
      popupBox();
   }
})

function popupBox(){
  popup.classList.toggle("open");
}





// education toggle view
// function toggleView() {
//   const viewMoreDiv = document.querySelector('.bachelors-view-more');
//   if (viewMoreDiv.style.display === 'none') {
//     viewMoreDiv.style.display = 'block';
//   } else {
//     viewMoreDiv.style.display = 'none';
//   }
// }



// <!-- Your HTML code goes here -->
function toggleView() {  
  const viewMoreDiv = document.querySelector('.bachelors-view-more');
  const chevronDownBtn = document.querySelector('.bachelors-button.down');
  const chevronUpBtn = document.querySelector('.bachelors-button.up');

  if (viewMoreDiv.style.display === 'none') {
    viewMoreDiv.style.display = 'block';
    chevronDownBtn.style.display = 'none';
    chevronUpBtn.style.display = 'inline-block';
  } else {
    viewMoreDiv.style.display = 'none';
    chevronDownBtn.style.display = 'inline-block';
    chevronUpBtn.style.display = 'none';
  }
}

// Add click event listener to both .bachelors-view-less div and .bachelors-button.down button
// const viewLessDiv = document.querySelector('#bachelors');
const bachelorsViewLessDiv = document.querySelector('.bachelors-view-less');
const chevronDownBtn = document.querySelector('.bachelors-button.down');

bachelorsViewLessDiv.addEventListener('click', toggleView);
// viewLessDiv.addEventListener('click', toggleView);
chevronDownBtn.addEventListener('click', toggleView);



// For intermediate 
function toggleView_inter() {
  const viewLessDiv = document.querySelector('.intermediate-view-less');
  const viewMoreDiv_inter = document.querySelector('.intermediate-view-more');
  const chevronDownBtn_inter = document.querySelector('.intermediate-button.down');
  const chevronUpBtn_inter = document.querySelector('.intermediate-button.up');

  if (viewMoreDiv_inter.style.display === 'none') {
    viewMoreDiv_inter.style.display = 'block';
    chevronDownBtn_inter.style.display = 'none';
    chevronUpBtn_inter.style.display = 'inline-block';
  } else {
    viewMoreDiv_inter.style.display = 'none';
    chevronDownBtn_inter.style.display = 'inline-block';
    chevronUpBtn_inter.style.display = 'none';
  }
}

// Add click event listener to the .intermediate-view-less div
const intermediateViewLessDiv = document.querySelector('.intermediate-view-less');
const chevronDownBtn_inter = document.querySelector('.intermediate-button.down');

intermediateViewLessDiv.addEventListener('click', toggleView_inter);
chevronDownBtn_inter.addEventListener('click', toggleView_inter);


// For School 
function toggleView_school() {
  const viewLessDiv = document.querySelector('.school-view-less');
  const viewMoreDiv_school = document.querySelector('.school-view-more');
  const chevronDownBtn_school = document.querySelector('.school-button.down');
  const chevronUpBtn_school = document.querySelector('.school-button.up');

  if (viewMoreDiv_school.style.display === 'none') {
    viewMoreDiv_school.style.display = 'block';
    chevronDownBtn_school.style.display = 'none';
    chevronUpBtn_school.style.display = 'inline-block';
  } else {
    viewMoreDiv_school.style.display = 'none';
    chevronDownBtn_school.style.display = 'inline-block';
    chevronUpBtn_school.style.display = 'none';
  }
}

// Add click event listener to the .school-view-less div
const schoolViewLessDiv = document.querySelector('.school-view-less');
const chevronDownBtn_school = document.querySelector('.school-button.down');

schoolViewLessDiv.addEventListener('click', toggleView_school);
chevronDownBtn_school.addEventListener('click', toggleView_school);





// #######################################################
// VinodYedla loading animation

// Function to add the typing text animation for "VinodYedla" and hide the main content
function showTypingAnimation() {
  const loadingAnimation = document.createElement("div");
  loadingAnimation.className = "vy-typing-animation";
  document.body.appendChild(loadingAnimation);

  let text = "VinodYedla";
  let index = 0;
  const typingSpeed = 80; // Speed in milliseconds between each character typing

  function type() {
    loadingAnimation.innerText = text.slice(0, index);
    index++;
    if (index <= text.length) {
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(() => {
        loadingAnimation.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(loadingAnimation);
          document.querySelector("main").classList.remove("hidden-main");
        }, 500); // Remove the animation after 1 second (1000 milliseconds) fade-out duration
      }, 100); // Keep the animation visible for 2 seconds (2000 milliseconds)
    }
  }

  type();
}

// Call the function when the page is fully loaded
window.addEventListener("load", showTypingAnimation);


  // Call the function when the page is fully loaded
  // window.addEventListener("load", showTypingAnimation);

// #######################################################
// VinodYedla loading animation ENDS here






//Menu bar items highlight when Navigation to each section 

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in-section");
  const navLinks = document.querySelectorAll(".nav-list li a");

  function highlightNavLink() {
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 2) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
        });
        navLinks[index].classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", highlightNavLink);
});


// #################################

// #################################



// ABout section animation when scroll
// document.addEventListener("DOMContentLoaded", function() {
//   const aboutSection = document.getElementById("about");

//   window.addEventListener("scroll", function() {
//     const sectionTop = aboutSection.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;

//     if (sectionTop < windowHeight) {
//       aboutSection.classList.add("animate");
//     }
//   });
// });
// Education section animation when scroll
// document.addEventListener("DOMContentLoaded", function() {
//   const aboutSection = document.getElementById("education");

//   window.addEventListener("scroll", function() {
//     const sectionTop = aboutSection.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;

//     if (sectionTop < windowHeight) {
//       aboutSection.classList.add("animate");
//     }
//   });
// });

// animation for all sections in a single function
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".fade-in-section");

  const handleScroll = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight) {
        section.classList.add("animate");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
});


