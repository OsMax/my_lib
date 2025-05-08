import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./Main.module.css";

const Main = () => {
  return (
    <main className={css.mainContainer}>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Main;
