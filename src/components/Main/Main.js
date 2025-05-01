import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <div>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};
