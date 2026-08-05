
const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const response = await res.json();
  return response

}
export default getPosts;