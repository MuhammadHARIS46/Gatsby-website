import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Caption2, SmallText } from "../styles/TextStyles"
export default function PurchaseButton(props) {
  const { title, subtitle } = props
  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/credit.svg" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get Pro Access"}</Title>
          <SubTitle>{subtitle || "$19 per month"}</SubTitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}
const Wrapper = styled.div`
  max-width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;
  *,   //means property will apply to all elements inside wrapper while & is for the wrapper itslef 
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px) scale(1.2) rotate(10deg) skewX(10deg);
  }
  //.icon { this is how we can refer a class named icon jis element ko bhi ye class icon dainge uske hover pay transform: scale(1.2) apply hogi
  //transform: scale(1.2);
  //}
`
const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`
const Title = styled(Caption2)`
  color: black;
`
const SubTitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`
const Icon = styled.img`
  width: 29px;
  height: 29px;
`
const Ring = styled.img`
  position: absolute;
  top: -15px;
  left: -16px;
  ${Wrapper}:hover & {
    //it is neccessary that warapper should be declared above
    transform: rotate(30deg) scale(1.2) translate(1px, 1px);
  }
`
const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  position: relative;
  ${Wrapper}:hover & {
    // means k wrapper k hover p wrapper aur icon wrapper k sath ye krdo
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
`
