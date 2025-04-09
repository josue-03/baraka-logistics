let slider = document.querySelector('.slider');
let scrollAmount = 0;

function slideImages() {
  if (slider) {
    scrollAmount += 400;
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }
}
setInterval(slideImages, 3000);

const langSwitch = document.getElementById('lang-switch');
const texts = {
  fr: {
    accueil: "Accueil",
    apropos: "À propos",
    services: "Services",
    projets: "Projets",
    contact: "Contact",
    heroTitle: "Construisons l'avenir avec intelligence",
    heroText: "Ingénierie moderne en génie civil, électricité, électronique et réseaux.",
    about: "Baraka Technologies and Logistics est une entreprise regroupant des ingénieurs spécialisés dans divers domaines pour construire des routes, maisons et infrastructures modernes.",
    serviceList: [
      "Construction de bâtiments modernes",
      "Installation électrique & réseaux",
      "Domotique et sécurité intelligente",
      "Planification et suivi de projets"
    ],
    contactForm: {
      name: "Votre nom",
      email: "Votre email",
      message: "Votre message",
      send: "Envoyer"
    },
    footer: "Tous droits réservés."
  },
  en: {
    accueil: "Home",
    apropos: "About",
    services: "Services",
    projets: "Projects",
    contact: "Contact",
    heroTitle: "Building the future smartly",
    heroText: "Modern engineering in civil, electrical, electronic and network fields.",
    about: "Baraka Technologies and Logistics brings together engineers from different fields to build roads, houses and modern infrastructure.",
    serviceList: [
      "Modern building construction",
      "Electrical & network installations",
      "Smart home and security systems",
      "Project planning and monitoring"
    ],
    contactForm: {
      name: "Your name",
      email: "Your email",
      message: "Your message",
      send: "Send"
    },
    footer: "All rights reserved."
  }
};

langSwitch.addEventListener('change', () => {
  const lang = langSwitch.value;
  document.querySelectorAll("nav .nav-links li a")[0].textContent = texts[lang].accueil;
  document.querySelectorAll("nav .nav-links li a")[1].textContent = texts[lang].apropos;
  document.querySelectorAll("nav .nav-links li a")[2].textContent = texts[lang].services;
  document.querySelectorAll("nav .nav-links li a")[3].textContent = texts[lang].projets;
  document.querySelectorAll("nav .nav-links li a")[4].textContent = texts[lang].contact;
  document.querySelector('.hero-text h1').textContent = texts[lang].heroTitle;
  document.querySelector('.hero-text p').textContent = texts[lang].heroText;
  document.querySelector('#about p').textContent = texts[lang].about;

  const serviceItems = document.querySelectorAll('#services ul li');
  serviceItems.forEach((li, index) => {
    li.textContent = texts[lang].serviceList[index];
  });

  document.querySelector('form input[name="name"]').placeholder = texts[lang].contactForm.name;
  document.querySelector('form input[name="email"]').placeholder = texts[lang].contactForm.email;
  document.querySelector('form textarea').placeholder = texts[lang].contactForm.message;
  document.querySelector('form button').textContent = texts[lang].contactForm.send;
  document.querySelector('footer p').innerHTML = `&copy; 2025 Baraka Technologies and Logistics. ${texts[lang].footer}`;
});
