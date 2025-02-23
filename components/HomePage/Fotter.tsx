import Image from "next/image";
import Link from "next/link";
import data from "@/Data/data.json";
type propstype = {
  Lang: string;
};
export default function Fotter(props: propstype) {
  return (
    <div>
      <div>
        <Image
          className="w-screen"
          width={100}
          height={100}
          src="/layered-waves-haikei (1).svg"
          alt="footer"
        />
      </div>
      <footer className="h-96 bg-[#18dca4] text-black flex flex-col justify-center items-center overflow-y-hidden">
        <div
          id="contact"
          className="bg-white rounded-3xl shadow-xl w-72 p-8 flex flex-col justify-center items-center"
        >
          <p className="text-3xl flex items-center justify-center">
            {props.Lang === "Fa" ? data.Fa.contact : data.En.contact}
            <small className="text-red-700">
              {" "}
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
          <ul className="mt-3 grid grid-rows-3 grid-cols-2  place-items-center">
            <li className="p-1 hover:text-orange-600">
              <a
                className="flex-center"
                href="https://www.linkedin.com/in/ali-mohammad-esmaeeli-452182203/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </span>
                <span> Linkedin</span>
              </a>
            </li>
            <li className="p-1 hover:text-orange-600">
              <a
                className="flex-center"
                href="https://t.me/AliMohammad86"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="currentColor"
                    className="bi bi-telegram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                  </svg>
                </span>
                <span> Telegram</span>
              </a>
            </li>
            <li className="p-1 hover:text-orange-600">
              <a
                className="flex-center"
                href="https://github.com/AliMohammad-Esmaeeli/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </span>
                <span> Github</span>
              </a>
            </li>
            <li className="p-1 hover:text-orange-600">
              <a
                className="flex-center"
                href="tel:+989302285062"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    height={23}
                    width={23}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </span>
                <span>Telephone</span>
              </a>
            </li>
            <li className="p-1 hover:text-orange-600">
              <a
                href="mailto:alimohammadesmaeeli4456@gmail.com"
                className="flex-center"
              >
                <span className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    height={23}
                    width={23}
                  >
                    <path
                      strokeLinecap="round"
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                </span>
                <span> Email</span>
              </a>
            </li>
            <li className="p-1 hover:text-orange-600">
              <a
                className="flex-center"
                href="https://x.com/AliMoha03254987?t=9GqSqmKivggIzcHLTiTiyQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-1">
                  <svg
                    data-testid="geist-icon"
                    height={23}
                    widths={23}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                    aria-label=""
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span> Twitter</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="text-xl m-9 grid place-items-center">
          <hr className="p-2 w-60 md:w-96" />
          Copyright-© {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
