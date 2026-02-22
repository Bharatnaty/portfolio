"use client";

const skills = [
  "Next.js",
  "ReactJS",
  "Javascript",
  "HTML",
  "CSS",
  "Tailwind",
  "Redux Toolkit",
  "Shadcn",
  "n8n",
];

export default function SkillCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="flex gap-6 animate-marquee w-max">
        {/* Duplicate list for seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="min-w-[160px] bg-primary/10 px-6 py-4 rounded-2xl text-center font-semibold shadow-sm hover:scale-105 transition-transform duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}