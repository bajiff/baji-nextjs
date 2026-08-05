import Link from "next/link";
import {Post} from "@/app/types/index";

interface PostProps {
  posts : Post[]
}

const Postlists = ({posts}: PostProps) => {

 
  return (
      <div className="post-list">
      {posts.map((post:Post) => (
        <div key={post.id } className={`post-item`}>
          <h2><Link href={`posts/${post.id}`}>Judul: {post.title}</Link></h2>
          <p>No: {post.id}</p>
          <p>Deskripsi:</p>
          <p>{post.body}</p>
        </div>
      ))}
      </div>
  )
}
export default Postlists;