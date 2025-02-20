import ApplyHeader from "@components/ApplyHeader";
import InputBox from "@components/InputBox";
import ApplyFooter from "@components/ApplyFooter";

export default function ApplySecondPage() {
  return (
    <>
      <ApplyHeader progress="2" />

      <section className="my-10 py-15 px-10 bg-white rounded-xl text-black">
        <h2 className="text-2xl font-bold pb-4 border-b-3 border-b-primary ">
          기본 정보
        </h2>
        <p className="my-5 text-gray-5">연락 가능한 정보를 입력해주세요</p>

        <form className=" font-semibold flex flex-col gap-6">
          <InputBox example="홍길동">
            성함을 입력해주세요
            <span className="text-red text-xl font-medium"> *</span>
          </InputBox>
          <InputBox example="prography@gmail.com">
            이메일 주소를 입력해주세요
            <span className="text-red text-xl font-medium"> *</span>
          </InputBox>
          <InputBox example="010-1234-5678">
            휴대폰 번호를 입력해주세요
            <span className="text-red text-xl font-medium"> *</span>
          </InputBox>
        </form>
      </section>

      <ApplyFooter pre="-1" next="/apply/third" />
    </>
  );
}
