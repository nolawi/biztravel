import React from 'react'

import { PageTemplate, Header, Hero, Footer, FeatureList } from 'components'

const AboutPage = () => {
  return (
 
    <PageTemplate header={<Header />} hero={<Hero />} footer={<Footer />}>
      <FeatureList />
    </PageTemplate>
  )
}

export default AboutPage
