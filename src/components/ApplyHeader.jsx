export default function ApplyHeader({ step }) {
  const progress =
    "bg-white text-primary text-lg font-bold w-10 h-10 flex justify-center items-center rounded-full";

  const progressBar =
    "relative after:content-[''] after:absolute after:w-85 after:h-1 after:bg-white after:left-10";

  return (
    <>
      <h1 className="font-bold text-5xl text-center py-7">
        Prography 10기 지원서
      </h1>
      <ol className="flex items-center justify-around px-40">
        <li className={`${progress} ${progressBar}`}>1</li>
        <li className={`${progress} ${progressBar}`}>2</li>
        <li className={progress}>3</li>
      </ol>
    </>
  );
}
