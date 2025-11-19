import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      location: "Remote",
      duration: "2 Years (Current)",
      type: "Full-time",
      description:
        "Designing and developing complete web solutions, including both frontend and backend functionalities.",
    },
    {
      title: "Full Stack Developer",
      company: "Next Generation Circle Pvt. Ltd.",
      location: "Peshawar",
      duration: "1.5 Years (Current)",
      type: "Full-time",
      description: "Developing both frontend and backend solutions",
    },
    {
      title: "Frontend Developer",
      company: "ExtendsTech",
      location: "Peshawar",
      duration: "Previous Role",
      type: "Full-time",
      description: "Focused on frontend development and user interfaces",
    },
    {
      title: "Backend Developer Intern",
      company: "Aivatek",
      location: "Islamabad",
      duration: "4 Months",
      type: "Internship",
      description: "Backend development and server-side technologies",
    },
    {
      title: "Frontend Developer Intern",
      company: "Aivatek",
      location: "Islamabad",
      duration: "6 Months",
      type: "Internship",
      description: "Frontend development and web technologies",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-black text-white" id="experiences">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2
            data-aos="fade-down"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase"
          >
            Work <span className="text-[#0EA5E9]">Experience</span>
          </h2>
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="w-16 sm:w-20 md:w-24 h-1 bg-white mx-auto"
          ></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 200}
                className={`relative flex items-center md:${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#0EA5E9] rounded-full border-2 md:border-4 border-black z-10"></div>

                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 w-full md:w-5/12 bg-gray-900 p-4 sm:p-5 md:p-6 rounded-lg border border-gray-800 hover:border-[#0EA5E9]/30 transition-colors md:${
                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#0EA5E9]/20 text-[#0EA5E9] rounded-full w-fit">
                      {exp.type}
                    </span>
                  </div>

                  <div className="mb-3">
                    <p className="text-base sm:text-lg font-semibold text-gray-300">
                      {exp.company}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-gray-400 gap-1 sm:gap-0">
                      <span>📍 {exp.location}</span>
                      <span>⏱️ {exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
