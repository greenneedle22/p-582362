
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full py-20 bg-gray-50" id="showcase">
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Experience the Future Today
          </h2>
          <p className="text-lg text-gray-600">
            Our cutting-edge humanoid robot is designed to transform how we interact 
            with technology in everyday environments.
          </p>
        </div>
        
        <div className="rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
            alt="Advanced humanoid robot" 
            className="w-full h-auto object-cover"
          />
          <div className="bg-white p-8">
            <h3 className="text-2xl font-display font-semibold mb-4">Next Generation Robotics</h3>
            <p className="text-gray-700">
              Built with precision engineering and sophisticated AI, our robots seamlessly 
              integrate into various environments, from homes to hospitals, providing 
              assistance and enriching human experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
