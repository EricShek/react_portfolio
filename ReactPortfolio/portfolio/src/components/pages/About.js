import React from 'react';
import autumnImg from "./asset/images/autumn-4667080_1280.jpg"

export default function About() {
  return (
    <div>
      <h3> My name is Eric Shek.  I live in Columbus, OH.  I started my course to be a Full Stack Web Developer with The Ohio State University.  I am looking to change my career path after working with the same employer in the past 15 years.  I am looking forward with the change.</h3>
      <p>
      <img alt="autumn" src={autumnImg} className="autumnImg"></img>
      </p>
    </div>
  );
}
