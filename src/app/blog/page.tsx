import Header from '@/components/home/header';
import BlogTitle from '@/components/blog/blogTitle';
import BreadCrumbs from '@/components/blog/BreadCrumbs';
import BlogList from '@/components/blog/blogList';
import Footer from "@/components/home/footer";




export default function BlogIndex() {

  return (
    <div className="min-h-dvh scroll-smooth overflow-x-hidden select-none appearance-none font-yekanBakh bg-white text-black dark:bg-stone-950 dark:text-white flex-center flex-col">
      <Header />

      <main className='w-[80vw] py-10'>
        <BlogTitle />
        <BreadCrumbs />
        <BlogList />
      </main >

      <Footer />
    </div >
  );
}