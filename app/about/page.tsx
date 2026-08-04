import Link from "next/link";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const response = await res.json();
  return response

}

const Page = async () => {
  const posts = await getPosts()
  interface Post {
    id: number
    title: string
    body: string
  }

  return (
    <>
      <div className="main-heading">
        <h1>About</h1>
        <p>Baji News adalah sebuah website berita yang dibuat oleh Mr. Baji D Lovro dengan nama asli Bagus Aji Fernando yang rela membaut website dengan suka cita dan penuh hati</p>
      </div>
      
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
    </>
  )
}

export default Page;