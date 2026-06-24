const roles = [
  "QA Automation Engineer",
  "Playwright Expert",
  "Selenium Automation Engineer",
];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

// Mobile Menu

const menuBtn = document.getElementById("menu-btn");

const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  document.querySelectorAll("#menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
}

// Typing Effect

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typing.textContent += roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (typing.textContent.length > 0) {
    typing.textContent = typing.textContent.slice(0, -1);

    setTimeout(eraseEffect, 50);
  } else {
    roleIndex++;

    if (roleIndex >= roles.length) {
      roleIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeEffect, 500);
  }
}

typeEffect();



(function(){

    emailjs.init("bZAMkwA_TBogLxZB5");

})();


document.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();


    emailjs.sendForm(
        "service_epl8pd6",
        "template_x9dbmdt",
        this
    )
    .then(function(response){

        showPopup();

        setTimeout(()=>{
            closePopup();
        },3000);


        document.getElementById("contact-form").reset();

    })
    .catch(function(error){

        alert("Failed to send message");

        console.log(error);

    });

});


// Success Popup Functions

function showPopup(){

    document.getElementById("successPopup").style.display="flex";

}


function closePopup(){

    document.getElementById("successPopup").style.display="none";

}
