"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/home/ui/card";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "../../locales/locales";

export default function Education() {
  const { translations } = useLanguage();

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            {translations.education.title}
          </h2>
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="text-xl">{translations.education.degree}</h3>
                  <p className="text-green-600 font-medium">
                    {translations.education.university}
                  </p>
                </div>
              </CardTitle>
              <p className="text-sm text-gray-500">
                {translations.education.period}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {translations.education.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
