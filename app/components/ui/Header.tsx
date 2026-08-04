import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href="/">
          <Image src="https://avatars.githubusercontent.com/u/171104585?v=4" alt="Ini Logo Baji" width={100} height={100} about="Belajar" title="Baji Logo" />
          </Link>
          <div className="nav-links">
          <Link href="/about">About</Link>
          <Link href="/social-media">Social Media</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header