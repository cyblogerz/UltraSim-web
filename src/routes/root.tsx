import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
  <>
  <SiteHeader />
  <main className="flex-1">
  <Outlet />
  </main>
  <SiteFooter />

  </>
  )
}

export default Root;