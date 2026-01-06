// import React from "react";

// const Skills = () => {
//   const skills = [
//   {
//     name: "Figma",
//     icon: "https://cdn.simpleicons.org/figma",
//     category: "UI-UX",
//   },
//   {
//     name: "Adobe XD",
//     icon: "https://cdn.simpleicons.org/adobexd",
//     category: "UI-UX",
//   },
//   {
//     name: "Adobe Photoshop",
//     icon: "https://cdn.simpleicons.org/adobephotoshop",
//     category: "Graphic Design",
//   },
//   {
//     name: "Adobe Illustrator",
//     icon: "https://cdn.simpleicons.org/adobeillustrator",
//     category: "Graphic Design",
//   },
//   {
//     name: "Adobe Photopea",
//     icon: "https://cdn.simpleicons.org/photopea",
//     category: "Graphic Design",
//   },
//   {
//     name: "Canva",
//     icon: "https://cdn.simpleicons.org/canva",
//     category: "Graphic Design",
//   },
//   {
//     name: "Prototyping",
//     icon: "https://cdn.simpleicons.org/figma", // use Figma as proxy
//     category: "UI-UX",
//   },
//   {
//     name: "Wireframing",
//     icon: "https://cdn.simpleicons.org/adobexd", // Adobe XD as proxy
//     category: "UI-UX",
//   },
//   {
//     name: "Motion Design",
//     icon: "https://cdn.simpleicons.org/aftereffects",
//     category: "UI-UX",
//   },
//   {
//     name: "Branding",
//     icon: "https://cdn.simpleicons.org/adobeillustrator",
//     category: "Graphic Design",
//   },
//   {
//     name: "Social Media Design",
//     icon: "https://cdn.simpleicons.org/instagram",
//     category: "Graphic Design",
//   },
//   {
//     name: "Typography",
//     icon: "https://cdn.simpleicons.org/googlefonts",
//     category: "UI-UX",
//   },
// ];



//   const frontendSkills = skills.filter(
//     (skill) => skill.category === "UI-UX"
//   );
//   const backendSkills = skills.filter((skill) => skill.category === "Graphic Design");

//   return (
//     <section className="py-20 px-6 bg-white text-black" id="skills">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold mb-4 tracking-tight">
//             Technical <span className="text-[#0EA5E9]">Skills</span>
//           </h2>
//           <p className="text-xl text-gray-600 mb-6">
//             Graphics & UI-UX Designer
//           </p>
//           <div className="w-24 h-1 bg-black mx-auto"></div>
//         </div>

//         {/* Frontend Skills */}
//         <div className="mb-16">
//           <h3 className="text-3xl font-bold text-center mb-12">
//             <span className="text-black">UI-UX</span>{" "}
//             <span className="text-gray-400">Designing</span>
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//             {frontendSkills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-black text-white rounded-2xl p-8 hover:bg-gray-900 transition-all duration-500 cursor-pointer overflow-hidden"
//               >
//                 <div className="text-center">
//                   <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-700 ease-out">
//                     {skill.icon}
//                   </div>
//                   <h4 className="text-lg font-semibold group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300">
//                     {skill.name}
//                   </h4>
//                 </div>

//                 {/* Hover overlay */}
//                 <div className="absolute flex justify-center items-center inset-0 bg-linear-to-br from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//                   <div className="text-center">
//                     <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-700 ease-out">
//                       {skill.icon}
//                     </div>
//                     <h4 className="text-lg font-semibold group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300">
//                       {"."}
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* graphics Skills */}
//         <div className="mb-16">
//           <h3 className="text-3xl font-bold text-center mb-12">
//             <span className="text-black">Graphics</span>{" "}
//             <span className="text-gray-400">Designing</span>
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//             {frontendSkills.map((skill, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-black text-white rounded-2xl p-8 hover:bg-gray-900 transition-all duration-500 cursor-pointer overflow-hidden"
//               >
//                 <div className="text-center">
//                   <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-700 ease-out">
//                     {skill.icon}
//                   </div>
//                   <h4 className="text-lg font-semibold group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300">
//                     {skill.name}
//                   </h4>
//                 </div>

