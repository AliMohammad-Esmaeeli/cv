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
        <span className='flex justify-center items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
          </svg>
          <p className="text-lg">This is my persion weblog🖐😁</p>
        </span>
      </header>

      <BreadCrumbs />

      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="transition-colors border-2 border-[#f7efe3] rounded-2xl px-8 py-4 shadow-sm hover:shadow overflow-hidden flex justify-between items-center">
              <div>
                <div>{post.title}</div>
                <div>
                  <time className="text-muted-foreground">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </time>
                  <p className="mt-2">{post.excerpt}</p>
                </div>
              </div>
              <Image
                src={post.image}
                alt={post.title}
                height={100}
                width={100}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}