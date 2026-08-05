// 1. IMPORT MODUL YANG DIBUTUHKAN
// Impor tipe data 'Post' untuk memastikan keamanan tipe data (Type Safety)
import {getPostById} from "@/app/lib/api"

// 2. DEFINISIKAN STRUKTUR PROPS (INTERFACE)
// Buat aturan bahwa komponen ini akan menerima objek 'params' dari URL
// Objek 'params' harus berisi properti 'id' bertipe string
interface PageProps {
  params: Promise<{id:string}>
}

// 3. FUNGSI AMBIL DATA (DATA FETCHING)
// FUNGSI BERSIFAT ASYNCHRONOUS bernama ambilDetailPost(id_dari_url)
//   LAKUKAN HTTP GET ke API_URL / id_dari_url
//   JIKA RESPONS GAGAL / ERROR
//     LEMPARKAN ERROR ("Data tidak ditemukan")
//   KEMBALIKAN hasil_respons DALAM BENTUK JSON (bertipe Post)

// 4. KOMPONEN UTAMA HALAMAN (SERVER COMPONENT)
// KOMPONEN BERSIFAT ASYNCHRONOUS bernama HalamanDetailPost({ params })
//   TUNGGU (AWAIT) dan dapatkan nilai 'id' dari objek 'params'
//   
//   TUNGGU (AWAIT) hasil dari fungsi ambilDetailPost(id) dan simpan ke variabel 'post'
//
//   TAMPILKAN (RENDER) HTML:
//     - BUNGKUSAN UTAMA (<article>)
//       - TAMPILKAN Judul dari post (post.title)
//       - TAMPILKAN Nomor ID dari post (post.id)
//       - TAMPILKAN Isi Konten dari post (post.body)
const HalamanDetailPost = async  ({params}: PageProps) => {
  const {id} =  await params;
  const post = await getPostById(id);
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <article style={{padding: "20px", maxWidth:"600px"}}>
        <h1>Judul: {post.title}</h1>
        <p>Nomor: {post.id}</p>
        <p>{post.body}</p>
      </article>
    </div>
  )
}
// 5. EKSPOR KOMPONEN SEBAGAI DEFAULT
export default HalamanDetailPost;