//                 {/* Hover overlay */}
//                 <div className="absolute flex justify-center items-center inset-0 bg-linear-to-br from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//                   <div className="text-center">
//                     <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-700 ease-out">
//                       {skill.icon}
//                     </div>
//                     <h4 className="text-lg font-semibold group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-300">
//                       {"."}
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Full Stack Badge */}
//         <div className="text-center mt-16">
//           <div className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full text-lg font-semibold">
//             <span className="mr-3">🎨</span>
//             Graphics & UI/UX Designer
//             <span className="ml-3">👩🏻‍💻</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

"use client";

import React from "react";

const Skills = () => {
  const skills = [
    // UI/UX Tools
    { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png", category: "UI-UX" },
    { name: "Adobe XD", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png", category: "UI-UX" },
    { name: "Wireframing", icon: "https://cdn3d.iconscout.com/3d/premium/thumb/ui-wireframe-3d-icon-png-download-3569929.png", category: "UI-UX" },
    { name: "Prototyping", icon: "https://cdn.sanity.io/images/599r6htc/regionalized/fdbd861beb399c5646367753bee2e80cff093bec-1108x1108.png?w=540&q=75&fit=max&auto=format&dpr=1.5", category: "UI-UX" },
    { name: "Animations", icon: "https://cdn-icons-png.flaticon.com/512/4943/4943055.png", category: "UI-UX" },
    { name: "Typography", icon: "https://cdn3d.iconscout.com/3d/premium/thumb/typography-3d-icon-png-download-5625775.png", category: "UI-UX" },

    // Graphic Design Tools
    { name: "Photoshop", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png", category: "Graphic Design" },
    { name: "Illustrator", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2048px-Adobe_Illustrator_CC_icon.svg.png", category: "Graphic Design" },
    { name: "Photopea", icon: "https://www.photopea.com/promo/icon512.png", category: "Graphic Design" },
    { name: "Canva", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png", category: "Graphic Design" },
    { name: "Branding & Identity", icon: "https://www.pngitem.com/pimgs/m/112-1127743_software-development-clipart-identity-brand-identity-design-png.png", category: "Graphic Design" },
    { name: "Social Media Design", icon: "https://cdn-icons-png.flaticon.com/512/5692/5692184.png", category: "Graphic Design" },
  ];

  const uiUxSkills = skills.filter(skill => skill.category === "UI-UX");
  const graphicsSkills = skills.filter(skill => skill.category === "Graphic Design");

  // const SkillCard = ({ skill }: { skill: typeof skills[0] }) => (
  //   <div className="group relative bg-black text-white rounded-2xl p-6 hover:bg-gray-900 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col items-center">
  //     <img
  //       src={skill.icon}
  //       alt={skill.name}
  //       className="w-16 h-16 mb-3 object-contain group-hover:scale-110 transition-transform duration-500"
  //     />
  //     <h4 className="text-lg font-semibold text-center">{skill.name}</h4>
  //   </div>
  // );

  const SkillCard = ({ skill }: { skill: typeof skills[0] }) => (
    <div className="group relative bg-gradient-to-br from-gray-700 to-gray-800 text-white rounded-2xl p-6 cursor-pointer overflow-hidden 
                  flex flex-col items-center shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-16 h-16 mb-3 object-contain transition-transform duration-500 group-hover:scale-125 drop-shadow-lg"
      />
      <h4 className="text-lg font-semibold text-center transition-all duration-500 group-hover:text-[#0EA5E9]">
        {skill.name}
      </h4>

      {/* Optional overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-700 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500"></div>
    </div>
  );


  return (
    <section className="py-20 px-6 bg-white text-black" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            My <span className="text-[#0EA5E9]">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 mb-6">Graphics & UI/UX Designer</p>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        {/* UI/UX Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-black">UI/UX</span> <span className="text-gray-400">Design</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {uiUxSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Graphic Design Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-black">Graphics</span> <span className="text-gray-400">Design</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {graphicsSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
