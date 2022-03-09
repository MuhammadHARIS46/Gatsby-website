import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import MenuTooltip from "../tooltips/MenuTooltip"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  function handleOnClick(event) {
    setIsOpen(!isOpen)
    event.PreventDefault() //this will prevent the orginal behaviour of a link
  }
  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt=" " />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData?.map((item, index) =>
          item?.link === "/account" ? (
            <MenuButton
              item={item}
              key={index}
              onClick={event => handleOnClick(event)} //menubutton ha 1 custom component tbhi iske onclick ko prop paas kia ha in main file agr html yag hota to no need for that
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
      </MenuWrapper>
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  grid-template-columns: 44px auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 30px;
  border-radius: 10px;
  transition: 0.5s ease-out;
  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`
const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${props => props.count},
    auto
  ); //3 means number of items u have
  gap: 30px;
`
