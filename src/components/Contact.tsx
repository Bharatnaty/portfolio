import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-muted/30"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold">
          Contact Me
        </h2>

        <p className="text-muted-foreground text-sm md:text-base">
          I&apos;m open to frontend engineering roles, performance optimization
          projects, and workflow automation opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* Resume Download */}
          <a href="/resume/Bharat_Natrayn_UI_DEVELOPER.pdf" download>
            <Button size="lg" className="w-full sm:w-auto cursor-pointer">
              Download Resume
            </Button>
          </a>

          {/* Email Button */}
          <a href="mailto:bharatnatrayn00@gmail.com">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto cursor-pointer"
            >
              Email Me
            </Button>
          </a>

        </div>
      </div>
    </section>
  );
}