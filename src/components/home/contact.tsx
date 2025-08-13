"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/home/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../../locales/locales";

export default function Contact() {
  const { translations } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {translations.contact.title}
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            {translations.contact.description}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href={`mailto:${translations.contact.email}`}>
                  <p className="text-gray-600 text-wrap">{translations.contact.email}</p>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5 text-green-600" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href={`tel:${translations.contact.phone}`}>
                  <p className="text-gray-600">{translations.contact.phone}</p>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{translations.contact.location}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
