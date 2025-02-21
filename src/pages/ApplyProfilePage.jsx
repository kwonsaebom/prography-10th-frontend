import ApplyHeader from "@components/ApplyHeader";
import InputBox from "@components/InputBox";
import ApplyFooter from "@components/ApplyFooter";
import { useForm } from "react-hook-form";
import useApplyStore from "@zustand/useApplyStore";
import { useEffect } from "react";

export default function ApplyProfilePage() {
  const { name, email, phone, setProfile } = useApplyStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: { name, email, phone },
  });

  useEffect(() => {
    reset({ name, email, phone });
  }, [name, email, phone, reset]);

  const saveData = () => {
    const data = getValues();

    setProfile({
      name: data.name,
      email: data.email,
      phone: data.phone,
    });

    setTimeout(() => {
      console.log("🔄 Zustand 저장 후 상태:", useApplyStore.getState());
    }, 100);
  };

  return (
    <>
      <ApplyHeader step="2" />

      <section className="max-w-[40vw] mx-auto my-10 py-15 px-10 bg-white rounded-xl text-black">
        <h2 className="text-2xl font-bold pb-4 border-b-3 border-b-primary">
          기본 정보
        </h2>
        <p className="my-5 text-gray-5">연락 가능한 정보를 입력해주세요</p>

        <form className="flex flex-col gap-6">
          <InputBox
            label="성함을 입력해주세요"
            example="홍길동"
            register={register("name", { required: "이름을 입력해주세요" })}
            error={errors.name}
          />
          <InputBox
            label="이메일 주소를 입력해주세요"
            example="prography@gmail.com"
            register={register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "올바른 이메일 형식을 입력해주세요",
              },
            })}
            error={errors.email}
          />
          <InputBox
            label="휴대폰 번호를 입력해주세요"
            example="010-1234-5678"
            register={register("phone", {
              required: "휴대폰 번호를 입력해주세요",
              pattern: {
                value: /^\d{3}-\d{4}-\d{4}$/,
                message: "010-1234-5678 형식으로 입력해주세요",
              },
            })}
            error={errors.phone}
          />
        </form>
      </section>

      <ApplyFooter
        pre="-1"
        next="/apply/part"
        onNext={() => {
          saveData();
        }}
        disabled={!isValid}
      />
    </>
  );
}
