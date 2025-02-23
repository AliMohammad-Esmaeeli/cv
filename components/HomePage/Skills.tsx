"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Tilt } from "react-tilt";

type propstype = {
  Lang: string;
};

export default function Skills(props: propstype) {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  const skills = [
    {
      skill: "html",
      color: "bg-red-400",
      image: "/images/svgs/html.svg",
    },
    {
      skill: "css",
      color: "bg-blue-400",
      image: "/images/svgs/css.svg",
    },
    {
      skill: "js",
      color: "bg-orange-400",
      image: "/images/svgs/js.svg",
    },
    {
      skill: "ts",
      color: "bg-indigo-400",
      image: "/images/svgs/ts.svg",
    },
    {
      skill: "bootstrap",
      color: "bg-purple-400",
      image: "/images/bootstrap.png",
    },
    {
      skill: "tailwindcss",
      color: "bg-purple-950",
      image: "/images/svgs/tailwindcss.svg",
    },
    {
      skill: "react",
      color: "bg-green-400",
      image: "/images/svgs/react.svg",
    },
    {
      skill: "nextjs",
      color: "bg-violet-400",
      image: "/images/nextjs.png",
    },
    {
      skill: "docker",
      color: "bg-fuchsia-400",
      image: "/images/docker.png",
    },
    {
      skill: "git",
      color: "bg-yellow-400",
      image: "/images/svgs/git.svg",
    },
    {
      skill: "github",
      color: "bg-emerald-400",
      image: "/images/svgs/github.svg",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
          1536: {
            slidesPerView: 6,
          },
        }}
      >
        {skills.map((i, e) => {
          return <SwiperSlide key={e}>
            <Tilt options={defaultOptions}>
              <div className={`${i.color} w-36 h-36 md:w-44 md:h-44 rounded-3xl p-10 m-5 flex-center`}>
                <Image
                  src={i.image}
                  alt={i.skill}
                  height={100}
                  width={100}
                />
              </div>
            </Tilt>
          </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}
