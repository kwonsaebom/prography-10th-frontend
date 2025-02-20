import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-primary" : "hover:text-primary"
      }
    >
      {children}
    </NavLink>
  );
}
