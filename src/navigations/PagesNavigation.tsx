import { NavLink, useLocation } from "react-router-dom";
import { pagesMetaData } from "../constants/pagesMetaData";
import { IPageMetaData } from "../interfaces/IPageMetaData";

export default function PageNavigation() {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="side-nav darker">
        {pagesMetaData.map((page: IPageMetaData, index: number) => (
          <NavLink key={index} to={`/${page.name}/items`}
            className={pathname.includes(page.name) ? "active" : ""}
          >{page.itemsLabel}</NavLink>
        ))}
      </nav>
    </>
  )
}