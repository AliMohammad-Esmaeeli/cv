import { getPostData, getAllPostSlugs } from '@/lib/blog';
import Markdown from 'markdown-to-jsx';
import { format } from 'date-fns';
import ShareButton from '@/src/components/blog/ShareButton';
import BreadCrumbs from '@/src/components/blog/BreadCrumbs';
import Image from 'next/image';

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 min-h-dvh scroll-smooth overflow-x-hidden select-none appearance-none font-yekanBakh bg-white text-black dark:bg-stone-950 dark:text-white flex-center flex-col">
      <header className="relative w-full">
        <span className='flex flex-col justify-center items-end rounded-[0.875rem] px-8 py-11 bg-white bg-opacity-20 backdrop-blur-lg absolute bottom-5 right-4 h-10 w-[50%] truncate overflow-hidden'>
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
      </header>


      <BreadCrumbs />

      <div className="prose prose-lg dark:prose-invert max-w-none leading-loose rtl">
        <Markdown>{post.content}</Markdown>
      </div>

      <ShareButton title={post.title} />
    </article>
  );
}