import React from 'react'
import { storiesOf } from '@storybook/react'
import Badge from '.'

storiesOf('Badge', module)
  .add('default', () => (
    <Badge>Biztravel</Badge>
  ))
  .add('reverse', () => (
    <Badge reverse>Biztravel</Badge>
  ))
  .add('another palette', () => (
    <Badge palette="secondary">Biztravel</Badge>
  ))
