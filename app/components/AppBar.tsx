import { useEffect, useState } from "react";

const AppBar = () => {
  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Roadmap", href: "#future-services" },
    { name: "Designed For", href: "#designed-for" },
    { name: "Contact Us", href: "#contact" },
  ];

  const [active, setActive] = useState("hero");

  // Optional: Highlight active section
  useEffect(() => {
    const sections = document.querySelectorAll("section, footer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Left */}
        <div className="flex items-center gap-6">
          <div className="text-emerald-600 font-semibold text-2xl">
            Agriconomy
          </div>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-neutral-800 hover:text-neutral-500 transition font-medium ${
                active === item.href.slice(1) ? "text-emerald-600" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-emerald-50 transition">
            Sign in
          </button>
          <button className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-400 transition">
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppBar