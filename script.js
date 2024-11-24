"use strict";

// elements
const reviews = document.querySelectorAll(".review-wrapper");

// cards review
let currentReview = [0, 2];


// function to add active class initally
let updateReviewSlider = (cards) => {
  cards.forEach((card) => {
    reviews[card].classList.add("active");
  });
};


// setInterval function
setInterval(() => {
  // remove active class
  currentReview.forEach((card, i) => {
    reviews[card].classList.remove("active");

    // updating the currentReview values by 1 based on reviews array length;
    currentReview[i] = card >= reviews.length - 1 ? 0 : card + 1;
    console.log(currentReview[i]);
  });


  // setTimeout function
  setTimeout(() => {
    updateReviewSlider(currentReview);
  }, 1250);
}, 8000);

updateReviewSlider(currentReview);



// toggle FAQ sections
const faqs = [...document.querySelectorAll(".faq")];

faqs.map((faq) => {
  let question = faq.querySelector(".question-box");
  console.log(question);

  question.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});


// function for dish slider
let dishSlider = document.querySelector(".dish-slide");

let rotationValue = 0;

setInterval(() => {
  rotationValue += 120;

  dishSlider.style.transform = `translateY(-50%) rotate(${rotationValue}deg)`
}, 7000)