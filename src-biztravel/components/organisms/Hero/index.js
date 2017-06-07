import React from 'react'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'

import {
  Block,
  Paragraph,
  IconLink,
  IconButton,
  LogoImage,
  PreformattedText,
  Heading,
  Tooltip,
} from 'components'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size('maxWidth')};
  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  &:first-child {
    flex: none;
  }
  @media screen and (max-width: 640px) {
    padding: 0.25rem;
    width: 100%;
  }
`

const Text = styled(Paragraph)`
  color: ${palette('grayscale', 3, true)};
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  width: 100%;
  letter-spacing: 0.05em;
  @media screen and (max-width: 640px) {
    text-align: center;
    font-size: 1rem;
  }
`

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  > :not(:first-child) {
    margin-left: 0.5rem;
  }
`

const Instructions = styled.div`
  width: 100%;
  margin-top: 2rem;
  @media screen and (max-width: 640px) {
    margin-top: 1rem;
  }
`

const Hero = (props) => {
  return (
    <Wrapper opaque  {...props}>
      <InnerWrapper>
        <Section>
          <LogoImage height={265} />
          <ButtonGroup>
            <Tooltip  data-title="Wohoo this is working finally">
              <IconButton icon="github" href="https://github.com/nolawi/biztravel">GitHub</IconButton>
            </Tooltip>
        
          </ButtonGroup>
        </Section>
        <Section>
          <Text>
            <strong>biztravel template</strong> is a React starter kit based on the Atomic Design methodology.
          </Text>
          <Instructions>
            <Heading level={2} >Install</Heading>
            <PreformattedText block  wrap>
              git clone -b master todo
            </PreformattedText>
            
              Biztravel stack documentation on jira or something 
          
          </Instructions>
        </Section>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Hero
