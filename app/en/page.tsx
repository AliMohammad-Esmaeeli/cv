import Nav from "@/components/main page/Nav";
import About from "@/components/main page/About";
import Menu from "@/components/main page/menu";
import Fotter from "@/components/main page/Fotter";
export default function page() {
  return (
    <div className="bg-white text-black dark:bg-stone-950 dark:text-white overflow-x-hidden">
      <Nav Lang="En" />
      <About Lang="En" />
      <Menu Lang="En" />
      <Fotter Lang="En" />
    </div>
  );
}
