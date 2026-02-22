"use client";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Portfolio</h1>

        <nav className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition">
            About
          </a>
          <a href="#skills" className="hover:text-primary transition">
            Skills
          </a>
          <a href="#workflow" className="hover:text-primary transition">
            n8n Workflow
          </a>
          <a href="#contact" className="hover:text-primary transition">
  Contact
</a>
        </nav>
      </div>
    </header>
  );
}