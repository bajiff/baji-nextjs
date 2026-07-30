import Link from "next/link";

const page = () => {
  return (
    <>
      <h1>Social media</h1>
      <div className="social-media-links">
        <Link href="https://github.com/bajiff" className="links">Github</Link>
        <Link href="https://www.linkedin.com/in/bagus-aji-fernando-466347286/" className="links">Linkedin</Link>
        <Link href="https://twitter.com/_bajif" className="links">X</Link>
        <Link href="https://www.instagram.com/_bajif" className="links">Instagram</Link>
      </div>
    </>
  )
}

export default page;