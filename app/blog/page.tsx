import { getSortedPostsData } from '@/lib/blog';
import Link from 'next/link';
import { format } from 'date-fns';
import BreadCrumbs from '@/components/Blog/BreadCrumbs';
import Image from 'next/image';


export default function BlogIndex() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-dvh scroll-smooth overflow-x-hidden select-none appearance-none font-yekanBakh bg-white text-black dark:bg-stone-950 dark:text-white">
      <header className='flex justify-center items-center flex-col'>
        <h1 className="text-4xl font-bold mb-8">وبلاگ</h1>
        <span className='flex justify-center items-center gap-1'>
          <p className="text-lg font-sans">This is my persion weblog</p>
          <p className="font-iosEmoji">🖐😁</p>
        </span>
      </header>

      <BreadCrumbs />

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="transition-colors border-2 border-[#f7efe3] rounded-2xl px-8 py-4 shadow-sm hover:shadow overflow-hidden flex justify-between items-center relative">
              <div>
                <div>{post.title}</div>
                <div>
                  <time className="text-muted-foreground">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </time>
                  <p className="mt-2 truncate">{post.excerpt}</p>
                </div>
              </div>
              <Image
                className="h-full w-auto absolute right-0"
                src={post.image}
                alt={post.title}
                height={1000}
                width={1000}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}