import React from "react"
import styled from "styled-components"
import MockupAnimation from "../../animations/MockupAnimation"
import WaveBackground from "../../background/waveBackground"
import PurchaseButton from "../../buttons/PurchaseButton"
import { themes } from "../../styles/ColorStyles"
import { H1, MediumText } from "../../styles/TextStyles"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
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
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}
export default HeroSection
const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;
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
