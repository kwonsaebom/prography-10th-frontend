import PropTypes from "prop-types";

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
};

export default function InputBox({ label, example, register, error }) {
  return (
    <label className="border border-gray-3 rounded-lg p-4 flex flex-col gap-2">
      <p>
        {label} <span className="text-red text-xl font-medium"> *</span>
      </p>
      <input
        type="text"
        className="border border-gray-2 rounded-md p-3 text-sm placeholder:font-normal focus:outline-primary focus:outline-1"
        placeholder={`예시 : ${example}`}
        {...register}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </label>
  );
}
