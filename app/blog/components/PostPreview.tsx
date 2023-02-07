import { PostMetadata } from "./PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
  const color_prep = props.color;

  const color = `text-${color_prep}`;
  const border = `border-t-${color_prep}`;

  return (
    <div className="m-4 shadow-md border-t-1 w-full max-w-lg md:w-60 p-4">
      <Link href={`/blog/posts/${props.slug}`}>
        <div className={`${border}`}>
          <div className=" pl-3 pr-3">
            <p className={`${color}`}>{props.categorie}</p>

            <p className="text-white text-2xl py-2"> {props.title}</p>

            <p className="text-sm">{props.subtitle}</p>
            <p className="text-sm py-1">{props.date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostPreview;
