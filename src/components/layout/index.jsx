import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="max-w-[55vw] mx-auto">
      <Header />
      <main className="py-30">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
