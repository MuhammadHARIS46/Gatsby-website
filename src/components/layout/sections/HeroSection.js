import React from "react"
import { Link } from "gatsby"
function HeroSection() {
    return(
        <>
            <img src="/images/logos/logo.svg" alt="logo" />
            <h1>Design and code React Apps</h1>
            <p>Don not skip design. Lern design and code by building Real apps in React.complete courses about the best tools.</p>
            <Link to="/page-2/">Go to page 2</Link> <br />
        </>
    )
}
export default HeroSection