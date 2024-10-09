import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="relative z-10">
      <div className="nav-item">
        <Link href="#" id="active">
          Work
        </Link>
      </div>
      <div className="nav-item">
        <Link href="#">About</Link>
      </div>
    </nav>
  );
}
