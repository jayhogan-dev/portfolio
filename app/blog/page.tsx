import BlogCard from "@/components/BlogCard";
import DarkContainer from "@/components/containers/Dark";
import LightContainer from "@/components/containers/Light";
import { client, urlFor } from "@/lib/sanity";
import { Blog } from "@/types";

export const revalidate = 500;

async function getData() {
  const query = `*[_type == "blog"]{title, subtitle, headerImage, slug, _id}`;

  const data = await client.fetch(query);

  return data;
}

const BlogPage = async () => {
  const data = (await getData()) as Blog[];

  return (
    <main className="flex flex-col">
      <DarkContainer>
        <section className="flex flex-col py-12 md:py-[72px] items-center justify-center">
          <h1 className="relative text-4xl text-center font-bold leading-[115%] tracking-[-0.36px] lg:text-heading1 dark:text-white text-primary-black-300 mb-10 z-10">
            Blogs
          </h1>
          <div className="xxs:hidden relative -top-24 -right-[66px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[88px]" />
          <div className="relative -top-[70px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[130px] xxs:-top-14 xxs:w-[230px] xxs:-right-[68px] lg:w-[415px] lg:-top-[64px] lg:-right-[120px]" />
          <p className="-mt-5 text-small-regular lg:text-paragraph-regular text-primary-white-500 dark:text-primary-white-800 w-full sm:w-[500px] lg:w-[650px] text-center">
            Explore Insights, Tutorials, and Stories on Programming and Web
            Development
          </p>
        </section>
      </DarkContainer>
      <LightContainer>
        <section className="flex flex-col py-12 md:py-[72px] items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
            {data.map((post) => (
              <BlogCard
                key={post._id}
                title={post.title}
                subtitle={post.subtitle}
                headerImage={urlFor(post.headerImage.asset._ref).url()}
                slug={`/blog/${post.slug?.current}`}
              />
            ))}
          </div>
        </section>
      </LightContainer>
    </main>
  );
};

export default BlogPage;
