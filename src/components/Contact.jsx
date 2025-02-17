import React from 'react';

function Contact() {
  return (
    <div className="relative text-white py-20" id="contact" style={{ background: "#1a1a1a" }}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        <h2 className="text-4xl font-semibold mb-8">Get In Touch </h2>
        <p className="text-lg mb-8">
        "Excited to create something amazing together? Whether it's a new project, a collaboration,<br/> or just a quick chat—let's connect and make it happen!"
        </p>
        <a
          href="mailto:sharonjudy2024@gmail.com ?subject=Let's Collaborate!&body=Hi, I'd like to connect with you."
          className="inline-block px-6 py-3 font-medium text-green-400 border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition duration-300"
        >
          Say Hello!
        </a>
      </div>
    </div>
  );
}

export default Contact;
