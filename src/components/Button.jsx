import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
  done: PropTypes.bool,
  onClick: PropTypes.func,
};

export function Button({ children, to, done = false, onClick }) {
  const disableClass =
    "py-2 px-6 rounded-md text-gray-5 bg-gray-2 cursor-not-allowed";
  const activeClass =
    "py-2 px-6 rounded-md cursor-pointer bg-primary text-white";

  const navigate = useNavigate();

  return (
    <button
      className={to ? activeClass : disableClass}
      disabled={!to}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }

        if (to === "-1") {
          e.preventDefault();
          navigate(-1);
        } else if (to) {
          navigate(to);
        }
      }}
    >
      {done ? "제출하기" : children}
    </button>
  );
}
