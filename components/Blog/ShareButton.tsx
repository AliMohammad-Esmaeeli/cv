"use client"
import { Button } from '@nextui-org/react';
import { usePathname } from 'next/navigation'

interface PropsType {
    title: string,
}

export default function ShareButton(props: PropsType) {
    const pathname = usePathname();
    return (
        <Button
            className="w-full h-14 mt-6 bg-[#009f4d] py-2 px-4 rounded-md hover:bg-[#00793a] transition-colors flex-center gap-2 flex-row-reverse"
            onClick={() => {
                navigator.share({
                    url: `${location.origin + pathname}`,
                    title: props.title,
                })
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 fill-white stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
            </svg>
            <p className="text-lg text-white">اشتراک گذاری</p>
        </Button>
    )
}
