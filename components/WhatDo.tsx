import React from 'react'

const WhatDo = () => {
  const uiUxServices = [
  'Designing intuitive and visually appealing user interfaces for web and mobile applications.',
  'Creating interactive prototypes and wireframes using Figma, Adobe XD, and other design tools.',
  'Conducting user research, usability testing, and implementing user-centered design principles.',
  'Collaborating with developers and stakeholders to deliver functional and scalable design solutions.'
];

const graphicsServices = [
  'Creating high-quality graphics and visuals using Adobe Photoshop, Illustrator, and Canva.',
  'Designing branding assets including logos, social media posts, and marketing materials.',
  'Developing visual storytelling and layouts for both digital and print media.',
  'Ensuring consistency in color, typography, and overall brand identity across all projects.'
];

const animationAndPrototyping = [
  'Building interactive prototypes with smooth transitions and animations.',
  'Adding micro-interactions and motion design to enhance user engagement.',
  'Using tools like Figma, Adobe XD, and Photopea to visualize user flows and interactions.',
  'Optimizing prototypes for usability testing and client presentations.'
];


  return (
    <section id="whatdo" className=" bg-black relative overflow-hidden pt-10">
      <h1 className='uppercase text-center text-5xl text-white font-bold'>what i do?</h1>
      <div className="absolute inset-0 bg-linear-to-r from-[#0470a1] to-[#075477] opacity-20 blur-3xl"></div>
      <div className="absolute inset-0 bg-linear-to-r from-[#0470a1] to-[#075477] opacity-20 blur-3xl"></div>
      <div className="absolute inset-0 bg-linear-to-r from-[#0470a1] to-[#075477] opacity-20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-32 py-20 px-6">
        {/* Full Stack Development */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/whatdo/ui-ux.jpeg" alt="Full Stack Development" className="w-full rounded-lg" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              UI/UX Designing
            </h2>
            <div className="space-y-6">
              {uiUxServices.map((service, index) => (
                <div key={index} className="flex gap-3 group">
                  <span className="text-[#0EA5E9] text-xl mt-1 group-hover:scale-125 transition-transform">⚡</span>
                  <p className="text-gray-300 leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <img src="/whatdo/GraphicsDesiging.webp" alt="Backend Development" className="w-full rounded-lg" />
          </div>
          <div className="md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Graphics Desiging
            </h2>
            <div className="space-y-6">
              {graphicsServices.map((service, index) => (
                <div key={index} className="flex gap-3 group">
                  <span className="text-[#0EA5E9] text-xl mt-1 group-hover:scale-125 transition-transform">⚡</span>
                  <p className="text-gray-300 leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Frontend Development */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/whatdo/Animation&Prototyping.webp" alt="Frontend Development" className="w-full rounded-lg" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Animation & Prototyping
            </h2>
            <div className="space-y-6">
              {animationAndPrototyping.map((service, index) => (
                <div key={index} className="flex gap-3 group">
                  <span className="text-[#0EA5E9] text-xl mt-1 group-hover:scale-125 transition-transform">⚡</span>
                  <p className="text-gray-300 leading-relaxed">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatDo