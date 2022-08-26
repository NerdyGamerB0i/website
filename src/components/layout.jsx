import React from "react"

import Navbar from "./navbar"
import Drawer from "./drawer"

import './layout.css'

const Layout = ({ children }) => (
<div className="drawer bg-base">
    <input id="drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content items-center flex flex-none flex-col">
        <Navbar />
        <div className="pb-10 w-full text-base-content">
            {children}
        </div>
    </div>
    <div className="drawer-side">
        <label for="drawer" className="drawer-overlay backdrop-blur-sm"></label>
        <Drawer />
    </div>
</div>
)

export default Layout