import { Link } from "react-router-dom";
import logo from "/images/logo_prography.png";
import NavItem from "@components/NavItem";

export default function Header() {
  return (
    <header className="h-20 flex items-center px-20 justify-between">
      <img src={logo} className="h-12" />
      <nav className="h-12 text-white flex items-center gap-6">
        <NavItem to="/about">About</NavItem>
        <NavItem to="/project">Project</NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <Link
          to="apply"
          className="bg-primary px-6 py-3 rounded-full text-white font-bold"
        >
          11기 지원하기
        </Link>
      </nav>
    </header>
  );
}
