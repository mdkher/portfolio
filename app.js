var aboutMe = new IntersectionObserver(
  function (entries) {
    let slideClass = document.querySelector("#about-me");
    // console.log(entries);
    if (entries[0].isIntersecting === true) {
      slideClass.classList.add("in-view");
      slideClass.classList.add("gradient-animation");
      setTimeout(function () {
        document.querySelector("#about-me h1").classList.add("in-view-05");
      }, 500);
    } else {
      slideClass.classList.remove("in-view");
    //   slideClass.classList.remove("gradient-animation");
      document.querySelector("#about-me h1").classList.remove("in-view-05");
    }
  },
  { threshold: [0] }
);
var qualifications = new IntersectionObserver(
  function (entries) {
    let slideClass = document.querySelector("#qualifications");
    // console.log(entries);
    if (entries[0].isIntersecting === true) {
      slideClass.classList.add("in-view");
      slideClass.classList.add("gradient-animation");
      setTimeout(function () {
        document
          .querySelector("#qualifications h1")
          .classList.add("in-view-05");
      }, 500);
    } else {
      slideClass.classList.remove("in-view");
    //   slideClass.classList.remove("gradient-animation");
      document
        .querySelector("#qualifications h1")
        .classList.remove("in-view-05");
    }
  },
  { threshold: [0] }
);
var projects = new IntersectionObserver(
  function (entries) {
    let slideClass = document.querySelector("#projects");
    // console.log(entries);
    if (entries[0].isIntersecting === true) {
      slideClass.classList.add("in-view");
      slideClass.classList.add("gradient-animation");
      setTimeout(function () {
        document.querySelector("#projects h1").classList.add("in-view-05");
      }, 500);
    } else {
      slideClass.classList.remove("in-view");
    //   slideClass.classList.remove("gradient-animation");
      document.querySelector("#projects h1").classList.remove("in-view-05");
    }
  },
  { threshold: [0] }
);
var contactMe = new IntersectionObserver(
  function (entries) {
    let slideClass = document.querySelector("#contact-me");
    // console.log(entries);
    if (entries[0].isIntersecting === true) {
      slideClass.classList.add("in-view");
      slideClass.classList.add("gradient-animation");
      setTimeout(function () {
        document.querySelector("#contact-me h1").classList.add("in-view-05");
      }, 500);
    } else {
      slideClass.classList.remove("in-view");
    //   slideClass.classList.remove("gradient-animation");
      document.querySelector("#contact-me h1").classList.remove("in-view-05");
    }
  },
  { threshold: [0] }
);

aboutMe.observe(document.querySelector("#about-me"));
qualifications.observe(document.querySelector("#qualifications"));
projects.observe(document.querySelector("#projects"));
contactMe.observe(document.querySelector("#contact-me"));
