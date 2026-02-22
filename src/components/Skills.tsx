import SkillCarousel from "./SkillCarousel";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center">
          Skills
        </h2>

        <SkillCarousel />
      </div>
    </section>
  );
}