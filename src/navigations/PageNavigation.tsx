import { NavLink, useLocation, useMatch } from "react-router-dom";

export default function PageNavigation() {
  const { pathname } = useLocation();
  const pageName = pathname.split('/')[1];
  const matchItems = useMatch(`/${pageName}/items`);
  const matchDetails = useMatch(`/${pageName}/item-details/:id`);

  return (
    <>
      <nav className="side-nav">
        <NavLink to={`/${pageName}/items`}
          className={Boolean(matchItems) ? "active" : ""}
        >
          Items</NavLink>
        <NavLink to={`/${pageName}/item-details`}
          className={Boolean(matchDetails) ? "active disabled-link" : "disabled-link"}
          onClick={e => e.preventDefault()}>
          Details
        </NavLink>
      </nav>
    </>
  )
}