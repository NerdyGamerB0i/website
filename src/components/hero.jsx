import React from "react"

const Hero = ({bg, children}) => (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${bg})`}}>
    <div className="hero-overlay bg-opacity-60" />
    <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
            {children}
        </div>
    </div>
</div>
)

export default Hero