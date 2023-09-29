import BlogHeader from "@/components/BlogHeader";
import { client, urlFor } from "@/lib/sanity";
import { Blog } from "@/types";

export const revalidate = 500;

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

const BlogSlugPage = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Blog;

  return (
    <div className="flex flex-col">
      <BlogHeader
        title={data.title}
        subtitle={data.subtitle}
        headerImage={urlFor(data.headerImage.asset._ref).url()}
      />
    </div>
  );
};

export default BlogSlugPage;
