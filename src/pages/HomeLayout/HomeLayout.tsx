import { Outlet } from "react-router-dom"
import { Navbar } from "../../components"

export const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
