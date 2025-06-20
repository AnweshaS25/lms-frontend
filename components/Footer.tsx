/* export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
      © 2025 My LMS. All rights reserved.
    </footer>
  );
} */

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 mt-auto text-center shadow-inner">
      <div className="text-sm md:text-base">
        © {new Date().getFullYear()} <span className="font-semibold text-white">My LMS</span>. All rights reserved.
      </div>
      <div className="mt-2 text-xs text-gray-400">
        Built with ❤️ using React and Tailwind CSS
      </div>
    </footer>
  );
}

