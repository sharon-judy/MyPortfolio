import React from 'react';
import webdev from '../assets/web development (1).png';
import frontend from '../assets/front-end.png';
import backend from '../assets/backend.png';
import fullstack from '../assets/ful-stack.png';

const services = [
  {
    id: 1,
    image: webdev,
    title: "Web  Design ",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    image: frontend,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    image: backend,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    image: fullstack,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
];

function Services() {
  return (
    <div className="relative text-white py-20" id="service" style={{ background: "#1a1a1a" }}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        <h2 className="text-4xl font-semibold mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-black px-6 pb-6 rounded-lg hover:shadow-lg transform 
            transition-transform duration-300 hover:scale-105"
            >
              <img src={service.image} alt={service.title} className="w-24 h-24 object-cover mx-auto mt-4" />
              <h3 className="mt-4 text-2xl font-bold text-transparent bg-clip-text 
            bg-green-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
