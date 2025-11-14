import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/container";
import { getAllBlogSlugs, getBlogPostBySlug, mdxOptions } from "@/lib/markdown";
import { useMDXComponents } from "@/lib/markdown/mdx-components";
import { generateSEO } from "@/lib/seo";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return generateSEO({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    image: post.frontmatter.image,
  });
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const components = useMDXComponents({});

  return (
      <main className="py-12">
        <Container>
          <article className="space-y-8">
            <header className="space-y-2">
              <h1 className="text-3xl font-bold">{post.frontmatter.title}</h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="inline-flex items-center gap-1">
                  <Calendar className="size-4" />
                  <time dateTime={post.frontmatter.date}>
                    {new Date(post.frontmatter.date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </time>
                </div>
                <div className="inline-flex items-center gap-1">
                  <Clock className="size-4" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </header>

            {post.frontmatter.image && (
              <div className="overflow-hidden rounded border">
                <Image
                  src={post.frontmatter.image}
                  alt={post.frontmatter.title}
                  className="w-full h-auto object-cover"
                  loading="eager"
                  width={1200}
                  height={630}
                  priority
                />
              </div>
            )}

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <MDXRemote
                source={post.content}
                components={components}
                options={mdxOptions}
              />
            </div>
          </article>
        </Container>
      </main>
  );
}
