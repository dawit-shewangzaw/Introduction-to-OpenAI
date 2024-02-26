import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Content Creation Powerhouse',
    text: 'A marketing agency harnessed GPT-3 creative potential to generate captivating blog posts, social media content, and website copy, resulting in a 30% increase in organic traffic and leads.',
  },
  {
    title: ' Brainstorming Breakthroughs',
    text: 'A design firm leveraged GPT-3 ability to explore vast knowledge spaces to brainstorm innovative ideas for logo concepts, marketing campaigns, and product features, leading to a 25% reduction in ideation time and a 15% increase in client satisfaction.',
  },
  {
    title: 'Personalized Language Learning',
    text: 'An online language learning platform integrated GPT-3 personalized language processing to customize exercises and provide AI-powered feedback, boosting user engagement and improving language fluency by 10% within 3 months.',
  },
  {
    title: 'Accessible Knowledge Management',
    text: 'A research institute utilized GPT-3 powerful information synthesis to simplify access to and analysis of complex research data, enabling researchers to gain new insights and publish 20% more papers in a year.'
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
