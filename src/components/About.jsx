import React, { useEffect, useState } from 'react';
import Propic from '../assets/propic.jpg';
import { Briefcase, GraduationCap } from 'lucide-react';
import TagCloud from 'TagCloud';

import vscode from '../assets/vs code.png';
import nodejs from '../assets/nodejs.png';
import figma from '../assets/figma.png';
import postman from '../assets/postman.png';
import bootstrap from '../assets/bootstrap.png';
import github from '../assets/github (2).png';
import react from '../assets/react.png';

const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'HTML', 'CSS', 'MongoDB', 'Jest', 'Redux', 'Bootstrap', 'Tailwind Css'];

function About() {
  const [activeTab, setActiveTab] = useState('tab1');

  const experiences = [
    { company: 'Luminar Technolab', role: 'MEARN-intern', period: '2024-2025' },
  ];

  const education = [
    { institution: 'St.Johns High School', qualification: '10th Pass', period: '2016-2017' },
    { institution: 'SMHSS Koodathai', qualification: '11th-12th', period: '2018-2019' },
    { institution: 'SJCET Palai', qualification: 'B-tech(ECE)', period: '2020-2024' },
  ];

  useEffect(() => {
    if (activeTab === 'tab3') {
      const container = '.tagcloud-container';
      const options = {
        radius: 150,
        maxSpeed: 'fast',
        initSpeed: 'normal',
        direction: 135,
        keep: true,
      };
      TagCloud(container, skills, options);

      document.querySelectorAll('.tagcloud-container span').forEach((tag) => {
        tag.style.color = '#22c55e';
      });
    }
  }, [activeTab]);

  const tools = [
    { icon: vscode },
    { icon: nodejs },
    { icon: figma },
    { icon: postman },
    { icon: bootstrap },
    { icon: github },
    { icon: react },
  ];

  return (
    <div className="relative text-white py-20" id="about" style={{ background: "#1a1a1a" }}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-semibold text-left mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          {/* Conditionally render the image or the tag cloud for larger screens */}
          <div className="hidden md:block">
            {activeTab === 'tab3' ? (
              <div className="tagcloud-container w-72 h-80 mb-8"></div>
            ) : (
              <img src={Propic} alt="" className="w-72 h-80 object-cover mb-8 md:mb-0 rounded-2xl" />
            )}
          </div>

          {/* Tabs */}
          <div className="flex-1">
            {/* Tab navigation */}
            <div className="flex flex-wrap border-b border-gray-700 mb-4 ">
              <button
                className={`px-2 py-1F text-sm ${activeTab === 'tab1' ? 'border-b-2 border-green-600 font-semibold' : ''}`}
                onClick={() => setActiveTab('tab1')}
              >
                Personal Info
              </button>
              <button
                className={`px-2 py-1 text-sm  ${activeTab === 'tab2' ? 'border-b-2 border-green-600 font-semibold' : ''}`}
                onClick={() => setActiveTab('tab2')}
              >
                Qualification
              </button>
              <button
                className={`px-2 py-1 text-sm  ${activeTab === 'tab3' ? 'border-b-2 border-green-600 font-semibold' : ''}`}
                onClick={() => setActiveTab('tab3')}
              >
                Skills
              </button>

            </div>

            {/* Tab content */}
            <div className="text-gray-300">
              {activeTab === 'tab1' && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Personal Info</h3>
                  <p>
                    <span className="text-green-500">Hello there!</span> I'm Sharon, a full-stack developer skilled in front-end and back-end technologies, focusing on modern, responsive web apps and seamless user experiences.

                    <br />
                    <br />
                    I'm always on the lookout for opportunities that could broaden and enhance my skillset. I enjoy working on challenging projects and love collaborating with others to bring their ideas to life.
                  </p>

                  <h3 className="font-semibold text-2xl  mb-2 mt-4">Languages</h3>
                  <p className=' text-green-500'> English, Malayalam</p>


                </div>
              )}

              {activeTab === 'tab2' && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Qualification</h3>
                  <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ms-2.5">
                      {/* Education Section */}
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <GraduationCap className="text-green-500" />
                          <h3 className="text-xl font-bold text-green-500">Education</h3>
                        </div>
                        {education.map((edu, index) => (
                          <div key={index} className="relative pl-5 mb-2">
                            <div className="absolute left-0 top-2.5 w-2 h-2 bg-green-500 rounded-full"></div>
                            <h4 className="text-lg font-semibold">{edu.institution}</h4>
                            <p>{edu.qualification} <span className="text-sm text-gray-400 ms-3">| {edu.period}</span></p>
                          </div>
                        ))}
                      </div>
                      {/* Experience Section */}
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Briefcase className="text-green-500" />
                          <h3 className="text-xl font-bold text-green-500">Experience</h3>
                        </div>
                        {experiences.map((exp, index) => (
                          <div key={index} className="relative pl-5 mb-2">
                            <div className="absolute left-0 top-2.5 w-2 h-2 bg-green-500 rounded-full"></div>
                            <h4 className="text-lg font-semibold">{exp.company}</h4>
                            <p>{exp.role} <span className="text-sm text-gray-400">| {exp.period}</span></p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tab3' && (
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                  <p> HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Jest, Redux, Bootstrap, Tailwind Css</p>
                  <br />
                  <br />
                  <h3 className="text-2xl font-semibold mb-4">Tools</h3>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
                    {tools.map((tool, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img src={tool.icon} alt="" className="w-10 h-10 object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
