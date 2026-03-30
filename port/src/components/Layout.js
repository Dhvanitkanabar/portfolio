import React from "react";

const Layout = ({ children, className = "" }) => {
    return (
        <div
            className={`w-full h-full block z-0 bg-light dark:bg-dark p-24 xl:p-16 lg:p-12 md:p-8 sm:p-6 xs:p-4 ${className}`}
        >
            {children}
        </div>
    );
};

export default Layout;
