import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import Particles from "./particles"

const Layout = ({ children }) => (
  <React.Fragment>
    <Particles />
    <header className="header">
      <Link to="/">DEMO BLOG</Link>
    </header>
    <main className="content">{children}</main>
  </React.Fragment>
)


export default Layout;

