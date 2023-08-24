import Nav from "@/components/main page/Nav";
import About from "@/components/main page/About";
import Menu from "@/components/main page/menu";
import Fotter from "@/components/main page/Fotter";
export default function Home() {
  return (
    <div
      className="bg-white text-black dark:bg-stone-950 dark:text-white "
    >
      <Nav Lang="Fa" />
      <About Lang="Fa" />
      <Menu Lang="Fa" />
      <Fotter Lang="Fa" />
    </div>
  );
}
