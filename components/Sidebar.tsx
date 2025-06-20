/* export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 bg-gray-100 p-4">
      <ul className="space-y-2">
        <li>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Overview
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 hover:bg-gray-200">
            My Courses
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 hover:bg-gray-200">
            Settings
          </a>
        </li>
      </ul>
    </aside>
  );
} */

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 bg-gray-50 border-r border-gray-200 p-6 shadow-md min-h-screen">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Menu</h2>
      <nav className="space-y-3">
        <a
          href="#"
          className="block px-4 py-2 rounded-md text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition duration-200 font-medium"
        >
          Overview
        </a>
        <a
          href="#"
          className="block px-4 py-2 rounded-md text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition duration-200 font-medium"
        >
          My Courses
        </a>
        <a
          href="#"
          className="block px-4 py-2 rounded-md text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition duration-200 font-medium"
        >
          Settings
        </a>
      </nav>
    </aside>
  );
}


