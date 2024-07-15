import Image from "next/image";
import data from "@/Data/data.json";

type propstype = {
    Lang: string;
};

export default function About(props: propstype) {
    return (
        <div className="flex justify-center lg:justify-between items-center mx-40 my-20">
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
                    className={`flex flex-col justify-center ${props.Lang === "Fa" ? "items-end" : "items-center"
                        }`}
                >
                    <div className="text-7xl flex flex-col justify-center items-center">
                        <p className="whitespace-nowrap">
                            {props.Lang === "Fa" ? data.Fa.name : data.En.name}
                        </p>
                        <p>
                            {props.Lang === "Fa" ? data.Fa.Lastname : data.En.Lastname}
                        </p>
                    </div>
                    <div className="text-2xl container mt-4">
                        <p className="typed">
                            {props.Lang === "Fa" ? data.Fa.Programmer : data.En.Programmer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}