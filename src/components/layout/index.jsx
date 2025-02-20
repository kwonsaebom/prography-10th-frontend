import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="px-20">
      <Header />
      <main className="py-30">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
