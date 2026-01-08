// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});

// navbar affix on scroll
$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    $(".custom-navbar").addClass("affix");
  } else {
    $(".custom-navbar").removeClass("affix");
  }
});

// Language translations
const translations = {
  hu: {
    nav_home: "Home",
    nav_about: "Rólam",
    nav_portfolio: "Portfolio",
    nav_contact: "Kapcsolat",
    header_greeting: "Hello!",
    header_name: "A nevem <br> Szücs Gergely",
    header_role: "FRONTEND Fejlesztő",
    about_subtitle: "Ki vagyok én?",
    about_title: "Rólam",
    about_description:
      "Több területen szereztem gyakorlati tapasztalatot (adminisztráció, gyártáselőkészítés, ügyfélszolgálat), és jelenleg a frontend/IT területen bővítem a tudásomat.<br>Gyakorlatias, precíz és rendszerszemléletű vagyok; szeretek működő, egyszerű megoldásokat létrehozni és gyorsan alkalmazkodom új feladatokhoz. Technikai ismereteim közé tartozik a HTML, CSS, JavaScript, TypeScript és Angular.",
    about_cv_button: "Önéletrajz megtekintése",
    service_subtitle: "Mit csinálok?",
    service_title: "Szolgáltatások",
    service_1_title: "Frontend Fejlesztés",
    service_1_desc:
      "Modern webalkalmazások HTML5, CSS3, JavaScript és TypeScript használatával, reszponzív design és legjobb gyakorlatok alkalmazásával.",
    service_2_title: "Angular Alkalmazások",
    service_2_desc:
      "Single Page alkalmazások Angular 17+ technológiával, signals használatával, standalone komponensekkel és modern reaktív mintákkal.",
    service_3_title: "UI/UX Implementáció",
    service_3_desc:
      "Professzionális felhasználói felületek Bootstrap, SCSS, CSS animációk és mobile-first reszponzív design használatával.",
    service_4_title: "Teljesítmény & Optimalizálás",
    service_4_desc:
      "Kód optimalizálás, build folyamatok, deployment stratégiák és teljesítmény monitorozás gyors, skálázható webalkalmazásokhoz.",
    portfolio_title: "Mini projektek",
    portfolio_1_title: "Időjárás Alkalmazás",
    portfolio_1_cat: "Kategória: TypeScript Web App",
    portfolio_2_title: "TODO Alkalmazás",
    portfolio_2_cat: "Kategória: Angular App",
    cta_title: "Van egy projekt ötleted?",
    cta_desc:
      "Szívesen meghallgatom az elképzeléseidet és segítek megvalósítani azokat!",
    cta_button: "Beszélgessünk róla!",
    learning_subtitle: "Hogyan jutottam el idáig?",
    learning_title: "Tanulási utam",
    learning_1_desc:
      "Az adminisztrációs tapasztalataim során rájöttem, hogy szeretek rendszerezett, logikus feladatokkal foglalkozni. Ez vezettet el a programozás világába.",
    learning_1_title: "Karrier váltás",
    learning_2_desc:
      "HTML és CSS alapjaitól indulva, fokozatosan ismerkedtem meg a JavaScript-tel, majd az Angular keretrendszerrel. Minden új technológia új lehetőségeket nyitott meg.",
    learning_2_title: "Technológiai fejlődés",
    goals_subtitle: "Merre tovább?",
    goals_title: "Következő célok",
    goals_1_title: "UI/UX Design",
    goals_1_tag: "📅 Rövidtávú cél",
    goals_1_desc1:
      "A felhasználói felületek tervezése legalább annyira fontos, mint a megvalósítás. Szeretném mélyebben megismerni a UX/UI design elveket és eszközeit.",
    goals_1_desc2:
      "Figma, Adobe XD, felhasználói élmény tervezés és dizájn rendszerek.",
    goals_1_desc3:
      "A cél, hogy ne csak megvalósítani tudjam a terveket, hanem magam is képes legyek professzionális, felhasználóbarát interfészeket tervezni.",
    goals_2_title: "Backend fejlesztés",
    goals_2_tag: "📅 Hosszútávú cél",
    goals_2_desc1:
      "A teljes stack fejlesztő szeretnék lenni. A frontend tudás mellett szükséges a backend oldal megértése is a komplett webalkalmazások készítéséhez.",
    goals_2_desc2:
      "Node.js, Express, adatbázisok (MongoDB/PostgreSQL), API fejlesztés.",
    goals_2_desc3:
      "Célom, hogy saját fullstack projekteket tudjak készíteni, ahol az adatok kezelésétől a felhasználói felületig minden az én kezem munkája.",
    contact_subtitle: "Van kérdésed vagy projekt ötleted?",
    contact_title: "Kapcsolat",
    contact_name: "Neved",
    contact_email: "Email címed",
    contact_message:
      "Írj néhány sort a projekt ötletedről vagy tedd fel a kérdéseidet...",
    contact_submit: "Üzenet küldése",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    header_greeting: "Hello!",
    header_name: "My name is <br> Szücs Gergely",
    header_role: "FRONTEND Developer",
    about_subtitle: "Who am I?",
    about_title: "About Me",
    about_description:
      "I have gained practical experience in multiple fields (administration, production planning, customer service) and I am currently expanding my knowledge in the frontend/IT field.<br>I am practical, precise and system-oriented; I like to create working, simple solutions and adapt quickly to new tasks. My technical skills include HTML, CSS, JavaScript, TypeScript and Angular.",
    about_cv_button: "View Resume",
    service_subtitle: "What do I do?",
    service_title: "Services",
    service_1_title: "Frontend Development",
    service_1_desc:
      "Modern web applications using HTML5, CSS3, JavaScript and TypeScript, with responsive design and best practices implementation.",
    service_2_title: "Angular Applications",
    service_2_desc:
      "Single Page Applications with Angular 17+ technology, using signals, standalone components and modern reactive patterns.",
    service_3_title: "UI/UX Implementation",
    service_3_desc:
      "Professional user interfaces using Bootstrap, SCSS, CSS animations and mobile-first responsive design.",
    service_4_title: "Performance & Optimization",
    service_4_desc:
      "Code optimization, build processes, deployment strategies and performance monitoring for fast, scalable web applications.",
    portfolio_title: "Mini Projects",
    portfolio_1_title: "Weather Application",
    portfolio_1_cat: "Category: TypeScript Web App",
    portfolio_2_title: "TODO Application",
    portfolio_2_cat: "Category: Angular App",
    cta_title: "Have a project idea?",
    cta_desc: "I'd love to hear your ideas and help bring them to life!",
    cta_button: "Let's talk about it!",
    learning_subtitle: "How did I get here?",
    learning_title: "My Learning Journey",
    learning_1_desc:
      "During my administrative experience, I realized that I love working with organized, logical tasks. This led me to the world of programming.",
    learning_1_title: "Career Change",
    learning_2_desc:
      "Starting from the basics of HTML and CSS, I gradually got to know JavaScript and then the Angular framework. Every new technology opened up new possibilities.",
    learning_2_title: "Technology Growth",
    goals_subtitle: "Where to next?",
    goals_title: "Future Goals",
    goals_1_title: "UI/UX Design",
    goals_1_tag: "📅 Short-term goal",
    goals_1_desc1:
      "Designing user interfaces is at least as important as implementation. I want to deepen my understanding of UX/UI design principles and tools.",
    goals_1_desc2:
      "Figma, Adobe XD, user experience design and design systems.",
    goals_1_desc3:
      "The goal is not only to be able to implement designs, but also to be able to design professional, user-friendly interfaces myself.",
    goals_2_title: "Backend Development",
    goals_2_tag: "📅 Long-term goal",
    goals_2_desc1:
      "I want to be a full stack developer. In addition to frontend knowledge, understanding the backend side is also necessary for creating complete web applications.",
    goals_2_desc2:
      "Node.js, Express, databases (MongoDB/PostgreSQL), API development.",
    goals_2_desc3:
      "My goal is to be able to create my own fullstack projects, where everything from data management to the user interface is my own work.",
    contact_subtitle: "Have a question or project idea?",
    contact_title: "Contact",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_message:
      "Write a few lines about your project idea or ask your questions...",
    contact_submit: "Send Message",
  },
};

