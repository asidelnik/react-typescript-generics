import { NavLink, useLocation } from "react-router-dom";
import { pageLinks } from "../constants/pageLinks";
import { IPageLink } from "../constants/IPageLink";

export default function PageNavigation() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="side-nav darker">
        {pageLinks.map((page: IPageLink, index: number) => (
          <NavLink key={index} to={`/${page.name}/items`}
            className={pathname.includes(page.name) ? "active" : ""}
          >{page.itemsLabel}</NavLink>
        ))}
      </nav>
    </>
  )
}