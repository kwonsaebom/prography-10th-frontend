import PropTypes from "prop-types";

ApplyHeader.propTypes = {
  step: PropTypes.string.isRequired,
};

export default function ApplyHeader({ step }) {
  const progress =
    "bg-white text-primary text-lg font-bold w-10 h-10 flex justify-center items-center rounded-full z-0";

  const check =
    "bg-primary text-white text-lg font-bold w-10 h-10 flex justify-center items-center rounded-full";

  return (
    <section>
      <h1 className="font-bold text-5xl text-center py-7">
        Prography 10기 지원서
      </h1>
      <ol className={`flex items-center justify-around px-40`}>
        <li className={`${step == 1 ? check : progress}`}>1</li>
        <li className={`${step == 2 ? check : progress}`}>2</li>
        <li className={`${step == 3 ? check : progress}`}>3</li>
      </ol>
    </section>
  );
}
