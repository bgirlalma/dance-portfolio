import Sidebar from "./components/SideBar/sidebar";
import { GlobalStyled } from "./globalStyled";

const Layout = () => {
    return (
        <div>
            <Sidebar />
            <GlobalStyled/>
        </div>
    )
}

export default Layout;