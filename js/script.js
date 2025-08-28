$(window).on("load", function() {
    "use strict";

    function showPopup() {
      $(".popup-overlay").fadeIn();
  }

  $(".popup-option").on("click", function() {
      $(".popup-overlay").fadeOut();
  });

  setTimeout(showPopup, 500); // Delay to show popup after 500ms

    $(".preloader").fadeOut();

// POPUP ON PAGE LOAD


    // RESPONSIVE MOBILE MENU 

    $(".menu-btn").on("click", function() {
      $(".responsive-mobile-menu").toggleClass("show");
      return false;
    });

    $("html").on("click", function() {
      $(".responsive-mobile-menu").removeClass("show");
    });
    $(".menu-btn, .responsive-mobile-menu").on("click", function(e) {
      e.stopPropagation();
    })

    // CONTACT FORM VALIDATION  

    if($('#contact-form').length){
      $('#submit').click(function(){
        
              var o = new Object();
              var form = '#contact-form';
        
              var name = $('#contact-form .name').val();
              var email = $('#contact-form .email').val();
              // var phone = $('#contact-form .phone').val();
        
        if(name == '' || email == '')
        {
          $('#contact-form .response').html('<div class="failed">Please fill the required fields.</div>');
          return false;
        }
              
        $.ajax({
            url:"sendemail.php",
            method:"POST",
            data: $(form).serialize(),
            beforeSend:function(){
                $('#contact-form .response').html('<div class="text-info"><img src="images/preloader.gif"> Loading...</div>');
            },
            success:function(data){
                $('form').trigger("reset");
                $('#contact-form .response').fadeIn().html(data);
                setTimeout(function(){
                    $('#contact-form .response').fadeOut("slow");
                }, 5000);
            },
            error:function(){
                $('#contact-form .response').fadeIn().html(data);
            }
        });
    });
    }

});
const languageContent = {
  en: {
      welcome: "Welcome!",
      description: "Please choose an option to continue:",
      button1: "Croatian",
      button2: "English",
      services: "Our Services",
      contactUs: "Contact Us",
      sendMessage: "Send Message",
      
      creativeSolutions: "Websites",
      newAge: "New Age",
      professionalWebsites: "New Age is a company that transforms outdated design into a new era of design and quality",
      viewMore: "View More",
      
      ourServices: "Our Services",
      weDoEverything: "We do everything",
      mightInterestYou: "You might be interested in what we can offer. More services can be found below. We do everything at a high level.",
      view: "view",
      
      socialMedia: "Website",
      websiteDevelopment: "Web Shop",
      ecommerceDevelopment: "Social Media",
      seo: "SEO",
      
      portfolio: "Portfolio",
      bestWorks: "Our best works",
      seeOurPortfolio: "We always strive to implement our creative ideas at the highest level. You can see that by looking at our portfolio.",
      allWorks: "All our works",
      
      aboutUs: "A few words about us",
      whyChooseUs: "Why choose us",
      popularInCroatia: "We have many projects for our clients that have become popular in Europe.",
      
      modernTechnologies: "Modern Technologies",
      digitalExperience: "Vast digital experience",
      modernSolutions: "We enable modern solutions with appropriate solutions for your brand.",
      yearsOfExperience: "Our company has been developing digital products for 3 years. We have received a lot of praise for our work.",
      
      address: "Address:",
      contactUsHeader: "Contact Us",
      availableWhen: "When we are available:",
      sendInquiry: "Send Inquiry",
      tellUsAboutProject: "We always strive to implement our creative ideas at the highest level. Tell us something about your project, and we will make it successful.",
      
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      
      footerCopyright: "Copyright © 2024 NewAge.",
      footerAvailable: "When we are available:",
      footerAddress: "Address:",
      footerContact: "Contact us:",
      
      satisfiedClients: "Satisfied Clients",
      yearsOfExperienceCount: "Years of Experience",
      agencyMembers: "Agency Members",
      completedProjects: "Completed Projects",

      projects: "Projects",
      backToHome: "Back to Home",
      completedProjects: "Completed Projects",
      mightInterestYou: "You might be interested in what we can offer. We do everything at a high level.",
      all: "All",
      websites: "Websites",
      ecommerce: "E-commerce"
  },
  hr: {
      welcome: "Dobrodošli!",
      description: "Odaberite opciju za nastavak:",
      button1: "Hrvatski",
      button2: "Engleski",
      services: "Naše Usluge",
      contactUs: "Kontaktirajte Nas",
      sendMessage: "Pošalji poruku",
      
      creativeSolutions: "Web stranice",
      newAge: "New Age",
      professionalWebsites: "New age je firma koja zastarjeli dizajn pretvara u novu eru dizajn i kvalitete",
      viewMore: "Pogledaj više",
      
      ourServices: "naše usluge",
      weDoEverything: "Pogledajte što nudimo",
      mightInterestYou: "Sve što radimo, radimo samo na visokoj razini",
      view: "pogledaj.",
      
      socialMedia: "Web stranice",
      websiteDevelopment: "Web shop",
      ecommerceDevelopment: "Socijalne mreže",
      
      portfolio: "Portfolio",
      bestWorks: "Naši najbolji radovi",
      seeOurPortfolio: "Svoje kreativne ideje uvijek nastojimo implementirati na najvišoj razini. U to se možete uvjeriti ako pogledate naš portfelj.",
      allWorks: "Svi naši radovi",
      
      aboutUs: "par riječi o nama",
      whyChooseUs: "Zašto izabrati nas",
      popularInCroatia: "Imamo klijente širom cijele europe i mnogi od njih cijene naš trud i rad. Dobili so puno pohvala za naš rad",
      
      modernTechnologies: "Moderne Tehnologije",
      digitalExperience: "Digitalna iskustva ",
      modernSolutions: "Moderna rješenja za vaš brand u bilo kojem smislu",
      yearsOfExperience: "Naša tvrtka već 3 godine razvija digitalne proizvode.",
      
      address: "Adresa:",
      contactUsHeader: "Javite nam se",
      availableWhen: "Kada smo dostupni:",
      sendInquiry: "Pošaljite upit",
      tellUsAboutProject: "Svoje kreativne ideje uvijek nastojimo implementirati na najvišoj razini. Recite nam nešto o svom projektu i mi ćemo ga učiniti uspješnim.",
      
      namePlaceholder: "Ime",
      emailPlaceholder: "Email",
      messagePlaceholder: "Poruka",
      
      footerCopyright: "Copyright © 2025 NewAge.",
      footerAvailable: "Kada smo dostupni:",
      footerAddress: "Adresa:",
      footerContact: "Javite nam se:",
      
      satisfiedClients: "Zadovoljni klijenti",
      yearsOfExperienceCount: "Godine iskustva",
      agencyMembers: "Članovi agencije",
      completedProjects: "Završenih projekata",

      projects: "Projekti",
      backToHome: "Natrag na početnu",
      completedProjects: "Završeni projekti",
      mightInterestYou: "Možda će vas zanimati što vam možemo ponuditi. Sve radimo na visokoj razini.",
      all: "Sve",
      websites: "Web stranice",
      ecommerce: "Web shop"
  }
};