// Current language state
let currentLang = localStorage.getItem("language") || "en";

// Function to change language
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);

  // Update all elements with data-translate attribute
  $("[data-translate]").each(function () {
    const key = $(this).attr("data-translate");
    if (translations[lang] && translations[lang][key]) {
      $(this).html(translations[lang][key]);
    }
  });

  // Update placeholders
  $("[data-translate-placeholder]").each(function () {
    const key = $(this).attr("data-translate-placeholder");
    if (translations[lang] && translations[lang][key]) {
      $(this).attr("placeholder", translations[lang][key]);
    }
  });

  // Update input values (for submit buttons)
  $("[data-translate-value]").each(function () {
    const key = $(this).attr("data-translate-value");
    if (translations[lang] && translations[lang][key]) {
      $(this).val(translations[lang][key]);
    }
  });

  // Update CV link based on language
  if (lang === "hu") {
    $("#cvLink").attr("href", "assets/CV/Szucs_Gergely_cv_hu.pdf");
  } else {
    $("#cvLink").attr("href", "assets/CV/Gergely_Szucs_cv_en.pdf");
  }

  // Update language toggle button
  if (lang === "hu") {
    $("#langIcon").html("🇬🇧 EN");
  } else {
    $("#langIcon").html("🇭🇺 HU");
  }
}

// Initialize language on page load
$(document).ready(function () {
  changeLanguage(currentLang);

  // Language toggle button click handler
  $("#langToggle").click(function () {
    const newLang = currentLang === "hu" ? "en" : "hu";
    changeLanguage(newLang);
  });
});

// Dark Mode Toggle

let darkMode = localStorage.getItem("darkMode") || "light";

function toggleDarkMode() {
  if (darkMode === "light") {
    darkMode = "dark";
    $("body").addClass("dark-mode");
    $("#darkModeIcon").html("☀️");
  } else {
    darkMode = "light";
    $("body").removeClass("dark-mode");
    $("#darkModeIcon").html("🌙");
  }
  localStorage.setItem("darkMode", darkMode);
}

// Initialize dark mode on page load
$(document).ready(function () {
  if (darkMode === "dark") {
    $("body").addClass("dark-mode");
    $("#darkModeIcon").html("☀️");
  }

  // Dark mode toggle button click handler
  $("#darkModeToggle").click(function () {
    toggleDarkMode();
  });
});
