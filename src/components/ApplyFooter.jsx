import { Button } from "@components/Button";

export default function ApplyFooter() {
  return (
    <>
      <section className="my-10 py-8 px-10 bg-white rounded-xl text-black flex justify-between">
        <Button disabled={true}>뒤로</Button>
        <Button to="/apply/second">다음</Button>
      </section>
    </>
  );
}
