import { NavbarRoutes } from "../../../components/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar =() => {
    return(
        <div className="p-4 border-w h-full flex items-center bg-white shadow-sm sticky top-0">
            <MobileSidebar/>
            <NavbarRoutes/> 
        </div>
    )
}