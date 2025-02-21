import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";

import useApplyStore from "@zustand/useApplyStore";
import ApplyHeader from "@components/ApplyHeader";
import ApplyFooter from "@components/ApplyFooter";
import CheckBox from "@components/CheckBox";
import { useNavigate } from "react-router-dom";

export default function ApplyPartPage() {
  const { part, setPart, resetForm } = useApplyStore();
  const navigate = useNavigate();

  const {
    control,
    formState: { errors, isValid },
    reset,
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: { part },
  });

  useEffect(() => {
    if (part) {
      reset({ part });
    }
  }, [part, reset]);

  const saveData = (data) => {
    setPart(data.part);
  };

  const submitData = async () => {
    const formData = JSON.parse(localStorage.getItem("apply-storage"));

    if (!formData) {
      alert("제출할 데이터가 없습니다.");
      return;
    }

    try {
      console.log("📩 제출 데이터:", formData);

      alert("📩 지원서 제출이 완료되었습니다!");

      localStorage.removeItem("apply-storage");
      resetForm();
      reset({ part: "" });

      navigate("/apply/result");
    } catch (error) {
      alert("🚨 지원서 제출 중 오류가 발생했습니다. 다시 시도해주세요.");
      console.error("🚨 제출 오류:", error);
    }
  };

  return (
    <>
      <ApplyHeader step="3" />

      <section className="max-w-[40vw] mx-auto my-10 py-15 px-10 bg-white rounded-xl text-black">
        <h2 className="text-2xl font-bold pb-4 border-b-3 border-b-primary">
          지원 정보
        </h2>
        <p className="my-5 text-gray-5">지원하고자 하는 분야를 선택해주세요</p>

        <form className="border border-gray-3 rounded-2xl p-5 font-semibold">
          <p className="pb-4">
            지원 분야를 선택해주세요
            <span className="text-red text-xl font-medium"> *</span>
          </p>

          <Controller
            name="part"
            control={control}
            rules={{ required: "지원 분야를 선택해주세요" }}
            render={({ field }) => (
              <div className="flex flex-col gap-4">
                <CheckBox
                  value="프론트엔드"
                  checked={field.value === "프론트엔드"}
                  onChange={() => {
                    field.onChange("프론트엔드");
                    setPart("프론트엔드");
                  }}
                >
                  프론트엔드
                </CheckBox>
                <CheckBox
                  value="백엔드"
                  checked={field.value === "백엔드"}
                  onChange={() => {
                    field.onChange("백엔드");
                    setPart("백엔드");
                  }}
                >
                  백엔드
                </CheckBox>
                <CheckBox
                  value="디자인"
                  checked={field.value === "디자인"}
                  onChange={() => {
                    field.onChange("디자인");
                    setPart("디자인");
                  }}
                >
                  디자인
                </CheckBox>
                <CheckBox
                  value="iOS"
                  checked={field.value === "iOS"}
                  onChange={() => {
                    field.onChange("iOS");
                    setPart("iOS");
                  }}
                >
                  iOS
                </CheckBox>
                <CheckBox
                  value="안드로이드"
                  checked={field.value === "안드로이드"}
                  onChange={() => {
                    field.onChange("안드로이드");
                    setPart("안드로이드");
                  }}
                >
                  안드로이드
                </CheckBox>
                <CheckBox
                  value="Product Owner"
                  checked={field.value === "Product Owner"}
                  onChange={() => {
                    field.onChange("Product Owner");
                    setPart("Product Owner");
                  }}
                >
                  Product Owner
                </CheckBox>
                {errors.part && (
                  <span className="text-red-500 text-sm">
                    {errors.part.message}
                  </span>
                )}
              </div>
            )}
          />
        </form>
      </section>

      <ApplyFooter
        pre="-1"
        next="/apply/result"
        done={true}
        onNext={handleSubmit(submitData)}
        disabled={!isValid}
      />
    </>
  );
}
