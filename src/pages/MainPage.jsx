import PartItem from "@components/PartItem";
import { Link, useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1 className="text-5xl font-bold py-10">
        안녕하세요. <br />
        새로운 가치를 만들어가는 IT 커뮤니티,
        <strong className="text-primary font-extrabold text-6xl">
          {" "}
          Prography
        </strong>{" "}
        입니다.
      </h1>

      <ol className="text-lg px-5 py-10 flex flex-col gap-3">
        <li>✓ 새로운 가치를 만들어내는데 가슴이 두근거리신다면,</li>
        <li>✓ 열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,</li>
        <li>✓ 탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,</li>
      </ol>

      <div className="py-10">
        <span className="relative text-3xl font-round bg-primary py-3 px-8 rounded-full text-white before:content-[''] before:absolute before:-left-4 before:top-13 before:-translate-y-9 before:border-10 before:border-transparent before:border-r-primary">
          "프로답게, 재미있게"
        </span>
        <p className="text-lg py-5 pt-9">
          재미있는 작당을 함께 만들어갈 10기에 합류하세요!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-lg">
          📌 자세한 정보는 아래 페이지에 담아줬으니, 지원 전 꼭 확인해주세요 👇🏻
        </p>
        <Link to="https://prography.org/" className="hover:text-primary">
          🏡 공식 홈페이지
        </Link>
        <Link
          to="https://www.instagram.com/prography_official/"
          className="hover:text-primary"
        >
          🔗 인스타그램
        </Link>
      </div>
      <div className="py-20">
        <h2 className="text-3xl font-bold mb-5">모집 파트</h2>
        <ol className="flex gap-2 flex-wrap">
          <PartItem>Product Owner</PartItem>
          <PartItem>Design</PartItem>
          <PartItem>iOS</PartItem>
          <PartItem>AOS</PartItem>
          <PartItem>Frontend(React)</PartItem>
          <PartItem>Backend(Spring)</PartItem>
        </ol>
      </div>

      <button
        onClick={() => navigate("/apply")}
        className="bg-white text-primary py-5 px-8 cursor-pointer block mx-auto rounded-full font-bold text-4xl"
      >
        🔥 프로그라피 10기 지원하러 가기 🔥
      </button>
    </main>
  );
}
