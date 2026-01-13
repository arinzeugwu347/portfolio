import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

export default function SocialFooter() {
  return (
    <footer className="py-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-center">
      <div className="flex justify-center gap-6 text-2xl">
        <a href="#" target="_blank" className="hover:text-blue-500 transition"><FaGlobe /></a>
        <a href="https://github.com/" target="_blank" className="hover:text-blue-500 transition"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-500 transition"><FaLinkedin /></a>
        <a href="https://twitter.com/" target="_blank" className="hover:text-blue-500 transition"><FaTwitter /></a>
        <a href="https://instagram.com/" target="_blank" className="hover:text-blue-500 transition"><FaInstagram /></a>
      </div>
      <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Arinze Ugwu. All rights reserved.
      </p>
    </footer>
  );
}
