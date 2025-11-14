import Link from "next/link";
import type { BlogPost } from "@/lib/markdown";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-6 text-center text-muted-foreground">
        <p>No blog posts yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article key={post.slug} className="group">
          <Link href={`/blogs/${post.slug}`} className="block">
            <h2 className="text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-muted-foreground">
              {post.frontmatter.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {post.frontmatter.description}
            </p>
          </Link>
        </article>
      ))}
    </div>
  );
}
