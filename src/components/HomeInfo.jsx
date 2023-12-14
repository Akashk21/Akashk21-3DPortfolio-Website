import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className='font-medium sm:text-xl text-center'>{text}</p>
      <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain' alt="Arrow Icon" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Namaste, I am <span className="font-semibold">Akash</span> 👋
      <br />
      A Software Developer from India
    </h1>
    
  ),
  2: (
    <InfoBox
    //   text="Led multiple projects to success over the years. Curious about the impact?"
      
        text="Achieved a B.Tech in Computer Science and Engineering from PES University, Bangalore, India. The program provided a robust foundation in cutting-edge technologies, fostering a passion for innovation and problem-solving" 
        link="https://www.linkedin.com/in/akashkumar1100/"
      btnText="Linkedin Profile"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="https://github.com/Akashk21"
      btnText="Github Repo"
    />
  ),
  4: (
    <InfoBox
      text="Need a project or hiring for a developer? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's Talk "
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
