"use client"
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs() {
    const pathname = usePathname();
    // Split the pathname into segments
    const segments = pathname.split('/').filter(segment => segment);

    // Create breadcrumbs
    const breadcrumbs = segments.map((segment, index) => {
        const link = '/' + segments.slice(0, index + 1).join('/');
        return { name: segment, link };
    });

    return (
        <div className="bg-[#f7efe3] rounded-2xl h-14 w-full px-8 py-4 my-4 flex justify-start items-center shadow-sm hover:shadow">
            <Breadcrumbs>
                <BreadcrumbItem>
                    <Link href={"/"}>
                        <p className="text-lg">Home</p>
                    </Link>
                </BreadcrumbItem>
                {breadcrumbs.map((breadcrumb, index) => (
                    <BreadcrumbItem key={index}>
                        <Link href={breadcrumb.link}>
                            <p className="text-lg">{breadcrumb.name}</p>
                        </Link>
                    </BreadcrumbItem>
                ))}
            </Breadcrumbs>
        </div>
    )
}