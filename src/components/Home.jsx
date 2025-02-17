
import React from "react";
import resume from '../assets/resume.pdf'
import { useTypewriter, Cursor } from 'react-simple-typewriter'



function Home() {
  const [text] = useTypewriter({
    words: [' a_Developer', ' a_Designer'],
    loop: {},
    typeSpeed: 120

  });
  return (
    <>
      <div className="relative  text-white min-h-screen flex flex-col justify-center items-start px-6 sm:px-8 lg:px-16">





        <button
          className="text-2xl absolute top-4 right-4 text-white hover:underline hover:text-green-500 decoration-green-500 hover:decoration-2 focus:outline-none"
          onClick={() => window.location.href = `${resume}`}
        >
          Resume
        </button>

        {/* Main Content */}
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h6 className="text-green-500 font-extrabold text-sm sm:text-lg tracking-wider">
            hi!!  my name is
          </h6>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-wider mt-4">
            Sharon Judy
          </h2>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-4">
            I'm
            <span className="font-extrabold text-green-500 ">
              {text}
            </span>
            <span className="text-green-600">
              <Cursor cursorStyle='|' />
            </span>
          </h3>


          <div className="mt-8">
            <button className="px-6 py-2 text-green-500 border border-green-500 rounded-full hover:bg-green-500 hover:text-white transition-transform transform hover:scale-105">
              <a href="#about">About Me</a>
            </button>
          </div>

        </div>
        <div className="flex flex-col justify-between p-8 text-white">
          {/* Social Icons */}
          <div className="flex flex-col items-end space-y-2 absolute bottom-4 right-8">
            <a href="https://www.instagram.com/invites/contact/?igsh=1hg80u60td3n2&utm_content=4h6quwc " className="block text-white hover:text-green-500">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/sharonjudy303/" className="block text-white hover:text-green-500">
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a href="https://github.com/sharon-judy" className="block text-white hover:text-green-500">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="#" className="block text-white hover:text-green-500">
              <i className="fas fa-paper-plane text-2xl"></i>
            </a>
          </div>

          {/* Say Hello Button */}
          <button
            className="text-2xl text-white hover:underline hover:text-green-500 decoration-green-500 hover:decoration-2 focus:outline-none absolute bottom-4 left-8"
            onClick={() => window.location.href = 'mailto:sharonjudy2024@gmail.com'}
          >
            Say hello!
          </button>

        </div>





      </div>
    </>
  );
}

export default Home;
