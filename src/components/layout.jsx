import React from "react"

import Navbar from "./navbar"
import Drawer from "./drawer"

import './layout.css'

const Layout = ({ children }) => (
    <div className="drawer bg-base min-h-screen">
        <input id="drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content items-center flex flex-none flex-col min-h-screen">
            <Navbar />
            <div className="pb-10 w-full text-base-content grow">
                {children}
            </div>
            <footer class="footer footer-center p-10 mt-15 bg-base-200 text-base-content rounded gap-2">
                <div class="grid grid-flow-col gap-4">
                    <a class="link link-hover" href="https://discord.gg/5Hus6fM">Contact</a>
                    <a class="link link-hover" href="https://github.com/recloudstream/">Github</a>
                    <a class="link link-hover" href="https://discord.gg/5Hus6fM">Discord</a>
                    <a class="link link-hover" href="https://matrix.to/#/#lagrapps:matrix.org">Matrix</a>
                    <a class="link link-hover" onClick={() => {window.open("https://www.youtube.com/watch?v=f-UIBVsRSDQ")}}>DMCA</a>
                </div>
                <div>
                    <p>Website by <a className="link" href="https://wilkins.ml" target="_blank">Cloudburst</a></p>
                </div>
            </footer>
        </div>
        <div className="drawer-side">
            <label for="drawer" className="drawer-overlay backdrop-blur-sm"></label>
            <Drawer />
        </div>
    </div>
)

export default Layout