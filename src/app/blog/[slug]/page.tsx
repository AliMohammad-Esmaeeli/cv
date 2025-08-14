import { getPostData, getAllPostSlugs } from '@/lib/blog';
import MarkdownReader from "@/components/blog/markdownReader";
import { format } from 'date-fns';
import Header from '@/components/home/header';
import Footer from '@/components/home/footer';
import Image from 'next/image';
import BreadCrumbs from '@/components/blog/BreadCrumbs';
import ShareButton from '@/components/blog/ShareButton';

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  return (
    <div className="min-h-dvh scroll-smooth overflow-x-hidden select-none appearance-none font-yekanBakh bg-white text-black dark:bg-stone-950 dark:text-white flex-center flex-col">
      <Header />

      <main className='max-w-3xl py-10 flex-center flex-col'>
        {/* Header */}
        <div className="relative w-full">
          <span className='flex flex-col rtl:flex-col-reverse justify-center items-end rounded-[0.875rem] px-8 py-11 bg-opacity-20 backdrop-blur-lg absolute bottom-5 right-4 h-10 w-[40%] truncate overflow-hidden'>
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 text-white">{post.title}</h1>
            <time className="text-muted-foreground text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </span>
          <Image
            className='rounded-[1.875rem] w-full h-auto'
            src={post.image}
            alt={post.title}
            height={1000}
            width={1000}
          />
        </div>
        {/* BreadCrumbs */}
        <BreadCrumbs />
        {/* Main */}
        <div className="prose prose-lg dark:prose-invert max-w-none leading-loose rtl">
          <MarkdownReader content={post.content} />
        </div>
        {/* Share Button */}
        <ShareButton title={post.title} />
      </main>

      <Footer />
    </div>
  );
}