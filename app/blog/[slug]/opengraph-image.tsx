
import { ImageResponse } from "next/server";


// file configs
export const runtime = "edge";
export const contentType = "image/png";

// image configs
export const alt = "";
export const size = {
    width: 1200,
    height: 630,
};

const GenerateImage = async ({ params }: { params: { slug: string } }) => {
    const post = getPostData(params.slug);
    // font
    const yekanBakh = fetch(
        new URL("/public/fonts/YekanBakh.ttf", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }}
            >
                <img
                    className="size-full"
                    src={post.image}
                />
                {post.title}
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "yekanBakh",
                    data: await yekanBakh,
                    style: "normal",
                    weight: 900,
                },
            ],
        }
    );
};

export default GenerateImage;