var questions = {
  "Question One": {
    open: false,
    title: "What is Frontend Mentor, and how will it help me?",
    replay:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  "Question Two": {
    open: false,
    title: "Is Frontend Mentor free?",
    replay:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  "Question Three": {
    open: false,
    title: "Can I use Frontend Mentor projects in my portfolio?",
    replay:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  "Question Four": {
    open: false,
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    replay:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
};

const { createApp } = Vue;
createApp({
  data() {
    return {
      questions: questions,
      iconPlus: "./images/icon-plus.svg",
      iconPlusCaption: "icon plus",
      iconMinus: "./images/icon-minus.svg",
      iconMinusCaption: "icon minus",
    //   isActive: false,
    };
  },
  //   methods: {
  //     toggleActive() {
  //         this.isActive = !this.isActive;
  //     }
  //   }
  methods: {
    toggleQuestion(key) {
      this.questions[key].open = !this.questions[key].open;
    },
  },
}).mount("#app");

/**
 * const accordionHeader = [...document.querySelectorAll('.card__accordion-header')];


accordionHeader.forEach((accordion) => {

    const icon = accordion.firstElementChild;

    accordion.addEventListener('click', collapseAccordions);

    function collapseAccordions() {
        const openAccordion = document.querySelector('.open');
        if (openAccordion && openAccordion !== accordion) {
            openAccordion.classList.toggle('open');
            openAccordion.nextElementSibling.style.maxHeight = 0;

        }

        accordion.classList.toggle('open');
        const accordionBody = accordion.nextElementSibling;

        if (accordion.classList.contains('open')) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
            icon.classList.add('active');
        } else {
            accordionBody.style.maxHeight = 0;
            icon.classList.remove('active')
        }
    }
})
 */
