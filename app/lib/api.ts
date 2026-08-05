import { Post } from "../types";

const getPosts = async (): Promise<Post[]> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!res.ok) {
      throw new Error("Gagal mengambil data dari server")
    }
    return await res.json()

  } catch (error) {
    console.error("Waduh ada error:",error)
    throw error
  }
}


const getPostById = async (id: string): Promise<Post> => {
  try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      throw new Error(`Gagal mengambil data:${id}`);
    }
    return res.json();

  } catch(error) {
    console.error(`Error: ${error}`)
    throw error;

  }
}

export {getPosts, getPostById};
