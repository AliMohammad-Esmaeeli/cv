import Image from "next/image";
import data from "@/Data/data.json";
type propstype = {
  Lang: string;
};
export default function About(props: propstype) {
  return (
    <div>
      <div className="lalezar flex justify-center lg:justify-between items-center mx-40 my-20">
        <div className="order-1 relative">
          <svg
            className="green-svg"
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 457 432"
            width="457"
            height="432"
          >
            <title>blob-haikei-svg</title>
            <g id="Layer">
              <path
                id="Layer"
                className="s0"
                fill="#18dca4"
                d="m317.9 68.8c50 26.8 114.7 62.1 128.6 111.4 13.9 49.3-23 112.4-73 162.3-50 49.8-113.1 86.3-171.4 81.4-58.2-5-111.4-51.4-145.1-101.2-33.7-49.9-47.7-103.1-48.4-157.1-0.7-54 11.9-108.7 45.6-135.5 33.6-26.8 88.3-25.8 133.3-16.2 45.1 9.7 80.4 28 130.4 54.9z"
              />
            </g>
          </svg>
          <Image
            className="absolute bottom-10 -top-8 left-28"
            src="/image1.png"
            alt="img"
            height={200}
            width={200}
          />
        </div>
        <div className="pl-10 hidden lg:block">
          <div
            className={`flex flex-col justify-center ${
              props.Lang === "Fa" ? "items-end" : "items-center"
            }`}
          >
            <div className="text-7xl flex flex-col justify-center items-center">
              <p className="whitespace-nowrap lalezar">
                {props.Lang === "Fa" ? data.Fa.name : data.En.name}
              </p>
              <p className="lalezar">
                {props.Lang === "Fa" ? data.Fa.Lastname : data.En.Lastname}
              </p>
            </div>
            <div className="text-2xl container mt-4">
              <p className="typed lalezar">
                {props.Lang === "Fa" ? data.Fa.Programmer : data.En.Programmer}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about-me">
        <p
          className={`text-2xl md:text-3xl flex items-center ${
            props.Lang === "Fa" ? "justify-end" : "justify-start"
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
          <a
            href="/AliMohammadEsmaeeli.pdf"
            download={"Ali Mohammad Esmaeeli cv"}
            className="h-16 w-36 bg-rose-600 text-white text-lg rounded-full shadow-lg shadow-rose-400 hover:shadow-rose-500 mr-10 md:mr-20 flex justify-center items-center"
          >
            {props.Lang === "Fa" ? data.Fa.downloadCv : data.En.downloadCv}
          </a>
          <a
            className="h-16 w-36 border-blue-300 text-lg border-8 rounded-full shadow-lg shadow-blue-300 hover:shadow-blue-400 flex justify-center items-center"
            href="https://github.com/AliMohammad-Esmaeeli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.Lang === "Fa" ? data.Fa.projects : data.En.projects}
          </a>
        </div>
      </div>
    </div>
  );
}
