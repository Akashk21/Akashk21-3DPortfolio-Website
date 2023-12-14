import React, { useState, useEffect } from 'react';
import MyImage from '../assets/images/my-pic.jpg';

const About = () => {
  // Placeholder link for ResumePDF
  const ResumePDF = 'https://drive.google.com/file/d/1kX9s8aMF2MpQhXFy_DTop2fwKkk-96A_/view?usp=sharing';

  // Use sessionStorage to keep track of whether the resume has been downloaded
  const [downloadedResume, setDownloadedResume] = useState(
    sessionStorage.getItem('downloadedResume') === 'true' || false
  );

  const handleDownloadResume = () => {
    setDownloadedResume(true);
    sessionStorage.setItem('downloadedResume', 'true');
  };

  // Save downloadedResume state to sessionStorage when it changes
  useEffect(() => {
    sessionStorage.setItem('downloadedResume', downloadedResume.toString());
  }, [downloadedResume]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        paddingTop: '80px',
        backgroundColor: 'white',
        color: '#333',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            flex: 1,
            textAlign: 'left',
            maxWidth: '600px',
          }}
        >
          <h1 style={{ fontSize: '2rem', color: '#007bff', marginBottom: '10px' }}>
            Akash Kumar
          </h1>

          <p>
            Hi, I'm Akash Kumar, a dedicated software developer based in Bangalore, India. With a strong foundation in computer science, I bring a wealth of hands-on experience in diverse technologies, showcasing my commitment to delivering innovative and efficient solutions.
          </p>

          <br />

          <strong>Key Highlights:</strong>
          <ul>
            <li>Passionate about coding and dedicated to delivering high-quality software solutions.</li>
            <li>Skilled in languages such as C/C++, React.js, and databases like MySQL and MongoDB.</li>
            <li>Proficient in Python, Angular, Java, Node.js, Figma, and Github.</li>
            <li>Thrive on challenging projects and consistently strive for excellence.</li>
          </ul>

          <br />

          Beyond programming, I excel in effective time management and collaborative efforts, ensuring timely project delivery. My journey includes impactful experiences, such as my role as a Software Developer Intern at eZoom Digital, where I successfully developed user-friendly and responsive websites using ReactJS.

          <br /><br />

          Additionally, I actively contribute to ongoing projects, including an innovative system for Automatic Match Highlight Generation through advanced audio and text analysis techniques.

          <br /><br />

          Explore my portfolio and projects to gain deeper insights into my skills and achievements. Let's connect and discuss how my expertise can contribute to your upcoming endeavors!
        </div>

        <div
          style={{
            width: '200px',
            height: '300px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            marginLeft: '20px',
          }}
        >
          <img
            src={MyImage}
            alt="Myself"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </div>
      </div>

      {/* Always render Download Resume button */}
      <a
        href={ResumePDF}
        download="Akash_Kumar_Resume.pdf"
        onClick={handleDownloadResume}
        style={{
          marginTop: '20px',
          padding: '15px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Download Resume
      </a>
    </div>
  );
};

export default About;
