import { Linkedin, Instagram, Github } from "lucide-react";
// import Behance from "./behance";
import { SiBehance } from "@icons-pack/react-simple-icons";

const MediaPlatform = () => {
  return (
    <div className="flex justify-center gap-6 mt-10">
      <a
        href="https://www.linkedin.com/in/rayyan003/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-900 text-white rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md"
      >
        <Linkedin size={24} />
      </a>

      <a
        href="https://www.behance.net/muhammadrayyan17"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-900 text-white rounded-full hover:bg-pink-700 transition-all duration-300 shadow-md">
        <SiBehance  />
      </a>

      <a
        href="https://www.instagram.com/m_rayyan_003/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-900 text-white rounded-full hover:bg-pink-600 transition-all duration-300 shadow-md"
      >
        <Instagram size={24} />
      </a>

    </div>
  );
};

export default MediaPlatform;
