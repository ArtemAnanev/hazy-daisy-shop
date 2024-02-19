import Header from "@/components/modules/Header/Header";
import React from "react";

const Layout = ({children}: { children: React.ReactNode}) => (
    <>
        <Header />
        {children}
        <div className='' />
    </>
)

export default Layout;
