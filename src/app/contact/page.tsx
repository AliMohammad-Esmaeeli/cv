import socialLinks from "@/data/socialLinks.json";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-dvh w-screen scroll-smooth overflow-x-hidden select-none appearance-none bg-[#faf3ea] text-black font-yekanBakh flex-center flex-col relative">
      <ul className="grid grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-20 justify-center items-center w-1/2 h-full">
        {socialLinks.socialLinks.map((link: any, index: any) => (
          <i className={link.icon} key={link.name} aria-hidden="true">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center"
            >
              <Image
                alt={link.name}
                className="block group-hover:hidden size-10"
                src={`/images/svgs/${link.name}.svg`}
                height={100}
                width={100}
              />
              <Image
                alt={link.name}
                className="hidden group-hover:block size-10"
                src={`/images/svgs/${link.name}-colorfull.svg`}
                height={100}
                width={100}
              />
              <span className="hidden group-hover:block text-sm text-white bg-black px-3 py-2 rounded-md absolute -translate-x-2 -translate-y-24  after:rotate-45 after:absolute after:!bg-black after:size-4 after:rounded-sm after:top-6 after:right-6 after:-z-50">
                {link.persionName}
              </span>
            </a>
          </i>
        ))}
        <div className="size-16 bg-purple-400 blur-xl ring-purple-400/50 shadow-2xl shadow-purple-400/5 rounded-full absolute"></div>
        <div className="size-16 bg-red-400 blur-xl ring-purple-400/50 shadow-2xl shadow-purple-400/5 rounded-full absolute right-1/5 bottom-1/3"></div>
      </ul>
    </div>
  );
}
