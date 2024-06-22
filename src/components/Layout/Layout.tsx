import { FC, Suspense } from "react";
import { Header } from "../header/Header.tsx";
import { Outlet } from "react-router-dom";
import { MainContainer } from "./Layout.styled.tsx";
const Layout: FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Suspense fallback={"loading..."}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  );
};

export default Layout;
