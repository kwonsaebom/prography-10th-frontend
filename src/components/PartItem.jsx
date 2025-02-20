export default function PartItem({ children }) {
  const color =
    children === "Design"
      ? "bg-amber-600"
      : children === "Product Owner"
        ? "bg-yellow-500"
        : "bg-primary";

  return (
    <>
      <li
        className={`text-xl font-bold py-2 px-4 rounded-full flex justify-center items-center ${color}`}
      >
        {children}
      </li>
    </>
  );
}
