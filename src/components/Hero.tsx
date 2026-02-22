export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold">
          Bharat Natrayn
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Frontend Engineer specialized in Next.js performance optimization,
          scalable architecture, and workflow automation using n8n.
        </p>
      </div>
    </section>
  );
}