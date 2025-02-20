export default function CheckBox({ children, checked }) {
  return (
    <label className="border border-gray-3 rounded-lg p-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mr-3"
      />
      {children}
    </label>
  );
}
