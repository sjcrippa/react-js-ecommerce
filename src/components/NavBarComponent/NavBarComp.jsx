import React from "react";
import { NavBarSect } from "./NavBarSect";
import { CartWidget } from "../CartWidget/CartWidget";
export const NavBarComp = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">El Garete</a>

                <CartWidget />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <NavBarSect />

            </div>
        </nav>
    );
};
