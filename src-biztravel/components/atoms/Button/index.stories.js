import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Button', module)
  .add('default', () => (
    <Button>Submit</Button>
  ))
  .add('reverse', () => (
    <Button reverse>Biztravel</Button>
  ))
  .add('another palette', () => (
    <Button palette="secondary">Submit</Button>
  ))
  .add('disabled', () => (
    <Button disabled>Submit</Button>
  ))
  .add('transparent', () => (
    <Button transparent>Biztravel</Button>
  ))
  .add('height', () => (
    <Button height={100}>Biztravel</Button>
  ))
  .add('link', () => (
    <Button href="https://github.com/nolawi/biztravel">Biztravle repo</Button>
  ))
