"use client";
import { useLanguage } from '@/locales/locales';

export default function BlogTitle() {
    const { translations, language } = useLanguage();

    return (
        <>
            <span className={`flex-center flex-row rtl:flex-row-reverse text-4xl font-bold my-8 text-center ${language === "fa" ? "font-yekanBakh" : "font-inter"}`}>
                <p>{translations.blog.blog}</p>
                <p className='font-iosEmoji'>✌❤</p>
            </span>

        </>
    )
}
