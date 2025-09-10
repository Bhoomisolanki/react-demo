import React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    );
}

export default Root;
