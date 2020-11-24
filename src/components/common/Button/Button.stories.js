import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import '../../../assets/main.css'
import Button from './index'

export default {
   component: Button,
   title: 'Common/Button'
}

export const defaultView = () => <Button />

export const signInButton = () => (
   <Button
      text='Sign in'
      onClick={action('on Submit clicked')}
      className='flex justify-center w-48 h-10 rounded bg-gray-900'
      apiStatus={200}
      onKeyPress={action('on Key pressed')}
   />
)

export const signInButtonLoading = () => (
   <Button
      text='Sign in'
      onClick={action('on Submit clicked')}
      className='flex justify-center w-48 h-10 rounded bg-gray-900'
      apiStatus={100}
      onKeyPress={action('on Key pressed')}
   />
)

export const knobs = () => (
   <Button
      text={text('text', 'Custom text')}
      onClick={action('on Submit clicked')}
      className='flex justify-center w-48 h-10 rounded bg-gray-900'
      apiStatus={number('apiStatus', 100)}
      onKeyPress={action('on Key pressed')}
   />
)

knobs.story = {
   decorators: [withKnobs]
}
