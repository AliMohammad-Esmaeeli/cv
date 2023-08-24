import Nav from "@/components/main page/Nav";
import About from "@/components/main page/About";
import Menu from "@/components/main page/menu";
import Fotter from "@/components/main page/Fotter";
import { mode, setMode } from "@/components/main page/changeMode";
export default function page() {
  return (
    <div
      className={`${
        mode === "Dark" ? "dark:bg-stone-950 dark:text-white" : ""
      } lalezar`}
    >
      <Nav setMode={setMode} Lang="En" />
      <About Lang="En" />
      <Menu Lang="En" />
      <Fotter Lang="En" />
    </div>
  );
}
