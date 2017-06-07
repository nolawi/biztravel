import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from '.'

storiesOf('Link', module)
  .add('default', () => (
    <Link href="https://github.com/nolawi/biztravel">biztravel repository</Link>
  ))
  .add('reverse', () => (
    <Link href="https://github.com/nolawi/biztravel" reverse>biztravel repository</Link>
  ))
  .add('another palette', () => (
    <Link href="https://github.com/nolawi/biztravel" palette="secondary">biztravel repository</Link>
  ))
