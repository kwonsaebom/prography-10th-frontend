import { Button } from "@components/Button";
import PropTypes from "prop-types";

ApplyFooter.propTypes = {
  pre: PropTypes.string,
  next: PropTypes.string,
  done: PropTypes.bool,
};

export default function ApplyFooter({ pre, next, done }) {
  return (
    <>
      <section className="my-10 py-8 px-10 bg-white rounded-xl text-black flex justify-between">
        <Button to={pre}>뒤로</Button>
        <Button to={next} done={done ? done : false}>
          다음
        </Button>
      </section>
    </>
  );
}
