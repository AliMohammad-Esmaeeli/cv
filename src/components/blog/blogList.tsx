import { getSortedPostsData } from '@/lib/blog';
import BlogItem from './blogItem';


export default function BlogList() {
    const posts = getSortedPostsData();

    return (
        <>
            <div className="grid gap-6">
                {posts.map((post) => (
                    <BlogItem
                        key={post.slug}
                        slug={post.slug}
                        image={post.image}
                        title={post.title}
                        date={post.date}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
        </>
    )
}