function updateLanguage(lang) {
  Object.keys(languageContent[lang]).forEach(key => {
      const elements = document.querySelectorAll(`[data-i18n="${key}"]`);
      console.log(`Found ${elements.length} elements for key "${key}" in language ${lang}`);
      elements.forEach(el => {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
              el.placeholder = languageContent[lang][key];
          } else {
              el.innerHTML = languageContent[lang][key]; // Changed to innerHTML
          }
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Attach event listeners to language selection buttons
  document.querySelectorAll(".popup-option").forEach(button => {
      button.addEventListener("click", function () {
          const selectedLanguage = this.textContent.trim().toLowerCase() === 'english' ? 'en' : 'hr';
          console.log('Selected language:', selectedLanguage);
          
          updateLanguage(selectedLanguage);
          localStorage.setItem("selectedLanguage", selectedLanguage);
          
          // Use vanilla JS to hide popup
          document.querySelector('.popup-overlay').style.display = 'none';
      });
  });

  // Check localStorage on page load
  const savedLanguage = localStorage.getItem("selectedLanguage") || 'hr';
  updateLanguage(savedLanguage);
  if (savedLanguage) {
      // Hide the language selection popup if a language is saved
      document.querySelector('.popup-overlay').style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const responseMessage = document.querySelector('#contact-form .response');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading message
        responseMessage.innerHTML = '<p class="loading">Sending message...</p>';

        // Fetch API to submit form
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showSuccessNotification();
                responseMessage.innerHTML = ''; // Clear the loading message
                form.reset(); // Reset the form after successful submission
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        responseMessage.innerHTML = '<p class="error">Oops! There was a problem submitting your form</p>';
                    } else {
                        throw new Error('Form submission failed');
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            responseMessage.innerHTML = '<p class="error">An error occurred while submitting the form</p>';
        });

        // Prevent the default form submission behavior
        return false;
    });

    function showSuccessNotification() {
        const notification = document.createElement('div');
        notification.textContent = 'Successfully sent';
        notification.className = 'popup-notification';
        document.body.appendChild(notification);

        // Show for 3 seconds then hide
        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500); // wait for the fade out to complete
        }, 3000);
    }
});