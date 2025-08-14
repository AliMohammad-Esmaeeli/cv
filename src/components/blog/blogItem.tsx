import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

interface BlogItemType {
    slug: string;
    image: string;
    date: string;
    title: string;
    excerpt: string;
}

export default function BlogItem(props: BlogItemType) {
    return (
        <>
            <Link href={`/blog/${props.slug}`}>
                <div className="transition-colors border-2 border-[#f7efe3] rounded-2xl px-8 py-4 shadow-sm hover:shadow overflow-hidden flex-between flex-row rtl:flex-row-reverse relative">
                    <div className="flex justify-center items-start rtl:items-end flex-col">
                        <div>
                            <p className="text-lg">
                                {props.title}
                            </p>
                        </div>
                        <time>
                            {format(new Date(props.date), 'MMMM d, yyyy')}
                        </time>
                        <p className="mt-2 truncate">{props.excerpt}</p>
                    </div>
                    <Image
                        className="h-full w-auto absolute right-0"
                        src={props.image}
                        alt={props.title}
                        height={1000}
                        width={1000}
                    />
                </div>
            </Link>
        </>
    )
}
