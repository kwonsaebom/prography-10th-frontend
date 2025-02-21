import { useForm } from "react-hook-form";
import useApplyStore from "@zustand/useApplyStore";
import ApplyHeader from "@components/ApplyHeader";
import ApplyFooter from "@components/ApplyFooter";
import CheckBox from "@components/CheckBox"; // 기존 컴포넌트 그대로 사용

export default function ApplyPartPage() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const setProfile = useApplyStore((state) => state.setProfile);

  const onSubmit = (data) => {
    setProfile("part", data.part);
    console.log("제출된 데이터:", data);
  };

  return (
    <>
      <ApplyHeader step="3" />

      <section className="max-w-[40vw] mx-auto my-10 py-15 px-10 bg-white rounded-xl text-black">
        <h2 className="text-2xl font-bold pb-4 border-b-3 border-b-primary ">
          지원 정보
        </h2>
        <p className="my-5 text-gray-5">지원하고자 하는 분야를 선택해주세요</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-gray-3 rounded-2xl p-5 font-semibold"
        >
          <p className="pb-4">
            지원 분야를 선택해주세요
            <span className="text-red text-xl font-medium"> *</span>
          </p>

          <div className="flex flex-col gap-4">
            <CheckBox
              {...register("part", { required: true })}
              value="프론트엔드"
            >
              프론트엔드
            </CheckBox>
            <CheckBox {...register("part", { required: true })} value="백엔드">
              백엔드
            </CheckBox>
            <CheckBox {...register("part", { required: true })} value="디자인">
              디자인
            </CheckBox>
            <CheckBox {...register("part", { required: true })} value="iOS">
              iOS
            </CheckBox>
            <CheckBox
              {...register("part", { required: true })}
              value="안드로이드"
            >
              안드로이드
            </CheckBox>
            <CheckBox
              {...register("part", { required: true })}
              value="Product Owner"
            >
              Product Owner
            </CheckBox>
          </div>
        </form>
      </section>

      <ApplyFooter
        pre="-1"
        next="/apply/result"
        done={true}
        onNext={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
    </>
  );
}
