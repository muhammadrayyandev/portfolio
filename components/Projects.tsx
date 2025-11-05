const Projects = () => {
  const projects = [
    {
      title: "IAP(Industrialists Association Peshawar)",
      image: "projects/iap.png",
      hoverImage: "projects/hover/iap.svg",
      link: "https://www.iapeshawar.com/",
    },
    {
      title: "VANIX",
      image: "projects/vanix.png",
      hoverImage: "projects/hover/vanix.png",
      link: "https://vanix-teal.vercel.app/",
    },
    {
      title: "Project 3",
      image: "projects/ausc.png",
      hoverImage: "projects/hover/ausc.svg",
      link: "https://ausc.com.pk/",
    },
  ];
  
  return (
    <section className="py-20 px-6 bg-black text-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight uppercase">
            Completed <span className="text-[#0EA5E9]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white text-black rounded-lg overflow-hidden shadow-2xl hover:shadow-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-gray-500 text-sm font-medium">
                    <img src={project.image} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Black sliding overlay with hover image */}
                <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out flex items-center justify-center">
                  <img 
                    src={project.hoverImage} 
                    alt={`${project.title} hover`} 
                    className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300"
                  />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <a 
                    href={project.link}
                    className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors group/btn"
                  >
                    View Project
                    <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-black transition-colors"></div>
                </div>
              </div>
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-colors pointer-events-none"></div>
              
              {/* Hover indicator */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects