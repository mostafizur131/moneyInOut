/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
