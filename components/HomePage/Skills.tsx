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
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-red-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl p-10 m-5 flex justify-center items-center">
              <svg
                className="h-28 w-28"
                xmlns="http://www.w3.org/2000/svg"
                width="362.8"
                height="411.4"
                viewBox="0 0 362.8 411.4"
              >
                <g id="html" transform="translate(-74.6 -100.6)">
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M107.6,471l-33-370.4H437.4l-33,370.2L255.7,512"
                    fill="#e44d26"
                  />
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M256,480.5V131H404.3L376,447"
                    fill="#f16529"
                  />
                  <path
                    id="Path_4"
                    data-name="Path 4"
                    d="M142,176.3H256v45.4H191.8l4.2,46.5h60v45.3H154.4m2,22.8H202l3.2,36.3L256,386.2v47.4l-93.2-26"
                    fill="#ebebeb"
                  />
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M369.6,176.3H255.8v45.4H365.4m-4.1,46.5H255.8v45.4h56l-5.3,59-50.7,13.6v47.2l93-25.8"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-blue-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-center items-center">
              <svg
                className="w-28 h-28"
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#264de4"
                  d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"
                />
                <path
                  fill="#2965f1"
                  d="M405.388 431.408l35.148-393.73H256v435.146z"
                />
                <path
                  fill="#ebebeb"
                  d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
                />
                <path
                  fill="#fff"
                  d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
                />
              </svg>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-orange-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-center items-center">
              <svg
                className="w-28 h-28 rounded-2xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 630 630"
              >
                <rect width="630" height="630" fill="#f7df1e" />
                <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
              </svg>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-indigo-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-center items-center">
              <svg
                className="w-28 h-28 rounded-2xl"
                fill="none"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="#3178c6" height="512" rx="50" width="512" />
                <rect fill="#3178c6" height="512" rx="50" width="512" />
                <path
                  clip-rule="evenodd"
                  d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
                  fill="#fff"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-purple-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-center items-center">
              <Image
                src="/bootstrap.png"
                height={100}
                width={100}
                alt="Bootstrap"
              />
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-purple-950 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-center items-center">
              <svg
                className="w-28 h-28 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 54 33"
              >
                <g clip-path="url(#prefix__clip0)">
                  <path
                    fill="#38bdf8"
                    fill-rule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    clip-rule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="prefix__clip0">
                    <path fill="#fff" d="M0 0h54v32.4H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-green-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-center items-center">
              <svg
                width="100%"
                height="100%"
                viewBox="-10.5 -9.45 21 18.9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm mr-0 flex origin-center transition-all ease-in-out text-zinc-300"
              >
                <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                <g stroke="currentColor" stroke-width="1" fill="none">
                  <ellipse rx="10" ry="4.5"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                  <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                </g>
              </svg>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-violet-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-center items-center">
              <svg
                aria-label="Next.js logotype"
                height="18"
                role="img"
                viewBox="0 0 394 79"
              >
                <path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"></path>
                <path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"></path>
                <path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"></path>
                <path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"></path>
                <path
                  clip-rule="evenodd"
                  d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
                  fill-rule="evenodd"
                ></path>
                <path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"></path>
                <path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"></path>
                <path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"></path>
              </svg>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-fuchsia-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-center items-center">
              <svg
                width="410"
                height="404"
                viewBox="0 0 410 404"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
                  fill="url(#paint1_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="6.00017"
                    y1="32.9999"
                    x2="235"
                    y2="344"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#41D1FF" />
                    <stop offset="1" stop-color="#BD34FE" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="194.651"
                    y1="8.81818"
                    x2="236.076"
                    y2="292.989"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFEA83" />
                    <stop offset="0.0833333" stop-color="#FFDD35" />
                    <stop offset="1" stop-color="#FFA800" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-violet-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-center items-center">
              <div className="grid place-items-center">
                <svg
                  width={80}
                  height={80}
                  viewBox="-10.5 -9.45 21 18.9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm mr-0 flex origin-center transition-all ease-in-out text-zinc-300"
                >
                  <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                  <g stroke="currentColor" stroke-width="1" fill="none">
                    <ellipse rx="10" ry="4.5"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                  </g>
                </svg>
                <p className="text-xl font-sans font-semibold text-black mt-1 whitespace-nowrap">
                  React Native
                </p>
              </div>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-fuchsia-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-center items-center">
              <Image src={"/docker1.png"} height={100} width={100} alt="Docker" />
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-purple-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-center items-center">
              <svg
                className="w-28 h-28"
                id="Group_1"
                data-name="Group 1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="136.02"
                height="136.02"
                viewBox="0 0 136.02 136.02"
              >
                <defs>
                  <radialGradient
                    id="radial-gradient"
                    cx="0.5"
                    cy="0.5"
                    r="0.5"
                    gradientTransform="matrix(1, 0, 0, -1, 0, 0.897)"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#fff" stop-opacity="0.102" />
                    <stop offset="1" stop-color="#fff" stop-opacity="0" />
                  </radialGradient>
                </defs>
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M31.65,109.5,8.38,86.23A15.779,15.779,0,0,1,3.91,75.49,17.977,17.977,0,0,1,5.7,69.23L27.18,24.49Z"
                  transform="translate(-3.91 -1.22)"
                  fill="#01579b"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M111.3,28.96,88.03,5.69C86,3.65,81.77,1.22,78.19,1.22a16.505,16.505,0,0,0-8.05,1.79L27.19,24.49Z"
                  transform="translate(-3.91 -1.22)"
                  fill="#40c4ff"
                />
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M59.39,137.24h56.38V113.08L73.71,99.65,35.23,113.08Z"
                  transform="translate(-3.91 -1.22)"
                  fill="#40c4ff"
                />
                <path
                  id="Path_7"
                  data-name="Path 7"
                  d="M27.18,96.97c0,7.18.9,8.94,4.47,12.53l3.58,3.58h80.54L76.4,68.34,27.18,24.49Z"
                  transform="translate(-3.91 -1.22)"
                  fill="#29b6f6"
                />
                <path
                  id="Path_8"
                  data-name="Path 8"
                  d="M98.77,24.48H27.18l88.59,88.59h24.16V57.59L111.29,28.95C107.27,24.92,103.7,24.48,98.77,24.48Z"
                  transform="translate(-3.91 -1.22)"
                  fill="#01579b"
                />
                <path
                  id="Path_9"
                  data-name="Path 9"
                  d="M32.55,110.39c-3.58-3.59-4.47-7.13-4.47-13.42V25.38l-.89-.89V96.97c-.01,6.29-.01,8.03,5.36,13.42l2.68,2.68h0Z"
                  transform="translate(-3.91 -1.22)"
                  fill="#fff"
                  opacity="0.2"
                />
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M139.04,56.7v55.48H114.88l.89.9h24.16V57.59Z"
                  transform="translate(-3.91 -1.22)"
                  fill="#263238"
                  opacity="0.2"
                />
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M111.3,28.96c-4.44-4.44-8.07-4.47-13.42-4.47H27.19l.89.89h69.8c2.67,0,9.41-.45,13.42,3.58Z"
                  transform="translate(-3.91 -1.22)"
                  fill="#fff"
                  opacity="0.2"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M139.04,56.7,111.3,28.96,88.03,5.69C86,3.65,81.77,1.22,78.19,1.22a16.505,16.505,0,0,0-8.05,1.79L27.19,24.49,5.71,69.23a18.1,18.1,0,0,0-1.79,6.26A15.844,15.844,0,0,0,8.39,86.23l21.44,21.29a25.838,25.838,0,0,0,1.82,1.98l.89.89,2.68,2.68,23.27,23.27.89.89h56.37V113.07h24.16V57.59Z"
                  transform="translate(-3.91 -1.22)"
                  opacity="0.2"
                  fill="url(#radial-gradient)"
                />
              </svg>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-blue-900 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-cnter items-center">
              <Image
                className="h-28 w-28"
                height={100}
                width={100}
                src="/flutter.svg"
                alt="Flutter"
              />
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-yellow-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-git text-red-400 w-28 h-28"
                viewBox="0 0 16 16"
              >
                <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457" />
              </svg>
            </div>
          </Tilt>
        </SwiperSlide>
        <SwiperSlide>
          <Tilt options={defaultOptions}>
            <div className="bg-emerald-400 w-36 h-36 md:w-44 md:h-44 rounded-3xl  p-10 m-5">
              <svg width="98" height="96" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  fill="#24292f"
                />
              </svg>
            </div>
          </Tilt>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
