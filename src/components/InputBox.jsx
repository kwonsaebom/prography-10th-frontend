import PropTypes from "prop-types";

InputBox.propTypes = {
  children: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
};

export default function InputBox({ children, example }) {
  return (
    <label className="border border-gray-3 rounded-lg p-4 flex flex-col gap-2">
      <p>{children}</p>
      <input
        type="text"
        className="border border-gray-2 rounded-md p-3 text-sm placeholder:font-normal focus:outline-primary focus:outline-1"
        placeholder={`예시 : ${example}`}
      />
    </label>
  );
}
