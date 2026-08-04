import Link from "next/link";
import Image from "next/image"

const page = () => {
  return (
    <>
      <h1>Social media</h1>
      <div className="social-media-links">
        <Link href="https://github.com/bajiff" target="_blank" className="links">
          <Image src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="Github" title="Github" width={100} height={100} />
        </Link>

        <Link href="https://www.linkedin.com/in/bagus-aji-fernando-466347286/" target="_blank" className="links">
          <Image src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="Linkedin" title="Linkedin" width={100} height={100} />
        </Link>

        <Link href="https://twitter.com/_bajif" target="_blank" className="links">
          <Image src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000" alt="X" title="X" width={100} height={100} />
        </Link>

        <Link href="https://www.instagram.com/_bajif" target="_blank" className="links">
          <Image src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="X" title="X" width={100} height={100} />
        </Link>
      </div>
    </>
  )
}

export default page;