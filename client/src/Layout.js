import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
    </>

    // <>
    //   <Header />
    //   <Outlet />
    // </>
  );
};

export default Layout;
