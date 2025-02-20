import ApplyHeader from "@components/ApplyHeader";
import ApplyFooter from "@components/ApplyFooter";
import CheckBox from "@components/CheckBox";

export default function ApplyPartPage() {
  return (
    <>
      <ApplyHeader progress="3" />

      <section className="my-10 py-15 px-10 bg-white rounded-xl text-black">
        <h2 className="text-2xl font-bold pb-4 border-b-3 border-b-primary ">
          지원 정보
        </h2>
        <p className="my-5 text-gray-5">지원하고자 하는 분야를 선택해주세요</p>

        <form className="border border-gray-3 rounded-2xl p-5 font-semibold">
          <p className="pb-4">
            지원 분야를 선택해주세요
            <span className="text-red text-xl font-medium"> *</span>
          </p>

          <div className="flex flex-col gap-4">
            <CheckBox>프론트엔드</CheckBox>
            <CheckBox>백엔드</CheckBox>
            <CheckBox>디자인</CheckBox>
            <CheckBox>iOS</CheckBox>
            <CheckBox>안드로이드</CheckBox>
            <CheckBox>Product Owner</CheckBox>
          </div>
        </form>
      </section>

      <ApplyFooter pre="-1" next="/apply/result" done={true} />
    </>
  );
}
