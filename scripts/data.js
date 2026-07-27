/**
 * List of portfolio projects displayed on the site.
 * @type {Array<{
 *   img_src: string,
 *   alt_text_english: string,
 *   alt_text_german: string,
 *   title: string,
 *   skills: string,
 *   description_english: string,
 *   description_german: string,
 *   live_test_url: string,
 *   github_url: string
 * }>}
 */
const PROJECTS = [
  {
    img_src: "./assets/img/join-preview.png",
    alt_text_english: "Preview image of the project 'Join'",
    alt_text_german: "Vorschaubild des Projekts 'Join'",
    title: "Join",
    skills: "JavaScript | HTML | CSS | Firebase",
    description_english:
      "Task manager inspired by the Kanban System. Create and organize tasks using drag-and-drop functions, assign users and categories.",
    description_german:
      "Ein Task-Manager, inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag-and-Drop und weise Nutzer sowie Kategorien zu.",
    live_test_url: "https://join.annika-egger.de",
    github_url: "https://github.com/AnnikaEgger/join",
  },
  {
    img_src: "./assets/img/pollo-loco-preview.png",
    alt_text_english: "Preview image of the game 'El Pollo Loco'",
    alt_text_german: "Vorschaubild des Spiels 'El Pollo Loco'",
    title: "El Pollo Loco",
    skills: "JavaScript | HTML | CSS",
    description_english:
      "A simple Jump-and-Run game based on an object-oriented approach. Help &quot;Pepe Peligroso&quot; collect coins and salsa bottles to fight the boss chicken.",
    description_german:
      "Ein einfaches Jump-and-Run-Spiel, entwickelt mit einem objektorientierten Ansatz. Hilf &quot;Pepe Peligroso&quot;, Münzen und Salsa-Flaschen zu sammeln und das Boss-Huhn zu besiegen.",
    live_test_url: "https://el-pollo-loco.annika-egger.de",
    github_url: "https://github.com/AnnikaEgger/el-pollo-loco",
  },
  {
    img_src: "./assets/img/pokedex-preview.png",
    alt_text_english: "Preview image of the project 'Pokédex'",
    alt_text_german: "Vorschaubild des Projekts 'Pokédex'",
    title: "Pokédex",
    skills: "JavaScript | HTML | CSS | API",
    description_english:
      "Based on the PokéAPI. A simple library that provides and catalogues Pokémon information.",
    description_german:
      "Basierend auf der PokéAPI. Eine einfache Bibliothek, die Informationen zu Pokémon bereitstellt und katalogisiert.",
    live_test_url: "https://pokedex.annika-egger.de",
    github_url: "https://github.com/AnnikaEgger/pokedex",
  },
];

/**
 * Template object for a single project entry.
 * @type {{img_src:string,alt_text:string,title:string,skills:string,description:string,live_test_url:string,github_url:string}}
 */
const projectJson = {
  img_src: "",
  alt_text: "",
  title: "",
  skills: "",
  description: "",
  live_test_url: "",
  github_url: "",
};

/**
 * Collector of user feedback entries used in the feedback carousel.
 * @type {Array<{
 *   text_german: string,
 *   text_english: string,
 *   author_english: string,
 *   author_german: string,
 *   img_src: string
 * }>}
 */
const FEEDBACKS = [
  {
    text_german:
      "Annika bewies sich als kompetente Problemlöserin. Sie arbeitete sich intensiv in technische Herausforderungen ein, entwickelte effektive Lösungen und testete das Projekt gründlich, um Fehler frühzeitig zu erkennen und eigenständig zu beheben.",
    text_english:
      "Annika proved to be a skilled problem solver. She deeply engaged with technical challenges, developed effective solutions, and tested the project carefully to identify and resolve issues early on.",
    author_english: "C. Nguyen-Wellmann - Team Partner",
    author_german: "C. Nguyen-Wellmann - Teamkollege",
    img_src: "./assets/img/curtis.png",
  },
  {
    text_german:
      "Annika überzeugte durch ihre zielstrebige, strukturierte Arbeitsweise, ihr Organisationstalent und ihre Initiative. Durch ihre eigenständige Koordination und Problemlösungskompetenz war sie eine wichtige Stütze des Projekts.",
    text_english:
      "Annika impressed us with her goal-oriented, structured way of working, strong organizational skills, and initiative. Through her coordination and problem-solving abilities, she was a valuable support throughout the project.",
    author_english: "K. Mathea - Team Partner",
    author_german: "K. Mathea - Teamkollege",
    img_src: "./assets/img/avatar.svg",
  },
  {
    text_german:
      "Annika hat fantastische Arbeit geleistet und war für unser Team eine enorme Bereicherung. Besonders im Firebase-Backend hat sie einen extrem wichtigen Teil übernommen und sehr strukturierten Code geliefert. ",
    text_english:
      "Annika did a fantastic job and was a great asset to our team. She took on a crucial role in the Firebase backend and consistently delivered clean, well-structured code.",
    author_english: "L. Weigang - Team Partner",
    author_german: "L. Weigang - Teamkollege",
    img_src: "./assets/img/avatar.svg",
  },
];

/**
 * Template object for a feedback entry.
 * @type {{text_german:string,text_english:string,author_english:string,author_german:string,img_src:string}}
 */
const feedbackJson = {
  text_german: "",
  text_english: "",
  author_english: "",
  author_german: "",
  img_src: "",
};

/**
 * Localized UI text for English and German.
 * Structure: { english: {...}, german: {...} }
 * @type {{english:Object,german:Object}}
 */
