/* export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">My LMS</div>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">
          Dashboard
        </a>
        <a href="#" className="hover:underline">
          Courses
        </a>
        <a href="#" className="hover:underline">
          Profile
        </a>
      </nav>
    </header>
  );
} */

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-extrabold tracking-wide">My LMS</div>
      <nav className="space-x-6 text-lg">
        <a
          href="#"
          className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded transition duration-200"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded transition duration-200"
        >
          Courses
        </a>
        <a
          href="#"
          className="hover:bg-white hover:text-indigo-700 px-3 py-1 rounded transition duration-200"
        >
          Profile
        </a>
      </nav>
    </header>
  );
}

