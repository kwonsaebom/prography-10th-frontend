import ApplyHeader from "@components/ApplyHeader";
import CheckBox from "@components/CheckBox";
import { useState } from "react";
import ApplyFooter from "@components/ApplyFooter";

export default function ApplyFirstPage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <ApplyHeader progress="1" />

      <section className="my-10 py-15 px-10 bg-white rounded-xl text-black">
        <h2 className="text-2xl font-bold pb-4 border-b-3 border-b-primary ">
          개인정보 수집 동의
        </h2>
        <p className="my-5 text-gray-5">
          프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다
        </p>

        <form className="border border-gray-3 rounded-2xl py-10 px-5 font-bold">
          <ol>
            <li>수집 목적: Prography 10기 리쿠르팅 과정 및 결과 안내</li>
            <li>수집 항목: 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보</li>
            <li>보유 및 이용 기간: 리쿠르팅 과정 종료일(3월 7일) 이후 파기</li>
          </ol>

          <p className="py-4">
            개인정보 수집여부 동의 여부를 체크해주세요.
            <span className="text-red-600 text-xl font-medium"> *</span>
          </p>

          <div className="flex flex-col gap-4">
            <CheckBox checked={isChecked} onChange={setIsChecked}>
              개인정보 수집 여부에 동의합니다
            </CheckBox>
            <CheckBox checked={!isChecked}>
              개인정보 수집 여부에 동의하지 않습니다
            </CheckBox>
          </div>
        </form>
      </section>

      <ApplyFooter />
    </>
  );
}
