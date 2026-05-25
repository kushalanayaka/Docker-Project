import Link from "next/link";
import { Blog } from "../../types/blog";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  return (
    <Link href={`/blogs/${blog.id}`}>

      <div className="border border-white/10 bg-white/5 overflow-hidden hover:border-white/30 transition-all duration-300">

        {blog.imageUrl && (
          <div className="aspect-video overflow-hidden">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="p-6">

          <p className="text-sm text-white/40 mb-4">
            {new Date(blog.createdAt).toDateString()}
          </p>

          <h2 className="text-3xl font-bold leading-tight">
            {blog.title}
          </h2>

          <p className="text-white/60 mt-4 line-clamp-3">
            {blog.content}
          </p>

        </div>

      </div>

    </Link>
  );
}