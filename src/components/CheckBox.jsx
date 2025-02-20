export default function CheckBox({ children, value, ...rest }) {
  return (
    <label className="border border-gray-3 rounded-lg p-4 flex items-center">
      <input type="radio" className="mr-3" value={value} {...rest} />
      {children}
    </label>
  );
}
