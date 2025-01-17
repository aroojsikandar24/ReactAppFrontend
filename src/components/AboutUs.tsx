import React from 'react';

function AboutUs ()  {

  return (
      <div className="max-w-4xl mx-auto text-center mt-20">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our website! We are a passionate team dedicated to providing the best services to our clients.
          Our mission is to offer quality solutions that meet your needs and exceed expectations. We believe in building
          strong relationships and delivering results that matter.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-5">Our Vision</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our vision is to be a global leader in our industry, delivering innovative and sustainable solutions while fostering
          a culture of collaboration, respect, and growth.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-5">Our Values</h2>
        <div>
            <ul className="list-disc text-lg text-gray-700 pl-6 text-left">
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Excellence</li>
            <li>Collaboration</li>
            <li>Customer Satisfaction</li>
            </ul>
        </div>    
      </div>
  );
};

export default AboutUs;
