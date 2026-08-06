import Postlists from "@/app/components/ui/Postlists";
import {getPosts} from "@/app/lib/api";

const Page = async () => {
  const postsList = await getPosts();

  return (
    <>
      <div className="main-heading">
        <h1>Posts</h1>
        <p>Baji Posts adalah sebuah kumpulan berita yang dibuat oleh Mr. Baji D Lovro dengan nama asli Bagus Aji Fernando yang rela membaut website dengan suka cita dan penuh hati</p>
      </div>
      <Postlists posts={postsList} />
    </>
  )
}

export default Page;