import React from "react";
import "./Alumind.css"; // Assume you have a corresponding CSS file for styling
import {
  BackgroundImageSlider,
  alumindImages,
} from "../../BackgroundImageSlider";

function Alumind() {
  return (
    <>
      <div className="alumind-page">
        <header className="alumind-header">
          <h1>Alumind - Our Cherished Alumni</h1>
          <BackgroundImageSlider images={alumindImages} />
          <h2>Discover the legacies and stories of our students.</h2>
        </header>

        <section className="pencil-story-container">
          <h2 className="pencil-story-title">
            A Special Tradition: The Pencil Story
          </h2>
          <p className="pencil-story-introduction">
            Did you know that we give pencils to our graduating batches? Do you
            want to know why? Read this!
          </p>
          <p className="pencil-story-main">
            A Pencil Story!!!! Once upon a time, a boy was watching his
            grandmother write a letter. He asked: "Are you writing a story about
            what we’ve done? Is it a story about me?" His grandmother stopped
            writing her letter and said to her grandson: I am writing about
            you,... actually, but more important than the words is the pencil
            I’m using. I hope you will be like this pencil when you grow up.’
            Intrigued, the boy looked at the pencil. It didn't seem very
            special. ‘But it’s just like any other pencil I’ve ever seen!’ ‘That
            depends on how you look at things. It has five qualities which, if
            you manage to hang on them, will make you a person who is always at
            peace with the world.’
          </p>
          <div className="pencil-qualities-container expectation-container">
            <div className="pencil-quality expectation-item">
              <i className="fa-solid fa-compass icon"></i>
              <h3>1st Quality: Guidance</h3>
              <p>
                You are capable of great things, but you must never forget that
                there is a hand guiding your steps. We call that hand God, and
                He always guides us according to His will.
              </p>
            </div>
            <div className="pencil-quality expectation-item">
              <i className="fa-solid fa-gem icon"></i>
              <h3>2nd Quality: Resilience</h3>
              <p>
                Now and then, I have to stop writing and use a sharpener. That
                makes the pencil suffer a little, but afterwards, he’s much
                sharper. So you, too, must learn to bear certain pains and
                sorrows, because they will make you a better person.
              </p>
            </div>
            <div className="pencil-quality expectation-item">
              <i className="fa-solid fa-wand-magic-sparkles icon"></i>
              <h3>3rd Quality: Adaptability</h3>
              <p>
                The pencil always allows us to use an eraser to rub out any
                mistakes. This means that correcting something we did is not
                necessarily a bad thing; it helps to keep us on the road to
                justice.
              </p>
            </div>
            <div className="pencil-quality expectation-item">
              <i className="fa-solid fa-anchor icon"></i>
              <h3>4th Quality: Integrity</h3>
              <p>
                What really matters in a pencil is not its wooden exterior, but
                the graphite inside. So always pay attention to what is
                happening inside you.
              </p>
            </div>
            <div className="pencil-quality expectation-item">
              <i className="fa-solid fa-bullseye icon"></i>
              <h3>5th Quality: Impact</h3>
              <p>
                It always leaves a mark. in just the same way, you should know
                that everything you do in life will leave a mark, so try to be
                conscious of that in your every action.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Alumind;
