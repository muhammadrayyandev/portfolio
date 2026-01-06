// "use client";
// import { useState } from "react";

// const Projects = () => {
//   const [activeTab, setActiveTab] = useState("freelance");

//   const teamProjects = [
//     {
//       title: "NewsHunt | News Aggregator",
//       image: "projects/Newshunt.png",
//       hoverImage: "projects/hover/News.svg",
//       link: "https://newshunt.io/",
//       company: "A smart news aggregator that brings together trending news from reliable sources into one personalized, easy-to-browse feed.",
//     },
//     {
//       title: "NGEN | Next Generation Circle ",
//       image: "projects/Ngen.png",
//       hoverImage: "projects/hover/ngen.svg",
//       link: "https://ausc.com.pk/",
//       company: "Next Generation Circle is a global IT and digital transformation company providing tailored software solutions for businesses worldwide.",
//     },
//     {
//       title: "Morse | Arabic Website ",
//       image: "projects/Morse.png",
//       hoverImage: "projects/hover/Morse.svg",
//       link: "https://ausc.com.pk/",
//       company: "Designed an interactive Arabic-language landing page for Morse, showcasing its IT solutions with a modern, responsive layout.",
//     },
//     {
//       title: "GayleMail Mobile App",
//       image: "projects/GayleMail.png",
//       hoverImage: "projects/hover/GayleMail.svg",
//       link: "https://ausc.com.pk/",
//       company: "Gaylemail is an innovative mobile email app offering smart tools, daily updates, and productivity-focused features.",
//     },
//     {
//       title: "E-Markaz Mobile App",
//       image: "projects/E-Markaz.png",
//       hoverImage: "projects/hover/E Markaz.svg",
//       link: "https://ausc.com.pk/",
//       company: "Designed a user-centric mobile app UI for E-Markaz, enhancing e-commerce and social selling through a modern, seamless experience.",
//     },
//     {
//       title: "Darewro Mobile App",
//       image: "projects/Darewro-app.png",
//       hoverImage: "projects/hover/Darewro.svg",
//       link: "https://ausc.com.pk/",
//       company: "Designed a modern mobile app UI for Darewro, an on-demand delivery service for food, groceries, parcels, and more.",
//     },
//     {
//       title: "Noor ul Quran Mobile App",
//       image: "projects/Quran.png",
//       hoverImage: "projects/hover/Quran.svg",
//       link: "https://ausc.com.pk/",
//       company: "Noor Ul Quran is a cross-platform Quran app featuring audio tilawat, translations, interactive reading, quizzes, and stories for a seamless Islamic learning experience.",
//     },
//     {
//       title: "Affirmation Empire Mobile App",
//       image: "projects/Miracle.png",
//       hoverImage: "projects/hover/Miracle.svg",
//       link: "https://www.figma.com/design/mDruVW3Wh33K3nGirf5gFW/Affirmation-Empire?node-id=1-2693&p=f&t=LQG2SKnlQwxEXFJh-0",
//       company: "Affirmation Empire is a motivational mobile app offering daily affirmations, inspiring quotes, goals, and uplifting stories for personal growth.",
//     }
//   ];

//   const freelanceProjects = [
//     {
//       title: "IAP(Industrialists Association Peshawar)",
//       image: "projects/iap.png",
//       hoverImage: "projects/hover/iap.svg",
//       link: "https://www.iapeshawar.com/",
//       company: "Freelance",
//     },
//     {
//       title: "VANIX",
//       image: "projects/vanix.png",
//       hoverImage: "projects/hover/vanix.png",
//       link: "https://vanix-teal.vercel.app/",
//       company: "Freelance",
//     },
//     {
//       title: "Story Plus",
//       image: "projects/storyplus.png",
//       hoverImage: "projects/hover/story.png",
//       link: "https://story-pulse-omega.vercel.app/",
//       company: "Freelance",
//     },
//   ];

//   const currentProjects =
//     activeTab === "freelance" ? freelanceProjects : teamProjects;

//   return (
//     <section className="py-20 px-6 bg-black text-white" id="projects">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 data-aos="fade-down" className="text-3xl font-bold mb-8 tracking-tight uppercase">
//             My <span className="text-[#0EA5E9]">Designs</span>
//           </h2>
//           <div data-aos="fade-down" data-aos-delay="200" className="w-24 h-1 bg-white mx-auto mb-8"></div>

