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
    <aside className="bg-black-900 text-black-200 w-64 min-h-screen p-6 space-y-4 hidden lg:block">
      <h2 className="text-lg font-semibold mb-4">LMS</h2>
      <nav className="space-y-2 text-sm">
        <a href="#" className="block hover:bg-blue-800 px-3 py-2 rounded">Dashboard</a>
        <a href="#" className="block hover:bg-blue-800 px-3 py-2 rounded">Courses</a>
        <a href="#" className="block hover:bg-blue-800 px-3 py-2 rounded">Profile</a>
        
      </nav>
    </aside>
  );
}
