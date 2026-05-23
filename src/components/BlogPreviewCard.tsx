import Image from "next/image";
import Link from "next/link";
import {
  getBlogAuthor,
  getDisplayPracticeArea,
  type BlogPost,
} from "@/data/blogs";

type BlogPreviewCardProps = {
  post: BlogPost;
  priority?: boolean;
  className?: string;
};

export function BlogPreviewCard({
  post,
  priority = false,
  className = "",
}: BlogPreviewCardProps) {
  const author = getBlogAuthor(post);
  const displayPracticeArea = getDisplayPracticeArea(post);

  return (
    <Link
      href={`/publications/${post.slug}`}
      className={`group block rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 ${className}`}
    >
      <article className="grid min-w-0 gap-6 rounded-sm bg-white motion-safe:transition-all motion-safe:duration-300 motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:shadow-[0_18px_40px_rgba(0,62,99,0.10)] sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] lg:gap-12">
        <div className="order-2 flex min-w-0 flex-col justify-center lg:order-1">
          <div className="mb-4">
            <span className="inline-block max-w-full text-[0.72rem] font-bold uppercase leading-relaxed tracking-[0.14em] text-heading transition-colors group-hover:text-gold-text">
              {displayPracticeArea}
            </span>
          </div>

          <h2 className="mb-4 max-w-full break-words text-[1.55rem] font-bold leading-[1.15] text-heading transition-colors group-hover:text-gold-text sm:text-3xl lg:text-[2.35rem] xl:text-4xl">
            {post.title}
          </h2>

          <p className="mb-6 line-clamp-3 break-words text-base leading-[1.7] text-body sm:text-lg">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3">
            <Image
              src={author.image}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover transition-all duration-500"
            />
            <div>
              <div className="text-sm font-bold text-heading">
                {author.name}
              </div>
              <div className="text-sm text-body">{post.date}</div>
            </div>
          </div>

          <div className="mt-6 text-sm font-bold text-heading underline-offset-4 transition-colors group-hover:text-gold-text group-hover:underline">
            Read More
          </div>
        </div>

        <div className="relative order-1 aspect-[16/10] min-w-0 overflow-hidden rounded-sm bg-soft-blue sm:aspect-[16/9] lg:order-2">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover motion-safe:transition-all motion-safe:duration-500 motion-safe:group-hover:scale-105"
          />
        </div>
      </article>
    </Link>
  );
}
