import React from 'react'
import styled from 'styled-components'

import { Feature, Link, Heading, Paragraph } from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`

const FeatureList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>Biztravel Stack base</StyledHeading>
    <Description>
       This is a test of the documentation for biz <br />
      <Link href="google">Linf</Link>
    </Description>
    <Grid>
      <StyledFeature
     
        link="google"
        title="React"
        code={'<MyComponent attr="value" />'}
      >
        fb js
      </StyledFeature>
      <StyledFeature
   
        link="r"
        title="React Router"
        code={'<Route path="/about-page" />'}
      >
        for declarative url in the results page.
      </StyledFeature>
      <StyledFeature
 
        link="d"
        title="webpacke..  we can swich to grunt if you like "
        code="npm run build"
      >
        so that we can build fast. <Link href="https://webpack.github.io/docs/hot-module-replacement.html">hot reload</Link> read docs.
      </StyledFeature>
      <StyledFeature
    
        link="d"
        title="Jest"
        code="npm run test"
      >
        Tthis is my attempt to use a test driven dev
      </StyledFeature>
    </Grid>
 
    <Grid>
      <StyledFeature
 
        link="x"
        title="redux "
        code=""
      >
        container/ we might need to add axiom .
      </StyledFeature>
   
    </Grid>
    <Grid>
      <StyledFeature
 
        link="x"
        title="redux search "
        code=""
      >
        there is many options on redux search that is elastic search .
      </StyledFeature>
   
    </Grid>
  </div>
)

export default FeatureList
