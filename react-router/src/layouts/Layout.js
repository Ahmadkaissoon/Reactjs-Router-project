import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../pages/components/Breadcrumbs";

const Layout = () => {
  return (
    <div className="nav-bar">
      <header>
        <nav>
          <h1>project</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/help">Help</NavLink>
          <NavLink to="/careers">careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
