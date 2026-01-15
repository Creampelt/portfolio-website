import React from "react";
import { Link } from "gatsby";
import Fun from "../content/fun.mdx";

const Layout: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => (
    <div className="container">
        <header>
            <h1>Emily Sturman</h1>
        </header>
        <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/publications" className="nav-link">Publications</Link>
        </nav>
        <div className="content">
            <section>News here</section>
            {children}
            <section>
                <Fun />
            </section>
        </div>
    </div>
)

export default Layout;