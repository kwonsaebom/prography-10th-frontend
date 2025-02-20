import { Link } from "react-router-dom";
import logo from "/images/logo_prography.png";
import NavItem from "@components/NavItem";

export default function Header() {
  return (
    <header className="h-20 flex items-center justify-between">
      <Link to="/">
        <img src={logo} className="h-12" />
      </Link>
      <nav className="h-12 flex items-center gap-6">
        <NavItem to="/about">About</NavItem>
        <NavItem to="/project">Project</NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <Link
          to="apply"
          className="bg-primary px-6 py-3 rounded-full font-bold"
        >
          10기 지원하기
        </Link>
      </nav>
    </header>
  );
}
