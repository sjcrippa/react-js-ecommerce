import React from "react";

export   const NavBarComp = () => {
    return (
        <nav>
            <header className="d-flex">
                <div className="logo">
                    <a href="/">
                        <h1>Logo</h1>
                    </a>
                </div>
                <div className="d-flex align-items-center">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </header>
        </nav>
    );
};
    