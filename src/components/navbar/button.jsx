import React from "react"
import { Link } from "gatsby"

const Button = ({url, children, name}) => (
    <span className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]" data-tip={name}>
    <div className="flex-none items-center">
        <Link className="btn btn-ghost drawer-button btn-square text-xl" to={url || "#!"}>
            {children}
        </Link>
    </div>
</span>
)

export default Button