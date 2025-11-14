import { BlogList } from "@/components/blogs/blog-list";
import { Container } from "@/components/container";
import { getAllBlogPosts } from "@/lib/markdown";

export default function HomePage() {
  const posts = getAllBlogPosts();

  return (
    <main className="py-12">
      <Container className="space-y-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">My Writings</h2>
          <p className="text-muted-foreground">
            I share my thoughts and experiences.
          </p>
        </div>
        <BlogList posts={posts} />
      </Container>
    </main>
  );
}
