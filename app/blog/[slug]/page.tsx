import { getPostData, getAllPostSlugs } from '@/lib/blog';
import Markdown from 'markdown-to-jsx';
import { format } from 'date-fns';
import ShareButton from '@/components/Blog/ShareButton';
import BreadCrumbs from '@/components/Blog/BreadCrumbs';
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
        <span className='flex flex-col justify-center items-end rounded-[0.875rem] p-10 py-11 bg-white bg-opacity-20 backdrop-blur-lg absolute bottom-5 right-4 h-10 w-[40%]'>
          <h1 className="text-lg font-bold mb-2 text-white">{post.title}</h1>
          <time className="text-muted-foreground text-white text-base">
            {format(new Date(post.date), 'MMMM d, yyyy')}
          </time>
        </span>
        <Image
          className='rounded-[1.875rem] w-full h-96 '
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