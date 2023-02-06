import Link from "next/link";
import getPostMetadata from "./components/getPostMetaData";
import PostPreview from "./components/PostPreview";
import Sidebar from "./sidebar/sidebar";

export default function Homepage() {
  const postMetadata = getPostMetadata();

  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <>
      <div className="flex flex-row bg-gray1 w-full  overflow-x-hidden ">
        <div className="sm:flex hidden">
          <Sidebar />
        </div>
        <div className=" bg-gray1">
          <div className="flex flex-wrap w-full pt-4">{postPreviews}</div>
        </div>
      </div>
    </>
  );
}
