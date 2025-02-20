import { Button } from "@components/Button";
import PropTypes from "prop-types";

ApplyFooter.propTypes = {
  pre: PropTypes.string,
  next: PropTypes.string,
  done: PropTypes.bool,
  onNext: PropTypes.func,
  disabled: PropTypes.bool,
};

export default function ApplyFooter({ pre, next, done, onNext, disabled }) {
  return (
    <>
      <section className="my-10 py-8 px-10 bg-white rounded-xl text-black flex justify-between">
        <Button to={pre}>뒤로</Button>
        <Button
          to={disabled ? undefined : next}
          done={done}
          onClick={onNext}
          disabled={disabled}
        >
          다음
        </Button>
      </section>
    </>
  );
}
