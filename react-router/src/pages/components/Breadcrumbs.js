import { Link, useLocation } from "react-router-dom";

// this function in layout.js

export default function Breadcrumbs() {
  const location = useLocation();
  //   console.log(location);
  let currentlink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentlink = +`/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentlink}>{crumb}</Link>
        </div>
      );
    });
  return <div className="breadcrumbs">{crumbs}</div>;
}
