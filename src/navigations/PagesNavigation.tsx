import { NavLink, useLocation, useMatch } from "react-router-dom";

export default function PageNavigation() {
  const { pathname } = useLocation();
  const pageName = pathname.split('/')[1];
  const matchItems = useMatch(`/${pageName}/items`);
  const matchDetails = useMatch(`/${pageName}/item-details/:id`);

  return (
    <>
      <nav className="side-nav darker">
        {/* Map an array of pages to NavLink */}
        <NavLink to={`/databases/items`}
          className={Boolean(matchItems) || Boolean(matchDetails) ? "active" : ""}
        >Databases</NavLink>
      </nav>
    </>
  )
}