import Link from "next/link";

interface Post {
  id: number
  title: string
  body: string
}

interface PostProps {
  posts : Post[]
}

const Posts = ({posts}: PostProps) => {

 
  return (
      <div className="post-list">
      {posts.map((post:Post) => (
        <div key={post.id } className={`post-item`}>
          <h2><Link href="/">Judul: {post.title}</Link></h2>
          <p>No: {post.id}</p>
          <p>Deskripsi:</p>
          <p>{post.body}</p>
        </div>
      ))}
      </div>
  )
}
export default Posts;