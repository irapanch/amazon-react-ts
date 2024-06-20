import { FC, Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={"loading..."}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
