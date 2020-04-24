import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './style'

const Loading = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading
      ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      )
      : <WrappedComponent {...otherProps} />
  }
  return Spinner
}
export default Loading