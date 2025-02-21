import { Button } from "@components/Button";
import checkIcon from "/images/check.svg";

export default function ApplyResultPage() {
  return (
    <>
      <h1 className="font-bold text-5xl text-center py-7">
        Prography 10기 지원서
      </h1>
      <section className="max-w-[40vw] mx-auto my-10 py-15 bg-white rounded-xl text-black flex flex-col items-center gap-5">
        <img src={checkIcon} className="w-20" />
        <h2 className="text-2xl font-semibold">지원이 완료되었습니다!</h2>
        <p className="text-center">
          프로그라피 10기에 지원해주셔서 감사합니다. <br />
          서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.
        </p>
        <Button to="/">홈으로 돌아가기</Button>
      </section>
    </>
  );
}
