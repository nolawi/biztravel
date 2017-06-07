import React from 'react'
import { storiesOf } from '@storybook/react'
import PreformattedText from '.'

storiesOf('PreformattedText', module)
  .add('default', () => (
    <PreformattedText>git </PreformattedText>
  ))
  .add('reverse', () => (
    <PreformattedText reverse>git </PreformattedText>
  ))
  .add('block', () => (
    <PreformattedText block>git clone </PreformattedText>
  ))
  .add('block reverse', () => (
    <PreformattedText block reverse>git clone </PreformattedText>
  ))
