"use client";
import { useState } from "react";

type UIUXProject = {
  title: string;
  image: string;
  link: string;
  company: string;
};

type GraphicProject = {
  image: string;
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"freelance" | "team">("freelance");
  const teamProjects: UIUXProject[] = [
    {
      title: "NewsHunt | News Aggregator",
      image: "projects/Newshunt.png",
      link: "https://www.figma.com/design/0Du72TpJtsGTxcSOUOFdvF/Newshunt--News-Agregator?node-id=13-4475&t=mKHOBsejQAMwMZyv-0",
      company: "A smart news aggregator that brings together trending news from reliable sources into one personalized, easy-to-browse feed.",
    },
    {
      title: "NGEN | Next Generation Circle ",
      image: "projects/Ngen.png",
      link: "https://www.figma.com/design/Nv0MVyuZlsTQ8eEjT3MeuH/NGEN-Website?m=auto&t=RNHHLGhlGp29OXc1-6",
      company: "Next Generation Circle is a global IT and digital transformation company providing tailored software solutions for businesses worldwide.",
    },
    {
      title: "Morse | Arabic Website ",
      image: "projects/Morse.png",
      link: "https://www.figma.com/design/K2lB1AJQXDV2Y3WQqvEZF9/Morse-Website?m=auto&t=JWCVrpFt8JO3kCsF-6",
      company: "Designed an interactive Arabic-language landing page for Morse, showcasing its IT solutions with a modern, responsive layout.",
    },
    {
      title: "GayleMail Mobile App",
      image: "projects/GayleMail.png",
      link: "https://www.figma.com/design/PJkc4vNu5Hk8QL8csT7qxZ/GayleMail-Application?m=auto&t=JWCVrpFt8JO3kCsF-6",
      company: "Gaylemail is an innovative mobile email app offering smart tools, daily updates, and productivity-focused features.",
    },
    {
      title: "E-Markaz Mobile App",
      image: "projects/E-Markaz.png",
      link: "https://www.figma.com/design/V7to6x9Fq7xzWRrPX7FuhR/E-Markaz-Mobile-App?m=auto&t=JWCVrpFt8JO3kCsF-6",
      company: "Designed a user-centric mobile app UI for E-Markaz, enhancing e-commerce and social selling through a modern, seamless experience.",
    },
    {
      title: "Darewro Mobile App",
      image: "projects/Darewro-app.png",
      link: "https://www.figma.com/design/2MFdjUtr9IaQzCQNL5gFab/Darewro-Mobile-App?m=auto&t=JWCVrpFt8JO3kCsF-6",
      company: "Designed a modern mobile app UI for Darewro, an on-demand delivery service for food, groceries, parcels, and more.",
    },
    {
      title: "Noor ul Quran Mobile App",
      image: "projects/Quran.png",
      link: "https://www.figma.com/design/DnBWjiTll92vGOVEwPZMUX/Noor-%5CUl-Quran-App?m=auto&t=JWCVrpFt8JO3kCsF-6",
      company: "Noor Ul Quran is a cross-platform Quran app featuring audio tilawat, translations, interactive reading, quizzes, and stories for a seamless Islamic learning experience.",
    },
    {
      title: "Affirmation Empire Mobile App",
      image: "projects/Miracle.png",
      link: "https://www.figma.com/design/mDruVW3Wh33K3nGirf5gFW/Affirmation-Empire?node-id=1-2693&p=f&t=LQG2SKnlQwxEXFJh-0",
      company: "Affirmation Empire is a motivational mobile app offering daily affirmations, inspiring quotes, goals, and uplifting stories for personal growth.",
    }
  ];

  const freelanceProjects: GraphicProject[] = [
    { image: "projects/graphic/1.jpg" },
    { image: "projects/graphic/2.jpg" },
    { image: "projects/graphic/3.jpg" },
    { image: "projects/graphic/4.png" },
    { image: "projects/graphic/5.png" },
    { image: "projects/graphic/6.png" },
    { image: "projects/graphic/7.png" },
    { image: "projects/graphic/8.png" },
    { image: "projects/graphic/9.png" },
    { image: "projects/graphic/10.png" },
    { image: "projects/graphic/11.png" },
    { image: "projects/graphic/12.jpg" },
    { image: "projects/graphic/13.jpg" },
    { image: "projects/graphic/14.jpg" },
    { image: "projects/graphic/15.jpg" },
    { image: "projects/graphic/16.jpg" },
    { image: "projects/graphic/17.jpg" },
    { image: "projects/graphic/18.jpg" },
    { image: "projects/graphic/19.jpg" },
    { image: "projects/graphic/20.jpg" },
    { image: "projects/graphic/21.jpg" },
    { image: "projects/graphic/22.jpg" },
    { image: "projects/graphic/23.jpg" },
    { image: "projects/graphic/24.png" },
    { image: "projects/graphic/25.png" },
    { image: "projects/graphic/26.png" },
    { image: "projects/graphic/27.png" },
    { image: "projects/graphic/28.jpg" },
    { image: "projects/graphic/29.png" },
    { image: "projects/graphic/30.jpg" },
    { image: "projects/graphic/31.png" },
    { image: "projects/graphic/32.png" },
    { image: "projects/graphic/33.jpg" },
    { image: "projects/graphic/34.png" },
    { image: "projects/graphic/35.png" },
    { image: "projects/graphic/36.png" },
    { image: "projects/graphic/37.png" },
    { image: "projects/graphic/38.png" },
    { image: "projects/graphic/39.png" },
    { image: "projects/graphic/40.png" },
    { image: "projects/graphic/41.png" },
    { image: "projects/graphic/42.png" },
    { image: "projects/graphic/44.png" },
    { image: "projects/graphic/45.png" },
    { image: "projects/graphic/46.png" },
    { image: "projects/graphic/47.png" },
    { image: "projects/graphic/48.png" },
  ];

  const isGraphic = activeTab === "freelance";
  const currentProjects = isGraphic
    ? freelanceProjects
    : teamProjects;

  return (
    <section className="py-20 px-6 bg-black text-white" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold uppercase">
            My <span className="text-[#0EA5E9]">Designs</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mt-4"></div>

          {/* Tabs */}
          <div className="flex justify-center mt-10">
            <div className="bg-gray-800 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("freelance")}
                className={`px-6 py-2 rounded-md ${isGraphic ? "bg-[#0EA5E9] text-white" : "text-gray-300"
                  }`}
              >
                Graphic Designing
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`px-6 py-2 rounded-md ${!isGraphic ? "bg-[#0EA5E9] text-white" : "text-gray-300"
                  }`}
              >
                UI/UX Designing
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div
          className={`grid gap-6 ${isGraphic
              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
        >
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              {/* Graphic Card */}
              {isGraphic && (
                <div className="aspect-square bg-gray-200 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt="Graphic Project"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              )}

              {/* UI/UX Card */}
              {!isGraphic && (
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={(project as UIUXProject).image}
                      alt={(project as UIUXProject).title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-black">
                    <h3 className="text-lg font-bold mb-2">
                      {(project as UIUXProject).title}
                    </h3>
                    <p className="text-sm mb-4">
                      {(project as UIUXProject).company}
                    </p>
                    <a
                      href={(project as UIUXProject).link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
