import { useNavigate } from "react-router-dom";

export function Button({ disabled, children, to }) {
  const disableClass =
    "py-2 px-6 rounded-md text-gray-5 bg-gray-2 cursor-not-allowed";
  const activeClass =
    "py-2 px-6 rounded-md cursor-pointer bg-primary text-white";

  const navigate = useNavigate();

  return (
    <button
      className={disabled ? disableClass : activeClass}
      disabled={disabled}
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
}
