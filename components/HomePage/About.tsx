import data from "@/Data/data.json";
import { Button } from "@nextui-org/react";

type propstype = {
  Lang: string;
};

export default function About(props: propstype) {
  return (
    <div id="about-me">
      <p
        className={`text-2xl md:text-3xl flex items-center ${props.Lang === "Fa" ? "justify-end" : "justify-start"
          } mt-10 mx-5 md:mx-20`}
      >
        {props.Lang === "Fa" ? data.Fa["about me"] : data.En["about me"]}
        <small className="text-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
            />
          </svg>
        </small>
      </p>
      <br />
      {props.Lang === "Fa" ? (
        <div
          dir="rtl"
          className="text-xl md:text-2xl mx-5 md:mx-20 leading-10"
        >
          <p className="mt-2">
            سلااام👋،
            <br />
            من علی محمد اسماعیلی؛ طراح و برنامه نویس وب حرفه ای هستم. من علاقه
            زیادی به طراحی و توسعه وبسایت های خلاقانه، زیبا و کاربردی دارم. من
            تجربه کار با تکنولوژی های مختلف وب از جمله HTML, CSS, JavaScript,
            React و ... را دارم. من همچنین با اصول SEO, UI/UX, Responsive
            Design و Web Security آشنا هستم.👨‍💻
          </p>
          <br />
          <p className="mt-2">
            در این وبسایت، شما میتوانید درباره من ،
            <a
              className="text-blue-700"
              href="https://github.com/AliMohammad-Esmaeeli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              پروژه های من
            </a>
            ،
            <a href="#skills" className="text-blue-700">
              {" "}
              مهارت های من
            </a>{" "}
            و{" "}
            <a href="#contact" className="text-blue-700">
              راه های تماس با من
            </a>{" "}
            بیشتر بدانید. من همواره به دنبال یادگیری چیزهای جدید، حل چالش های
            جذاب و همکاری با افراد خلاق هستم.😊✌
          </p>
          <br />
          <p className="mt-2">
            اگر علاقه مند به همکاری با من هستید، لطفا از طریق{" "}
            <a href="#contact" className="text-blue-700">
              شبکه های اجتماعی یا تماس با من
            </a>{" "}
            در ارتباط باشید. منتظر پیام شما هستم.🌸
          </p>
          <br />
        </div>
      ) : (
        <div className="text-xl md:text-2xl mx-5 md:mx-20 leading-10">
          <p className="mt-2">
            Hello👋
            <br />
            My name is Ali Mohammad Esmaeili and I am a web programmer. I have
            a great interest in designing and developing creative, beautiful,
            and functional websites. I have experience working with various
            web technologies, including HTML, CSS, JavaScript, React, and ...
            . I am also familiar with SEO principles, UI/UX, Responsive
            Design, and Web Security. 👨‍💻
          </p>
          <br />
          <p className="mt-2">
            On this website, you can learn more about me,
            <a
              className="text-blue-700"
              href="https://github.com/AliMohammad-Esmaeeli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              my projects
            </a>
            ,{" "}
            <a href="#skills" className="text-blue-700">
              my skills
            </a>{" "}
            , and{" "}
            <a href="#contact" className="text-blue-700">
              ways to contact me
            </a>
            . I am always looking to learn new things, solve interesting
            challenges, and collaborate with creative individuals. 😊✌
          </p>
          <br />
          <p className="mt-2">
            If you are interested in collaborating with me as well, please get
            in touch with me through the contact{" "}
            <a href="#contact" className="text-blue-700">
              information or social networks
            </a>{" "}
            below. I look forward to your message. 🌸
          </p>
          <br />
        </div>
      )}
      <div className="my-10 flex justify-center items-center">
        <Button className="h-14 w-36 bg-rose-600 text-white text-lg rounded-[0.875rem] shadow-lg shadow-rose-500 hover:shadow-rose-400 mr-10 md:mr-20 flex justify-center items-center">
          <a
            href="/AliMohammadEsmaeeli.pdf"
            download={"Ali Mohammad Esmaeeli cv"}
          >
            {props.Lang === "Fa" ? data.Fa.downloadCv : data.En.downloadCv}
          </a>
        </Button>
        <Button className="h-14 w-36 text-lg text-white rounded-[0.875rem] bg-green-500 shadow-lg shadow-green-500 hover:shadow-green-400 flex justify-center items-center">
          <a
            href="https://github.com/AliMohammad-Esmaeeli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.Lang === "Fa" ? data.Fa.projects : data.En.projects}
          </a>
        </Button>
      </div>
    </div>
  );
}
