import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, color } from '@storybook/addon-knobs'
import LoadingView from './LoadingView'

export default {
   component: LoadingView,
   title: 'Common/LoadingView'
}

export const defaultView = () => <LoadingView />

export const withFillColor = () => (
   <LoadingView loaderProps={{ fillColor: 'red' }} />
)

export const knobs = () => {
   return <LoadingView loaderProps={{ fillColor: color('fillColor', 'red') }} />
}

knobs.story = {
   decorators: [withKnobs]
}
