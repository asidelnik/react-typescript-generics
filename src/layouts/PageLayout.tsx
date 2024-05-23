import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import PageNavigation from "../navigations/PageNavigation";
import { pagesMetaData } from "../constants/pagesMetaData";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function PageLayout() {
  const { page } = useParams<{ page: string }>();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isItemsSection = !pathname.includes('item-details');
  const selectedPage = pagesMetaData.find(p => p.name === page);
  const pageTitle = selectedPage ? isItemsSection ? selectedPage.itemsLabel : selectedPage.detailsLabel : 'Page not found';

  return (
    <>
      <PageNavigation />
      <main className="page-layout">
        <header className="page-title">
          {!isItemsSection && <button onClick={() => navigate(-1)} className="circle-button on-light-bg" style={{ border: 'none' }}>
            <MdOutlineArrowBackIos />
          </button>}
          <h3>{pageTitle}</h3>
        </header>
        <section className="content-container">
          <Outlet />
        </section>
      </main>
    </>
  )
}