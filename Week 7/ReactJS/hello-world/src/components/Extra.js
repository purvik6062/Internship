import React from "react";
import "../styles/NavBar.css";
const navigation = [
    {
        title: "Services",
        link: "/services",
    },
    {
        title: "Technologies",
        link: "/technologies",
    },
    {
        title: "Projects",
        link: "/projects",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Careers",
        link: "/careers",
    },
    {
        title: "Contact",
        link: "/contact",
    },
];
export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top" role="navigation" >
                <div className="container-fluid px-4 px-md-5">
                    <a className="navbar-brand" href="/">
                        <img
                            src="./assets/homeimages/Humans.png"
                            height="100px"
                            width="130px"
                            className="img-fluid d-inline-block align-top"
                            alt=""
                        />
                    </a>
                    {/* <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarRightAlignExample"
            aria-controls="navbarRightAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > */}
                    <button
                        type="button"
                        className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" data-bs-toggle="collapse" data-bs-target="#navbarRightAlignExample"
                        aria-controls="navbarRightAlignExample" aria-expanded="false" aria-label="Toggle navigation"
                    >
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    {/* <span className="navbar-toggler-icon"></span>
          </button> */}
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarRightAlignExample"
                    >
                        <ul className="navbar-nav ml-auto align-items-center mb-2 mb-lg-0">
                            {navigation.map((item, index) => (
                                <NavLink body={item} key={index} />
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
function NavLink({ body }) {
    return (
        <li className="nav-item">
            <a className="nav-link p-0 active" aria-current="page" href={body.link}>
                {body.title}
            </a>
        </li>
    )
}