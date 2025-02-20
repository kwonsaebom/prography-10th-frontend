import { Link } from "react-router-dom";
import instagram from "/images/logo_instagram.svg";
import github from "/images/logo_github.svg";

export default function Footer() {
  return (
    <footer className="mb-20 flex flex-col gap-6 items-center">
      <div className="flex justify-center gap-5">
        <Link to="https://www.instagram.com/prography_official/">
          <img src={instagram} />
        </Link>
        <Link to="https://github.com/prography/">
          <img src={github} />
        </Link>
      </div>
      <p className="text-gray-3 relative abolute">
        <strong>Contact</strong> contact.prography@gmail.com
      </p>

      <span className="text-gray-3 mb-2">______</span>

      <p className="text-gray-5">© 2024 Prography.ALL RIGHTS RESERVED.</p>
    </footer>
  );
}
