import { Outlet, useLocation, useParams } from "react-router-dom";
import PageNavigation from "../navigations/PageNavigation";
import { pageLinks } from "../constants/pageLinks";

export default function PageLayout() {
  const { page } = useParams<{ page: string }>();
  const { pathname } = useLocation();
  const isItemsSection = !pathname.includes('item-details');
  const selectedPage = pageLinks.find(p => p.name === page);
  const pageTitle = selectedPage ? isItemsSection ? selectedPage.itemsLabel : selectedPage.detailsLabel : 'Page not found';
  return (
    <>
      <PageNavigation />
      <main className="page-layout">
        <header className="page-title">
          <h3>{pageTitle}</h3>
        </header>
        <section className="content-container">
          <Outlet />
        </section>
      </main>
    </>
  )
}