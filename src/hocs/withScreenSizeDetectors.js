import React from 'react'

export const defaultOptions = {
   mobileLimit: 560,
   tabletLimit: 991,
   shouldListenOnResize: true,
}
export const ScreenType = {
   MOBILE: 'MOBILE',
   TABLET: 'TABLET',
   DESKTOP: 'DESKTOP',
}
const options = defaultOptions

export function withScreenSizeDetectors(WrappedComp) {
   return class extends React.Component {
      constructor() {
         super()
         this.state = {
            currentSize: this.getSize(window.innerWidth),
         }
      }
      componentDidMount() {
         if (options.shouldListenOnResize) {
            window.addEventListener('resize', this.onResize)
         }
      }
      // componentWillUnmount() {
      //   this.onResize.cancel()
      //   window.removeEventListener('resize', this.onResize);
      // }

      onResize = () => {
         const newSize = this.getSize(window.innerWidth)
         if (newSize !== this.state.currentSize) {
            this.setState({
               currentSize: newSize,
            })
         }
      }

      getSize(size) {
         if (size <= options.mobileLimit) {
            return ScreenType.MOBILE
         } else if (size >= options.tabletLimit) {
            return ScreenType.DESKTOP
         } else {
            return ScreenType.TABLET
         }
      }

      isMobile = () => {
         return this.state.currentSize === ScreenType.MOBILE
      }
      isTablet = () => {
         return this.state.currentSize === ScreenType.TABLET
      }
      isDesktop = () => {
         return this.state.currentSize === ScreenType.DESKTOP
      }
      render() {
         const detectMethods = {
            isMobile: this.isMobile,
            isTablet: this.isTablet,
            isDesktop: this.isDesktop,
         }
         return <WrappedComp {...detectMethods} {...this.props} />
      }
   }
}
