import { RouterProvider } from "react-router-dom";
// import { Suspense } from "react";
import router from "@/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
