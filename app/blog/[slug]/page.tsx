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
    <article className="max-w-3xl mx-auto px-4 py-12 min-h-dvh scroll-smooth overflow-x-hidden select-none appearance-none font-yekanBakh bg-white text-black dark:bg-stone-950 dark:text-white">
      <header className="mb-8 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <time className="text-muted-foreground">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
        <Image
        className='rounded-lg w-auto h-36'
          src={post.image}
          alt={post.title}
          height={100}
          width={100}
        />
      </header>


      <BreadCrumbs />

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <Markdown>{post.content}</Markdown>
      </div>

      <ShareButton title={post.title} />
    </article>
  );
}