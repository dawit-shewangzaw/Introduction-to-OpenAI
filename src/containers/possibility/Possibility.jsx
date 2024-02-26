import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p> Imagine a universe of words where writer's block fades into oblivion, complex knowledge becomes effortlessly clear, and creativity embarks on a limitless dance Imagine crafting captivating content in seconds, exploring new worlds of expression, and learning anything instantly. Brainstorm like a genius, personalize your education, and push the boundaries of human thought – all powered by the boundless potential of GPT-3.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
