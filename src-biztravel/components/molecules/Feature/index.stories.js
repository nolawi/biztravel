import React from 'react'
import { storiesOf } from '@storybook/react'
import { Feature } from 'components'

storiesOf('Feature', module)
  .add('default', () => (
    <Feature title="biztravel">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Feature>
  ))
  .add('with link', () => (
    <Feature title="biztravel" link="https://github.com/nolawi">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Feature>
  ))
  .add('with icon', () => (
    <Feature icon="close" title="biztravel">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Feature>
  ))
  .add('with code', () => (
    <Feature code="npm run build" title="biztravel">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Feature>
  ))
  .add('with soon', () => (
    <Feature soon title="biztravel">
      Ullamco duis in labore consectetur ad exercitation esse esse duis mollit sint.
    </Feature>
  ))
