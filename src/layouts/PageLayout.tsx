import { Outlet, useParams } from "react-router-dom";
import PageNavigation from "../navigations/PageNavigation";

export default function PageLayout() {
  const { page } = useParams<{ page: string }>();
  return (
    <>
      <PageNavigation />
      <main className="page-layout">
        <header className="page-title">
          <h3>{page}</h3>
        </header>
        <section className="content-container">
          <Outlet />
        </section>
      </main>
    </>
  )
}