import { Outlet } from "react-router-dom";
import Header from "../componets/Header";
import App from "../componets/App";

const MainLayout = () => {
    return (
        <>
            <Header />
            <App/>
            <Outlet/>
        </>
    );
};

export default MainLayout;