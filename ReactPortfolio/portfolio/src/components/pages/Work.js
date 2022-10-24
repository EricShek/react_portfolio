import React from 'react';
import glacierImg from "./asset/images/glacier-7187291_1280.jpg"


export default function Work() {
  return (
    <div>
      <h3> I have been working in the Banking field for the last 15 years.  Prior to that, I worked in Real Estate field as an agent.  Also have worked in insurance field, Car sales and Restaurant.</h3>
      <p>
        {/* I have been working in the Banking field for the last 15 years.  Prior to that, I worked in Real Estate field as an agent.  Also have worked in insurance field, Car sales and Restaurant. */}
        <img alt="glacier" src={glacierImg} className="glacierImg"></img>
      </p>
      
    </div>
  );
}
