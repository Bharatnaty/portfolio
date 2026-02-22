import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const workflows = [
  {
    title: "Market Analyst and Tutor",
    summary:
      "Automates incoming leads from form submission and pushes to CRM with Slack notification.",
    file: "/workflows/Market-Analysis-and-Tutor.json",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center">
          n8n Workflows
        </h2>

        <div className="grid md:grid-cols-1 gap-8 justify-items-center">
          {workflows.map((workflow, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition duration-300 rounded-2xl"
            >
              <CardHeader>
                <CardTitle>{workflow.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {workflow.summary}
                </p>

                <a href={workflow.file} download>
                  <Button className="w-full cursor-pointer">
                    Download Workflow
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}