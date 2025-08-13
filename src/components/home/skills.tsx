"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/home/ui/card";
import { Badge } from "@/components/home/ui/badge";
import { useLanguage } from "../../locales/locales";

const skillsData = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Vue.js",
    "HTML5",
    "CSS3",
  ],
  ai: [
    "Python Data Stack",
    "TensorFlow Fundamentals",
    "Data Processing"
  ],
  tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Linux"],
};

export default function Skills() {
  const { translations } = useLanguage();

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {translations.skills.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skillsData).map(([category, skills]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {translations.skills.categories[category]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
