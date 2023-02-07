import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../components/getPostMetaData";
import Link from "next/link";

const getPostContent = (slug: string) => {
  //test
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const mattercontent = matter(content);

  return mattercontent;
};
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Postpage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className=" bg-gray1 w-screen h-full flex flex-col">
      <Link
        href={"/blog"}
        className=" w-screen text-teal-400 p-4 sm:pt-8 sm:pl-14 sm:pb-4"
      >
        {" "}
        &lt;- Back to Blog
      </Link>
      <h1 className="">{post.data.categorie}</h1>
      <h1 className="text-center text-4xl p-4 text-red1 border-t border-t-yellow-300">
        {post.data.title}
      </h1>
      <div className="flex justify-center">
        <article
          className="p-4 prose md:prose-lg prose-p:text-base prose-h1:text-white prose-th:text-white prose-table:bg-gray-800 prose-strong:text-white  prose-table:text-center prose-table:rounded-lg prose-table:text-white
           prose-h2:text-yellow-400 prose-h2:text-3xl prose-p:leading-7 prose-p:block
         prose-a:text-türkis prose-a:no-underline prose-a prose-p:text-white prose-h3:text-türkis  prose-h1:text-2xl lg:prose-xl text-white pl-5  w-screen"
        >
          <Markdown className="w-full m-0">{post.content}</Markdown>
        </article>
      </div>
    </div>
  );
};

export default Postpage;