const textJson = {
  english: {
    header: {
      about: "About me",
      skills: "Skills",
      portfolio: "Portfolio",
    },
    burger_menu: {
      about: "About me",
      skills: "My skills",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      greeting_1: "I",
      greeting_2: "am",
      title: "Full-Stack Developer",
      cta: "Let's talk!",
      scroll: "Scroll down",
    },
    about_me: {
      h2: "About me",
      subtext:
        "Software development combines the things I enjoy most: deeply analyzing complex problems, constantly expanding my knowledge, and bringing clarity and structure to complexity.",
      location:
        "I'm based near Augsburg, open to remote work and willing to relocate for the right opportunity.",
      learning:
        "I'm driven by curiosity and a desire to improve. Learning new technologies and expanding my skills is something I genuinely enjoy.",
      problem_solving:
        "I believe good solutions start with a deep understanding of the problem. Through analytical thinking and a structured approach, I break down complex challenges and develop sustainable solutions.",
    },
    skills: {
      h2: "My skills",
      subtext:
        "My full-stack development training has given me hands-on experience with a broad range of technologies.",
      looking_for: "Looking for",
      another_skill: "another skill",
      missing_skills_answer:
        "Always curious and motivated to dive into new technologies and frameworks.",
      cta: "Get in touch",
      special_interest: "I have a special interest in learning",
    },
    portfolio: {
      subtext:
        "Explore a selection of my work here - Interact with projects to see my skills in action.",
    },
    contact: {
      h2: "Contact",
      problem: "Got a problem to solve?",
      role: "I'm looking for a backend or full-stack role with a backend focus. I'd love to hear from you if you're looking for a developer who enjoys solving complex problems and creating sustainable solutions.",
      need: "Need a full-stack developer?",
      cta: "Contact me!",
      submit_form: "Send message",
      form_toast: "Message sent successfully",
      ive_read: "I've read the",
      privacy_policy: "privacy policy",
      agree: "and agree to the processing of my data as outlined.",
      name_input: "Please enter your name.",
      email_input: "Please enter your email.",
      message_input: "Please enter a message.",
      accept_privacy: "Please accept the privacy policy.",
    },
    footer: {
      legal_notice: "Legal notice",
    },
  },
  german: {
    header: {
      about: "Über mich",
      skills: "Skills",
      portfolio: "Portfolio",
    },
    burger_menu: {
      about: "Über mich",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Kontakt",
    },
    hero: {
      greeting_1: "Ich",
      greeting_2: "bin",
      title: "Full-Stack-Entwicklerin",
      cta: "Lass uns sprechen!",
      scroll: "Scrolle nach unten",
    },
    about_me: {
      h2: "Über mich",
      subtext:
        "Softwareentwicklung verbindet die Dinge, die mich am meisten begeistern: komplexe Probleme tiefgehend zu analysieren, mein Wissen stetig zu erweitern und Klarheit sowie Struktur in komplexe Sachverhalte zu bringen.",
      location:
        "Ich wohne in der Nähe von Augsburg, bin offen für Remote-Arbeit und bereit, für die passende Stelle umzuziehen.",
      learning:
        "Neugier und der Wunsch, mich konstant weiterzuentwickeln, treiben mich an. Neue Technologien zu lernen und meine Fähigkeiten zu erweitern, macht mir wirklich Freude.",
      problem_solving:
        "Ich bin davon überzeugt, dass gute Lösungen mit einem tiefgreifenden Verständnis des Problems beginnen. Durch analytisches Denken und eine strukturierte Herangehensweise zerlege ich komplexe Probleme in ihre Einzelteile und entwickle nachhaltige Lösungen.",
    },
    skills: {
      h2: "Meine Skills",
      subtext:
        "Durch meine Ausbildung zur Full-Stack-Entwicklerin habe ich praktische Erfahrungen mit einer Vielzahl von Technologien gesammelt.",
      looking_for: "Auf der Suche nach einem",
      another_skill: "weiteren Skill",
      missing_skills_answer:
        "Stets neugierig und motiviert, mich in neue Technologien und Frameworks einzuarbeiten.",
      cta: "Kontaktiere mich",
      special_interest: "Besonders interessiert mich",
    },
    portfolio: {
      subtext:
        "Hier findest du eine Auswahl meiner Projekte. Schau sie dir gerne an und probiere sie direkt aus.",
    },
    contact: {
      h2: "Kontakt",
      problem: "Du hast ein Problem, das gelöst werden muss?",
      role: "Ich bin auf der Suche nach einer Stelle im Bereich Backend oder Full-Stack mit Backend-Schwerpunkt.  Wenn du einen Entwickler suchst, der Freude daran hat, komplexe Probleme zu lösen und nachhaltige Lösungen zu entwickeln, freue ich mich auf deine Nachricht.",
      need: "Auf der Suche nach einem Full-Stack-Entwickler?",
      cta: "Kontaktiere mich!",
      submit_form: "Nachricht senden",
      form_toast: "Nachricht erfolgreich gesendet",
      ive_read: "Ich habe die",
      privacy_policy: "Datenschutzerklärung",
      agree:
        "gelesen und stimme der darin beschriebenen Verarbeitung meiner Daten zu.",
      name_input: "Bitte gib deinen Namen ein.",
      email_input: "Bitte gib deine E-Mail ein.",
      message_input: "Bitte gib eine Nachricht ein.",
      accept_privacy: "Bitte akzeptiere die Datenschutzerklärung.",
    },
    footer: {
      legal_notice: "Impressum",
    },
  },
};
