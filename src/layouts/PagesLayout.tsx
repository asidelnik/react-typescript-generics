import { Outlet } from "react-router-dom"
import PagesNavigation from "../navigations/PagesNavigation"

export default function PagesLayout() {
  return (
    <>
      <div className="main-container">
        <PagesNavigation />
        <main className="pages-layout">
          <Outlet />
        </main>
      </div>
    </>
  )
}