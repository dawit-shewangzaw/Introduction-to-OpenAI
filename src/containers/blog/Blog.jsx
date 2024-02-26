import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Feb 13, 2024" text="Memory and new controls for ChatGPT" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 25, 2024" text="New embedding models and API updates" />
        <Article imgUrl={blog03} date="Nov 6, 2023" text="Introducing GPTs" />
        <Article imgUrl={blog04} date="Nov 30, 2022" text="Introducing ChatGPT" />
        <Article imgUrl={blog05} date="Sep 22, 2020" text="OpenAI Licenses GPT-3 technology to Microsoft" />
      </div>
    </div>
  </div>
);

export default Blog;
