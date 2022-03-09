import React from "react"
import { GlobalStyles } from "../styles/GlobalStyles"
import Header from "./Header"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
