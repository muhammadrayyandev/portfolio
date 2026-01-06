const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              © 2025 Design By 
               <span className="text-[#0EA5E9] font-semibold"> Muhammad Rayyan Amjad</span>.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.behance.net/muhammadrayyan17" className="text-gray-400 hover:text-[#0EA5E9] transition-colors">
              Behance
            </a>
            <a href="https://www.linkedin.com/in/rayyan003/" className="text-gray-400 hover:text-[#0EA5E9] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer