import Link from "next/link";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href="/">Baji News</Link>
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