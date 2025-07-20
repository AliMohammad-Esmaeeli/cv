"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/home/ui/card";
import { useLanguage } from "../../locales/locales";

export default function Experience() {
  const { translations } = useLanguage();

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {translations.experience.title}
          </h2>
          <div className="space-y-6">
            {translations.experience.jobs.map((job: any, index: number) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="text-xl">{job.title}</span>
                    <span className="text-sm text-gray-500 font-normal">
                      {job.period}
                    </span>
                  </CardTitle>
                  <p className="text-blue-600 font-medium">{job.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
