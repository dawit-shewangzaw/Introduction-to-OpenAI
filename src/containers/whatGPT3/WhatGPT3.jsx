import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="The revolutionary AI language model, isn't just a tool - it's your creative writing companion. Effortlessly generate captivating content, explore groundbreaking ideas, and write with unparalleled fluency. Ready to unlock your potential? Register and embark on a writing journey powered by AI." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Imagine chatbots seamlessly handling complex inquiries, freeing you for creative pursuits." />
      <Feature title="Knowledgebase" text="Could a knowledgebase act as a brainstorming buddy, suggesting connections and sparking wild ideas?" />
      <Feature title="Education" text="Imagine an education platform that adapts to your learning style, unlocking infinite possibilities."/>
    </div>
  </div>
);

export default WhatGPT3;
