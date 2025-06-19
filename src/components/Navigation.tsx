import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/about", label: "О нас" },
    { path: "/contacts", label: "Контакты" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-sky-600">
            Сити Дент
          </Link>

          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-sky-600 ${
                  location.pathname === item.path
                    ? "text-sky-600 border-b-2 border-sky-600 pb-1"
                    : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
