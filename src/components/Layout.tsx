import React from "react";
import { Link } from "gatsby";

const Layout: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => (
    <>
        <header>
            <h1>Emily Sturman</h1>
        </header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/publications">Publications</Link>
        </nav>
        <div>
            <section>News here</section>
            <main>{children}</main>
            <section>Other stuff here</section>
        </div>
    </>
)

export default Layout;