//           {/* Tabs */}
//           <div data-aos="fade-up" data-aos-delay="400" className="flex justify-center mb-8">
//             <div className="bg-gray-800 p-1 rounded-lg">
//               <button
//                 onClick={() => setActiveTab("freelance")}
//                 className={`px-6 py-2 rounded-md font-medium transition-colors ${
//                   activeTab === "freelance"
//                     ? "bg-[#0EA5E9] text-white"
//                     : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 Graphic Designing
//               </button>
//               <button
//                 onClick={() => setActiveTab("team")}
//                 className={`px-6 py-2 rounded-md font-medium transition-colors ${
//                   activeTab === "team"
//                     ? "bg-[#0EA5E9] text-white"
//                     : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 UI/UX Designing
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {currentProjects.map((project, index) => (
//             <div
//               key={index}
//               data-aos="fade-up"
//               data-aos-delay={index * 200}
//               className="relative bg-white text-black rounded-lg overflow-hidden shadow-2xl hover:shadow-white/10 hover:scale-103 duration-600"
//             >
//               <div className="aspect-video bg-gray-100 overflow-hidden relative">
//                 <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
//                   <div className="text-gray-500 text-sm font-medium">
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={project.image}
//                       alt=""
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 transition-colors">
//                   {project.title}
//                 </h3>
//                 <h3 className="text-sm font-normal mb-3 group-hover:text-gray-600 transition-colors">
//                   {project?.company}
//                 </h3>
//                 <div className="flex items-center justify-between">
//                   <a
//                     href={project.link}
//                     className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors group/btn"
//                   >
//                     View Project
//                     <svg
//                       className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17 8l4 4m0 0l-4 4m4-4H3"
//                       />
//                     </svg>
//                   </a>
//                   <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-black transition-colors"></div>
//                 </div>
//               </div>

//               <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-colors pointer-events-none"></div>

//               {/* Hover indicator */}
//               <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


"use client";
import { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("freelance");

  const teamProjects = [
    {
      title: "NewsHunt | News Aggregator",
      image: "projects/Newshunt.png",
      hoverImage: "projects/hover/News.svg",
      link: "https://newshunt.io/",
      company: "A smart news aggregator that brings together trending news from reliable sources into one personalized, easy-to-browse feed.",
    },
    {
      title: "NGEN | Next Generation Circle ",
      image: "projects/Ngen.png",
      hoverImage: "projects/hover/ngen.svg",
      link: "https://ausc.com.pk/",
      company: "Next Generation Circle is a global IT and digital transformation company providing tailored software solutions for businesses worldwide.",
    },
    {
      title: "Morse | Arabic Website ",
      image: "projects/Morse.png",
      hoverImage: "projects/hover/Morse.svg",
      link: "https://ausc.com.pk/",
      company: "Designed an interactive Arabic-language landing page for Morse, showcasing its IT solutions with a modern, responsive layout.",
    },
    {
      title: "GayleMail Mobile App",
      image: "projects/GayleMail.png",
      hoverImage: "projects/hover/GayleMail.svg",
      link: "https://ausc.com.pk/",
      company: "Gaylemail is an innovative mobile email app offering smart tools, daily updates, and productivity-focused features.",
    },
    {
      title: "E-Markaz Mobile App",
      image: "projects/E-Markaz.png",
      hoverImage: "projects/hover/E Markaz.svg",
      link: "https://ausc.com.pk/",
      company: "Designed a user-centric mobile app UI for E-Markaz, enhancing e-commerce and social selling through a modern, seamless experience.",
    },
    {
      title: "Darewro Mobile App",
      image: "projects/Darewro-app.png",
      hoverImage: "projects/hover/Darewro.svg",
      link: "https://ausc.com.pk/",
      company: "Designed a modern mobile app UI for Darewro, an on-demand delivery service for food, groceries, parcels, and more.",
    },
    {
      title: "Noor ul Quran Mobile App",
      image: "projects/Quran.png",
      hoverImage: "projects/hover/Quran.svg",
      link: "https://ausc.com.pk/",
      company: "Noor Ul Quran is a cross-platform Quran app featuring audio tilawat, translations, interactive reading, quizzes, and stories for a seamless Islamic learning experience.",
    },
    {
      title: "Affirmation Empire Mobile App",
      image: "projects/Miracle.png",
      hoverImage: "projects/hover/Miracle.svg",
      link: "https://www.figma.com/design/mDruVW3Wh33K3nGirf5gFW/Affirmation-Empire?node-id=1-2693&p=f&t=LQG2SKnlQwxEXFJh-0",
      company: "Affirmation Empire is a motivational mobile app offering daily affirmations, inspiring quotes, goals, and uplifting stories for personal growth.",
    }
  ];

  const freelanceProjects = [
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
  const currentProjects = isGraphic ? freelanceProjects : teamProjects;

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
                className={`px-6 py-2 rounded-md ${
                  activeTab === "freelance"
                    ? "bg-[#0EA5E9]"
                    : "text-gray-300"
                }`}
              >
                Graphic Designing
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`px-6 py-2 rounded-md ${
                  activeTab === "team" ? "bg-[#0EA5E9]" : "text-gray-300"
                }`}
              >
                UI/UX Designing
              </button>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div
          className={`grid gap-6 ${
            isGraphic
              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:scale-105 transition-transform"
            >
              {/* GRAPHIC DESIGN CARD */}
              {isGraphic ? (
                <a target="_blank" rel="noreferrer">
                  <div className="aspect-square">
                    <img
                      src={project.image}
                      // alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </a>
              ) : (
                /* UI/UX CARD */
                <>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      // alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 text-black">
                    <h3 className="text-lg font-bold mb-2">
                      {/* {project.title} */}
                    </h3>
                    {/* <p className="text-sm mb-4">{project.company}</p> */}

                    <a
                      // href={project.link}
                      className="inline-flex items-center px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800"
                    >
                      View Project →
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
