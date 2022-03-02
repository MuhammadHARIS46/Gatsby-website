import React from "react"
import styled from "styled-components"
import MockupAnimation from "../../animations/MockupAnimation"
import PurchaseButton from "../../buttons/PurchaseButton"
import { themes } from "../../styles/ColorStyles"
import { H1, MediumText } from "../../styles/TextStyles"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br /> and code React Apps
          </Title>
          <Description>
            Don not skip design. Lern design and code by building Real apps in
            React.complete courses about the best tools.
          </Description>
          <PurchaseButton
            title="Start Learning"
            subtitle="120+ hours of video"
          />
        </TextWrapper>
        <MockupAnimation/>
      </ContentWrapper>
    </Wrapper>
  )
}
export default HeroSection
const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: hidden; //ta k warpper ma jo content ha woh wrapper kay hi ander rahay aage na nikla
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 300px;
  display: grid;
  grid-template-columns: 360px auto;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)``
